from importlib.metadata import requires

from django.urls import reverse
from django.db import models
from wagtail import blocks
from wagtail.core.templatetags.wagtailcore_tags import richtext
from wagtail.images.blocks import ImageChooserBlock as ImageChooser
from wagtail.images.models import Image
from products.models import Product
from products.blocks import ImageBlock
import json


class TrendingProductBlock(blocks.StructBlock):
    product = blocks.PageChooserBlock(target_model='products.Product')

    class Meta:
        icon = "product"
        label = "Product"
