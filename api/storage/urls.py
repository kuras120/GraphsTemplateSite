from storage import views
from django.urls import path
from rest_framework import routers

router = routers.SimpleRouter()
router.register('api/graphs', views.GraphViewSet)

urlpatterns = [
    path('', views.HomePageView.as_view())
]
urlpatterns += router.urls
