from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from users.views import *

urlpatterns = [
    path('', user_create, name='user_get_create'),
    path("edit/<pk>",  user_update_or_delete, name='user_get_create')
]