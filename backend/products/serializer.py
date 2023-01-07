from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
