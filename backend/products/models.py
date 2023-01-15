import uuid

from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.fields import StreamField
from wagtail.models import Page
from .blocks import ImageBlock


class Product(Page):
    uuid_product = models.UUIDField(default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    image = StreamField(
        [
            ("Image", ImageBlock()),
        ],
        use_json_field=True,
        null=True,
        blank=True,
    )

    description = models.CharField(max_length=1000)
    price = models.FloatField()
    price_with_sale = models.FloatField(blank=True)
    currency = models.CharField(max_length=20)
    category = models.ForeignKey("categories.categories", on_delete=models.PROTECT)
    quanitity = models.IntegerField(default=1)
    shipping = models.BooleanField()
    color = models.CharField(max_length=50, blank=True)
    brand = models.CharField(max_length=200, blank=True)
    rating = models.FloatField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("image"),
        FieldPanel("description"),
        FieldPanel("price"),
        FieldPanel("price_with_sale"),
        FieldPanel("currency"),
        FieldPanel("category"),
        FieldPanel("quanitity"),
        FieldPanel("shipping"),
        FieldPanel("color"),
        FieldPanel("brand"),
        FieldPanel("rating"),
    ]

    api_fields = [
        APIField("uuid_product"),
        APIField("created_at"),
        APIField("updated_at"),
        APIField("description"),
        APIField("image"),
        APIField("price"),
        APIField("price_with_sale"),
        APIField("currency"),
        APIField("category"),
        APIField("quanitity"),
        APIField("shipping"),
        APIField("color"),
        APIField("brand"),
        APIField("rating"),
    ]

    class Meta:
        verbose_name = "product"
        verbose_name_plural = "products"
