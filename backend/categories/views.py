from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Categories
from .serializer import CategoriesSerializer

@api_view(['GET'])
def get_categories(request):

    if request.method == 'GET':
        queryset = Categories.objects.all()
        serializer = CategoriesSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)