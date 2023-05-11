from django.urls import path

from .views import get_order, order_get_or_create, order_update_or_delete

urlpatterns = [
    path('', order_get_or_create, name="order_get_or_create"),
    path('<pk>/', order_update_or_delete, name='order_update_or_delete'),
    path('list/<pk>/', get_order, name="get_order"),
]
