from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from users.views import *

urlpatterns = [
    path('', user_get_or_create, name='user_get_create'),
]