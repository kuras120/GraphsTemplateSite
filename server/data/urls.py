from django.conf.urls import url
from django.urls import path, include

from data import views
from rest_framework import routers

router = routers.DefaultRouter()
# router.register(r'customers', views.UserViewSet)

urlpatterns = [
    url('^$', views.HomePageView.as_view()),
    url('^links/$', views.LinksPageView.as_view()),
    # url('^user/$', views.Users.get_user),  # simple view
    # url('^apitest/$', views.calc_test),  # for REST API test
]
