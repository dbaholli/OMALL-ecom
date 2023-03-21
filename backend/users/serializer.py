from email.headerregistry import Group
from rest_framework import serializers
from rest_framework.exceptions import NotFound

from users.models import CustomUser


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "user_id",
            "first_name",
            "last_name",
            "email",
            "address",
            "city",
            "state",
            "postal_code",
            "phone_number",
            "is_active",
            "is_superuser",
            "is_staff"
            ]