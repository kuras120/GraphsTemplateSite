from rest_framework import views
from rest_framework import status
from rest_framework import viewsets
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer

from storage import models
# Create your views here.


class HomePageView(views.APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'index.html'

    @staticmethod
    def get(request):
        return Response()


class Graph(views.APIView):
    @staticmethod
    def get(request):
        graph = models.Graph.objects.get(id=request.query_params.get('id'))
        return Response(GraphSerializer(graph).data)

    @staticmethod
    def post(request):
        return Response('saved')


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Data
        fields = ('key', 'value')


class GraphSerializer(serializers.ModelSerializer):
    data = DataSerializer(many=True)

    class Meta:
        model = models.Graph
        fields = ('name', 'sub_name', 'description', 'type', 'x_label', 'y_label', 'creation_date', 'data')


class GraphViewSet(viewsets.ModelViewSet):
    queryset = models.Graph.objects.all()
    serializer_class = GraphSerializer
