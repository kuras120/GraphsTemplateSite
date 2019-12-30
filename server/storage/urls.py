from django.conf.urls import url
from django.urls import path, include

from storage import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'graphs', views.GraphViewSet)

urlpatterns = [
    url('^$', views.HomePageView.as_view()),
    url('^graph/$', views.Graph.as_view())
]

urlpatterns += router.urls
