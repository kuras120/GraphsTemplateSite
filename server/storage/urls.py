from storage import views
from django.urls import path
from rest_framework import routers

router = routers.SimpleRouter()
router.register('api/graphs', views.GraphViewSet)
router.register('api/data', views.DataViewSet)

urlpatterns = [
    path('', views.HomePageView.as_view()),
    path('api/token/revoke/', views.clear)
]
urlpatterns += router.urls
