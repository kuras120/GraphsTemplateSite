from django.db import transaction
from rest_framework import views
from rest_framework import serializers
from rest_framework import views
from rest_framework import viewsets
from rest_framework.decorators import permission_classes, renderer_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response

from storage import models


# Create your views here.


@renderer_classes([TemplateHTMLRenderer])
@permission_classes([])
class HomePageView(views.APIView):
    """
    APIView for rendering angular front
    """
    template_name = 'index.html'

    @staticmethod
    def get(request):
        return Response()


@api_view(['GET'])
@permission_classes([])
def clear(request):
    response = Response(status=200)
    if 'ACCESS-TOKEN' in request.COOKIES or 'XSRF-TOKEN' in request.COOKIES:
        response.set_cookie('ACCESS-TOKEN', None, 0)
        response.set_cookie('XSRF-TOKEN', None, 0)
    return response


class DataSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Data
        fields = ('key', 'value', 'graph')
        read_only_fields = ('graph',)


class StatisticsSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Statistics
        fields = ('a_mean', 'w_mean', 'median', 'dominant',
                  'std_deviation', 'highest', 'lowest', 'graph')
        read_only_fields = ('a_mean', 'w_mean', 'median', 'dominant',
                            'std_deviation', 'highest', 'lowest', 'graph')


class GraphSerializer(serializers.ModelSerializer):

    data = DataSerializer(many=True)
    statistics = StatisticsSerializer(read_only=True)

    class Meta:
        model = models.Graph
        fields = ('name', 'sub_name', 'description', 'type', 'x_label',
                  'y_label', 'creation_date', 'data', 'statistics')
        read_only_fields = ('creation_date',)

    @transaction.atomic
    def create(self, validated_data):
        data_store = validated_data.pop('data')
        graph = super().create(validated_data)
        models.Statistics.objects.create_statistics(data_store, graph.id).save()
        for data in data_store:
            models.Data.objects.create(key=data['key'], value=data['value'], graph_id=graph.id).save()
        return graph

    @transaction.atomic
    def update(self, instance, validated_data):
        data_store = validated_data.pop('data')
        graph = super().update(instance, validated_data)
        # models.Statistics.objects.filter(graph_id=graph.id)
        models.Statistics.objects.filter(graph_id=graph.id).update_statistics(data_store).save()
        models.Data.objects.filter(graph_id=graph.id).delete()
        for data in data_store:
            models.Data.objects.update(key=data['key'], value=data['value'], graph_id=graph.id)
        return graph


@permission_classes([IsAuthenticated])
class DataViewSet(viewsets.ModelViewSet):
    serializer_class = DataSerializer
    queryset = models.Data.objects.all()
    http_method_names = []


@permission_classes([IsAuthenticated])
class StatisticsViewSet(viewsets.ModelViewSet):
    serializer_class = StatisticsSerializer
    queryset = models.Statistics.objects.all()
    http_method_names = []


@permission_classes([IsAuthenticated])
class GraphViewSet(viewsets.ModelViewSet):
    """
    CRUD for graphs
    """
    serializer_class = GraphSerializer
    queryset = models.Graph.objects.all()
    http_method_names = ['get', 'post', 'delete', 'put']
