from importlib.metadata import requires

from django.db import models
from wagtail import blocks
from wagtail.core.templatetags.wagtailcore_tags import richtext
from wagtail.images.blocks import ImageChooserBlock as ImageChooser


class ImageChooserBlock(ImageChooser):
    def get_api_representation(self, value, context=None):
        if value:
            return {
                "id": value.id,
                "title": value.title,
                "url": value.file.url,
                "original": value.get_rendition("original").attrs_dict,
                "thumbnail": value.get_rendition("fill-120x120").attrs_dict,
            }
        return super().get_api_representation(value, context)


class ImageBlock(blocks.StructBlock):
    image = ImageChooserBlock()
    caption = blocks.TextBlock()

    class Meta:
        icon = "image"
        label = "Image"
