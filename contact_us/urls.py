from django.urls import path
from .views import *


urlpatterns = [
    path('',  contact_us_get_or_create, name='contact_us_get_or_create'),
    path('<pk>/', contact_us_delete, name='contact_us_update_or_delete'),
#     path('detail/<str:pk>/', ContactView.as_view({'get': 'retrieve'}), name='contact_us_detail'),
#     path('update/<str:pk>/', ContactView.as_view({'put': 'update'}), name='contact_us_update'),
#     path('delete/<str:pk>/', ContactView.as_view({'get': 'delete'}), name='contact_us_delete'),
] 

