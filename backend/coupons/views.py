from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Coupons
from .serializer import CouponsSerializer


@api_view(['GET','POST'])
def coupon_get_or_create(request):
    if request.method == 'GET':
        queryset = Coupons.objects.all()
        print(queryset)
        serializer = CouponsSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CouponsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def coupon_update_or_delete(request, slug):
    try:
        queryset = Coupons.objects.get(slug=slug)
    except Coupons.DoesNotExist:
        return Response({"error": "Coupon does not exist"}, status=status.HTTP_404_NOT_FOUND)
 
    if request.method == 'GET':
        serializer = CouponsSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = CouponsSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        queryset.delete()
        return Response("Coupon successfully deleted", status=status.HTTP_204_NO_CONTENT)