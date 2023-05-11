from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import Coupons


class CouponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupons
        fields = "__all__"