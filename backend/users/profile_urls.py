from django.urls import path, include
from users.views import *


urlpatterns = [
    path('<pk>',  user_update_or_delete, name='user_get_create'),
]