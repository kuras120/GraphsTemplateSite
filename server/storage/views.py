from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse, JsonResponse

from rest_framework import status
from rest_framework import viewsets
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)


class LinksPageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'links.html', context=None)


# class Users(TemplateView):
#     @staticmethod
#     @api_view(['GET'])
#     def get_user(request):
#         user = User.objects.get(id=request.query_params.get('id'))
#         return JsonResponse(UserSerializer(user).data)
#
#
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ('name', 'surname', 'password', 'role')
#
#
# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
