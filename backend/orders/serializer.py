from email.headerregistry import Group

from rest_framework import serializers
from rest_framework.exceptions import NotFound

from .models import OrderProduct, Orders


class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = ['product', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True)

    class Meta:
        model = Orders
        fields = ['products', 'user', 'order_status', 
                  'first_name', 'last_name', 'email', 
                  'address', 'city', 'postal_code', 
                  'state', 'phone_number', 'total_price']

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        order = Orders.objects.create(**validated_data)
        for product_data in products_data:
            product_obj= OrderProduct.objects.create(**product_data)
            order.products.add(product_obj)
        return order
    
    def update(self, instance, validated_data):
        products_data = validated_data.pop("products")
        products = (instance.products).all()
        products = list(products)
        for index, product_data in enumerate(products_data):
            product = products[index]
            for key, value in product_data.items():
                setattr(product, key, value)
            product.save()
        instance.products.set(products)
        instance.save()

        return instance