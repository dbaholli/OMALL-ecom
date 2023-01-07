from email import message
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import ContactUsSerializer
from django.core.mail import send_mail

from .models import Contact
from rest_framework.decorators import api_view




@api_view(['GET','POST'])
def contact_us_get_or_create(request):
    if request.method == 'GET':
        queryset = Contact.objects.all()
        serializer = ContactUsSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = ContactUsSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            email = data.get('email')
            message = data.get('message')
            send_mail('Email from Othman Mall', message, email, ['info@othman-mall.com'], fail_silently=False, )   
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def contact_us_delete(request, pk):
    if request.method == "DELETE":
        contact_delete = Contact.objects.get(pk=pk)
        contact_delete.delete()
        return Response("ContactUs succsesfully deleted!",  status=status.HTTP_200_OK)
