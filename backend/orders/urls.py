from django.urls import path
from .views import (
    coupon_update_or_delete,

    get_order,
    order_get_or_create
)

urlpatterns = [
    path('', order_get_or_create, name="order_get_or_create"),
    path('<pk>/', coupon_update_or_delete, name='coupon_update_or_delete'),
    path('list/<pk>/', get_order, name="get_order"),
]
