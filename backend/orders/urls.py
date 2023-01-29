from django.urls import path
from .views import (
    add_to_order,
    remove_from_order,
    get_order,
    get_all_orders
)

urlpatterns = [
    path('list/', get_all_orders, name="get_all_orders"),
    path('<pk>/', get_order, name="get_order"),
    path('add-to-order/<pk>/', add_to_order, name='add-to-order'),
    path('remove-from-order/<pk>/', remove_from_order, name='remove-from-order')
]
