from importlib.metadata import requires

from django.db import models
from wagtail import blocks
from wagtail.core.templatetags.wagtailcore_tags import richtext
from wagtail.images.blocks import ImageChooserBlock as ImageChooser

class ImageBlock(blocks.StructBlock):
    image = ImageChooser()
    caption = blocks.TextBlock()

    class Meta:
        icon = "image"
        label = "Image"
    
    
