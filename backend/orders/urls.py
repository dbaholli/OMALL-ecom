from django.urls import path
from .views import (
    add_to_order,
    remove_from_order,
)

urlpatterns = [
    path('add-to-order/<pk>/', add_to_order, name='add-to-order'),
    path('remove-from-order/<pk>/', remove_from_order, name='remove-from-order')
]
