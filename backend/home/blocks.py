import json
from importlib.metadata import requires

from django.db import models
from django.urls import reverse
from products.blocks import ImageBlock
from products.models import Product
from wagtail import blocks
from wagtail.core.templatetags.wagtailcore_tags import richtext


class PageChooserBlocks(blocks.PageChooserBlock):
    def get_api_representation(self, value, context=None):
        if value:
            product = Product.objects.get(pk=value.id)
            stream_value = product.image
            image_data = []
            for block in stream_value:
                if isinstance(block.block, ImageBlock):
                    image = block.value.get("image")
                    if image:
                        rendition = image.get_rendition("original").attrs_dict
                        image_data.append({
                            "url": rendition,
                            "alt_text": block.value.get("alt_text"),
                        })
            return {
                "id": value.id,
                "title": value.title,
                "image": image_data,
                "price": value.price,
                "price_with_sale": value.price_with_sale,
                "currency": value.currency,
                "quantity": value.quantity,
                "shipping": value.shipping,
                "color": value.color,
                "brand": value.brand,
                "rating": value.rating,
                "product_slug": f"{value.slug}/"
            }
        return None


class TrendingProductBlock(blocks.StructBlock):
    product = PageChooserBlocks(target_model='products.Product')

    class Meta:
        icon = "product"
        label = "Product"

