from django.urls import path, include
from .views import *

urlpatterns = [
    path('', coupon_get_or_create, name='coupon_get_or_create'),
    path('<slug>/',  coupon_update_or_delete, name='coupon_update_or_delete'), 
]