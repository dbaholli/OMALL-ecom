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


@api_view(('POST',))
@permission_classes([IsAuthenticated])
def add_to_order(request, pk):
    """Add a product to a user's order"""
    product = get_object_or_404(Product, pk=pk)
    order_product, _ = OrderProduct.objects.get_or_create(product=product, user=request.user, ordered=False)
    order, _ = Orders.objects.get_or_create(user=request.user, ordered=False)
    if order.products.filter(product=product).exists():
        order_product.quantity += 1
        order_product.price = order_product.get_final_price(order_product.quantity)
        order_product.save() 
        order.total_price = order.get_total_price()
        order.save()
        order_serializer = OrderSerializer(order)
        product_serializer = OrderProductSerializer(order_product)
    else:
        order.products.add(order_product)
        order_product.price = order_product.get_final_price(order_product.quantity)
        order_product.save()
        order.total_price = order.get_total_price()
        order.save()
        order_serializer = OrderSerializer(order)
        product_serializer = OrderProductSerializer(order_product)
    return Response(({"order":order_serializer.data},{"products":product_serializer.data}), status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_from_order(request, pk):
    """Remove a product from a user's order"""
    try:
        product = get_object_or_404(Product, pk=pk)
        order_product, _ = OrderProduct.objects.get_or_create(
        product=product, user=request.user, ordered=False)
        order, _ = Orders.objects.get_or_create(user=request.user, ordered=False)
    except OrderProduct.DoesNotExist or Orders.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
   
    if order_product.quantity > 1:
        order_product.quantity -= 1
        print(order_product.quantity)
        order_product.price = order_product.get_final_price(order_product.quantity)
        order_product.save() 
        order.total_price = order.get_total_price()
        order.save()
    else:
        order.products.remove(order_product)
        order_product.price = order_product.get_final_price(order_product.quantity)
        order.total_price = order.get_total_price()
        order_product.save() 
        order.save()
        order_product.delete()

    if order.products.count() == 0:
        order.delete()

    order_serializer = OrderSerializer(order)
    return Response({"Order":order_serializer.data}, status=status.HTTP_200_OK)