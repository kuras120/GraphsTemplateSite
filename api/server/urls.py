"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from drf_yasg import openapi
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from django.views.generic.base import RedirectView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

schema_view = get_schema_view(
   openapi.Info(
      title="Graph Template Site (GTS)",
      default_version='v1',
      description="It is django + angular template site for future projects",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="wojciech.kur96@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,)
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('favicon.ico', RedirectView.as_view(url='/static/favicon.ico', permanent=True)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    url('swagger(<format>.json|.yaml)/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    url('', include('storage.urls'))
]
