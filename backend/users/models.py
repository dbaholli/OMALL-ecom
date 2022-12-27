import random
import time
import uuid

# Create your models here.
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.urls import reverse
from django.utils import timezone
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.snippets.models import register_snippet


# Create your models here.
@register_snippet
class UserProfiles(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    userid = models.BigAutoField(primary_key=True)
    uuiduser = models.UUIDField(default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.TextField()
    surname = models.TextField()
    email = models.TextField()
    address = models.TextField()
    city = models.TextField()
    state = models.TextField()
    phone_number = models.CharField(max_length=15)

    active = models.BooleanField(editable=False, null=True)

    panels = [
        FieldPanel('user'),
        FieldPanel('userid'),
        FieldPanel('name'),
        FieldPanel('surname'),
        FieldPanel('email'),
        FieldPanel('address'),
        FieldPanel('city'),
        FieldPanel('state'),
        FieldPanel('phone_number')

    ]

    apifields = [
        APIField('user'),
        APIField('userid'),
        APIField('name'),
        APIField('surname'),
        APIField('email'),
        APIField('address'),
        APIField('city'),
        APIField('state'),
        APIField('phone_number')
    ]

    class Meta:
        verbose_name = "profile"
        verbose_name_plural = "profiles"
        
    def __str__(self):
        return str(self.user)

    def get_absolute_url(self):
        return reverse("profiles_detail", args=(self.userid))

    def get_absolute_url(self):
        return reverse("profiles_update", args=(self.userid))