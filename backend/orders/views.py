from coupons.models import Coupons
from products.models import Product
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Orders
from .serializer import OrderSerializer


@api_view(['GET','POST'])
def order_get_or_create(request):
    if request.method == 'GET':
        queryset = Orders.objects.all()
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        data = request.data
        get_product_price(request.data)
        get_total_price(request.data)
        if "selected_coupon" in data:
            if data["selected_coupon"] != None:
                slug = data["selected_coupon"]
                discount = Coupons.objects.get(slug=slug).discount
                new_price = round(data["total_price"] * (1 - (discount/100)), 2)
                data["total_price"] = new_price
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():   
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'PUT', 'DELETE'])
def order_update_or_delete(request, pk):
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
        order = Orders.objects.filter(user=pk)
        serializer = OrderSerializer(order, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


def get_product_price(data):
    for index in range(len(data["products"])):
        prod_id = data["products"][index]["product"]
        product = Product.objects.get(id=prod_id)
        if product.price_with_sale == None:
            prod_price = product.price
        else:
            prod_price = product.price_with_sale
        prod_value = prod_price * data["products"][index]["quantity"]
        data["products"][index]["price"] = prod_value


def get_total_price(data):
    total=0
    for index in range(len(data["products"])):
        prod_price = data["products"][index]["price"]
        total += prod_price
    data["total_price"] = total
