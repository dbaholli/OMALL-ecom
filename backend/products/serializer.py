from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import Product
import json
from wagtail.images.models import Image



class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"

    def to_representation(self, instance):
        data = super().to_representation(instance)
        image_block = json.loads(data['image'])
        image_id = image_block[0]['value']['image']
        image = Image.objects.get(id=image_id)
        caption = image_block[0]['value']['caption']
        data['image'] = {
            'id':image.id,
            "title": image.title,
            "url": image.file.url,
            "original": image.get_rendition("original").attrs_dict,
            "thumbnail": image.get_rendition("fill-120x120").attrs_dict,
            'caption': caption,
            }
        return data
