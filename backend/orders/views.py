from django.contrib import messages
from django.shortcuts import get_object_or_404
from django.utils import timezone
from products.models import Product
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import OrderProduct, Orders
from .serializer import OrderProductSerializer, OrderSerializer



@api_view(['GET','POST'])
def order_get_or_create(request):
    if request.method == 'GET':
        queryset = Orders.objects.all()
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def coupon_update_or_delete(request, pk):
    try:
        queryset = Orders.objects.get(pk=pk)
    except Orders.DoesNotExist:
        return Response({"error": "Order does not exist"}, status=status.HTTP_404_NOT_FOUND)
 
    if request.method == 'GET':
        serializer = OrderSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = OrderSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        queryset.delete()
        return Response("Order successfully deleted", status=status.HTTP_204_NO_CONTENT)    


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_order(request, pk):  
    if request.method == 'GET':
        order = Orders.objects.filter(user=request.user, pk=pk)
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_orders(request):  
    if request.method == 'GET':
        order = Orders.objects.filter(user=request.user)
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
