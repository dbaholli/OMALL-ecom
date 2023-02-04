from django.urls import path, include
from categories.views import *

urlpatterns = [
    path('', get_categories, name='get_categories'),
]