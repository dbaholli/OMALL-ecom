import uuid

from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.models import Page


class Categories(Page):
    uuid_category = models.UUIDField(default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.TextField()
    icon = models.ImageField(default="")

    content_panels = Page.content_panels + [
        FieldPanel("name"),
        FieldPanel("icon"),
    ]

    api_fields = [
        APIField("uuid_category"),
        APIField("created_at"),
        APIField("updated_at"),
        APIField("name"),
        APIField("icon"),
    ]

    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"

    def __str__(self):
        return str(self.name)
