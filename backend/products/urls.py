from django.urls import path, include
from .views import *

urlpatterns = [
    path('list/', get_product, name='get_all_products'),
    path('<slug:slug>/', get_product_by_category, name='get_product_by_category')

]