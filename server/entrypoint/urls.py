"""entrypoint URL Configuration

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
from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.urls import path, include
from django.views.generic.base import RedirectView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework_jwt.settings import api_settings
from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token, ObtainJSONWebToken

# -------------------- JWT FIX --------------------
if api_settings.JWT_AUTH_COOKIE:
    from rest_framework_jwt.views import RefreshJSONWebToken
    from rest_framework_jwt.views import VerifyJSONWebToken
    from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
    from rest_framework_jwt.serializers import RefreshJSONWebTokenSerializer
    from rest_framework_jwt.authentication import JSONWebTokenAuthentication

    if 'token' in RefreshJSONWebTokenSerializer._declared_fields:
        RefreshJSONWebTokenSerializer._declared_fields.pop('token')
    if 'token' in VerifyJSONWebTokenSerializer._declared_fields:
        VerifyJSONWebTokenSerializer._declared_fields.pop('token')

    class RefreshJSONWebTokenSerializerCookieBased(RefreshJSONWebTokenSerializer):
        def validate(self, attrs):
            if 'token' not in attrs:
                if api_settings.JWT_AUTH_COOKIE:
                    attrs['token'] = JSONWebTokenAuthentication().get_jwt_value(self.context['request'])
            return super(RefreshJSONWebTokenSerializerCookieBased, self).validate(attrs)

    class VerifyJSONWebTokenSerializerCookieBased(VerifyJSONWebTokenSerializer):
        def validate(self, attrs):
            if 'token' not in attrs:
                if api_settings.JWT_AUTH_COOKIE:
                    attrs['token'] = JSONWebTokenAuthentication().get_jwt_value(self.context['request'])
            try:
                response = super(VerifyJSONWebTokenSerializerCookieBased, self).validate(attrs)
            except Exception:
                response = {'token': None, 'user': None}
            return response

    RefreshJSONWebToken.serializer_class = RefreshJSONWebTokenSerializerCookieBased
    VerifyJSONWebToken.serializer_class = VerifyJSONWebTokenSerializerCookieBased


class ExtendedObtainJWT(ObtainJSONWebToken):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        if data['register']:
            user = get_user_model()
            data = json.loads(request.body)
            if user.objects.filter(username=data['username']).exists():
                return Response(data={'message': 'User already exists'}, status=422)
            user.objects.create_user(username=data['username'], password=data['password'])
        response = super().post(request, *args, **kwargs)
        return response


# -------------------- SWAGGER --------------------
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
    permission_classes=(IsAuthenticated,)
)

# -------------------- URLS --------------------
urlpatterns = [
    path('admin/', admin.site.urls),
    path('favicon.ico', RedirectView.as_view(url='/staticfiles/favicon.ico', permanent=True)),
    path('api/token/', ExtendedObtainJWT.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', refresh_jwt_token, name='token_refresh'),
    path('api/token/verify/', verify_jwt_token, name='token_verify'),
    url('swagger(<format>.json|.yaml)/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    url('', include('storage.urls'))
]
