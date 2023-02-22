import uuid

from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.fields import StreamField
from wagtail.models import Page
from .blocks import TrendingProductBlock

class HomePage(Page):

    # product = models.ForeignKey("products.product", on_delete=models.CASCADE)
    
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

    # def save(self, clean=True, user=None, log_action=False, **kwargs):
    #     self.trending_products.image = f"{self.trending_products.product.image}"
    #     self.trending_products.price = f"{self.trending_products.product.price}"
    #     self.trending_products.price_with_sale = f"{self.trending_products.product.price_with_sale}"
    #     self.trending_products.currency = f"{self.product.currency}"
    #     self.trending_products.image = f"{self.product.image}"
    #     self.trending_products.image = f"{self.product.image}"

    #     return super().save(clean, user, log_action, **kwargs)
