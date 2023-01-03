from email.headerregistry import Group
from rest_framework import serializers
from rest_framework.exceptions import NotFound

from users.models import CustomUser


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"