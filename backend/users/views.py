import json

from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from users.serializer import UserProfileSerializer

from .models import CustomUser, UserManager


@api_view(['POST'])
def user_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        address = data.get('address')
        city = data.get('city')
        state = data.get('state')
        phone_number = data.get('phone_number')

        manager = UserManager()
        user = manager.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            address=address,
            city=city,
            state=state,
            phone_number=phone_number,
            is_active=True
            )
        return HttpResponse("User created successfully: {}".format(user))
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_update_or_delete(request, pk):
    try:
        queryset = CustomUser.objects.get(pk=pk)
    except CustomUser.DoesNotExist:
        return Response({"error": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserProfileSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        partial = True
        serializer = UserProfileSerializer(queryset, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)