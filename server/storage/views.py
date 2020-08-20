from rest_framework import views
from rest_framework import viewsets
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.decorators import authentication_classes, permission_classes

from storage import models
# Create your views here.


@authentication_classes([])
@permission_classes([])
class HomePageView(views.APIView):
    """
    APIView for rendering angular front
    """
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'index.html'

    @staticmethod
    def get(request):
        return Response()


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
    """
    CRUD for graphs
    """
    serializer_class = GraphSerializer
    queryset = models.Graph.objects.all()
