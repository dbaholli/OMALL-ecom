from categories.models import Categories
from categories.serializer import CategoriesSerializer
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import HomePage
from .serializer import HomeSerializer


@api_view(['GET'])
def get_home(request):
    if request.method == 'GET':
        home = HomePage.objects.all()
        serializer = HomeSerializer(home, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

