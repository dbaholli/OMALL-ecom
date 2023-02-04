from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import OrderProduct, Orders


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = [
            "id",
            "products", 
            "user", 
            "start_date", 
            "ordered_date",
            "ordered" ,
            "total_price",
            "order_status",
        ]

class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = "__all__"