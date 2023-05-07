from django.urls import path, include
from users.views import *

urlpatterns = [
    path('', user_create, name='user_create'),
    path('<pk>/',  user_update_or_delete, name='user_update_or_delete'), 
]