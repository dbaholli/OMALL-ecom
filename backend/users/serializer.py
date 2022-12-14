from email.headerregistry import Group
from rest_framework import serializers
from rest_framework.exceptions import NotFound

from users.models import UserProfiles


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfiles
        fields = "__all__"