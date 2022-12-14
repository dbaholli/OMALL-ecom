# from django.shortcuts import render
# from users.serializer import UserProfileSerializer
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.decorators import api_view

# # Create your views here.

# @api_view(['POST'])
# def user_get_or_create(request):
#     if request.method == 'POST':
#         serializer = UserProfileSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

"""I will continue with this later"""