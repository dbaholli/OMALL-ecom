from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import OrderProduct, Orders


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = "__all__"

class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = "__all__"