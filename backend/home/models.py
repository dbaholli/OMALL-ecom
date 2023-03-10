import uuid

from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.fields import StreamField
from wagtail.models import Page
from .blocks import TrendingProductBlock
from wagtail.snippets.models import register_snippet

@register_snippet
class HomePage(Page):

    trending_products = StreamField(
        [
            ("Products", TrendingProductBlock()),
        ],
        use_json_field=True,
        null=True,
        blank=True
    )
    
    content_panels = Page.content_panels + [
        FieldPanel("trending_products"),
    ]

    api_fields = [
        APIField("trending_products"),    
    ]

    class Meta:
        verbose_name = "home"
