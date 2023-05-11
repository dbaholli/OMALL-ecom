import random
import time
import uuid

from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.snippets.models import register_snippet


class UserManager(UserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Creates and saves a User with the given email and password."""
        if not email:
            raise ValueError("Users must have an email address")
        email = email = self.normalize_email(email)
        self.model = get_user_model()
        user = self.model(email=email, **extra_fields)
        extra_fields.setdefault("username", email)
        user.set_password(password)
        user.save()
        return user

    def create_staffuser(self, email, password, **extra_fields):
        """Creates and saves a staff user with the given email and password."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("username", email)
        return self.create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Creates and saves a superuser with the given email and password."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        return self.create_user(email, password, **extra_fields)


@register_snippet
class CustomUser(AbstractUser):
    user_id = models.BigAutoField(primary_key=True)
    uuid_user = models.UUIDField(default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    username = None
    email = models.TextField(verbose_name="email address", max_length=255, unique=True)
    address = models.TextField(blank=True)
    city = models.TextField(blank=True)
    state = models.TextField(blank=True)
    postal_code = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)

    is_active = models.BooleanField(null=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    panels = [
        FieldPanel("user_id"),
        FieldPanel("first_name"),
        FieldPanel("last_name"),
        FieldPanel("email"),
        FieldPanel("address"),
        FieldPanel("city"),
        FieldPanel("state"),
        FieldPanel("postal_code"),
        FieldPanel("phone_number"),
        FieldPanel("is_active"),
        FieldPanel("is_superuser"),
        FieldPanel("is_staff"),
    ]

    api_fields = [
        APIField("first_name"),
        APIField("last_name"),
        APIField("email"),
        APIField("address"),
        APIField("city"),
        APIField("state"),
        APIField("postal_code"),
        APIField("phone_number"),
        APIField("is_active"),
        APIField("is_superuser"),
        APIField("is_staff"),
    ]

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"

    def __str__(self):
        return str(self.email)
