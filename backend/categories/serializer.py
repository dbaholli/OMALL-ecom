from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import Categories


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = "__all__"
