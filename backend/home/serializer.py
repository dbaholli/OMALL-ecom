from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import HomePage
import json
from wagtail.images.models import Image
from products.models import Product
from django.urls import reverse
from django.http import HttpRequest

class HomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomePage
        fields = "__all__"

    def to_representation(self, instance):
        data = super().to_representation(instance)
        product = json.loads(data["trending_products"])
        prod_id = product[0]['value']['product']
        product = Product.objects.get(id=prod_id)
        img = list(product.image)
        img_block = img[0]
        image = img_block.value['image']
        request = self.context.get('request', None)
        host = request.get_host() if request else 'localhost:8000'
        data['trending_products'] = {
            "title": product.title,
            "image": {
                "id":image.id,
                "title": image.title,
                "url": image.file.url,
                "original": image.get_rendition("original").attrs_dict,
                "thumbnail": image.get_rendition("fill-120x120").attrs_dict,
                },
            "price": product.price,
            "price_with_sale": product.price_with_sale,
            "currency": product.currency,
            "quantity": product.quantity,
            "shipping": product.shipping,
            "color": product.color,
            "brand": product.brand,
            "rating": product.rating,
            "product_url": f"http://{host}/products/list/{product.slug}/"
            }
        return data
