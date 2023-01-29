import uuid

from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.snippets.models import register_snippet


@register_snippet
class OrderProduct(models.Model):
    user = models.ForeignKey("users.customUser", on_delete=models.CASCADE)
    product = models.ForeignKey("products.product", on_delete=models.CASCADE)
    coupon = models.ForeignKey("coupons.coupons", on_delete=models.CASCADE, blank=True, null=True)
    quantity = models.IntegerField(default=1)
    ordered = models.BooleanField(default=False)
    price = models.FloatField(null=True)

    panels = [
        FieldPanel("product"),
        FieldPanel("coupon"),    
        FieldPanel("quantity"),
        FieldPanel("price"),
        FieldPanel("ordered")
    ]

    api_fields = [
        APIField("order"),
        APIField("product"),
        APIField("coupon"),
        APIField("quantity"),
        APIField("price")
    ]

    class Meta:
        verbose_name = "order product"
        verbose_name_plural = "order products"

    def __str__(self):
        return f"{self.quantity} : {self.product.title} : {self.price}"

    def get_total_item_price(self, quantity):
        return quantity * self.product.price

    def get_discount_item_price(self, quantity):
        return quantity * self.product.price_with_sale

    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_discount_item_price()

    def get_final_price(self,  quantity):
        if self.product.price_with_sale:
            return self.get_discount_item_price(quantity=quantity)
        return self.get_total_item_price(quantity=quantity)


@register_snippet
class Orders(models.Model):
    products = models.ManyToManyField(OrderProduct)
    user = models.ForeignKey("users.customUser", on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True, editable=False)

    ordered_date = models.DateTimeField(null=True)
    ordered = models.BooleanField(default=False)
    total_price = models.FloatField(default=0)
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('finished', 'Finished'),
        ('cancelled', 'Cancelled'),
    ]
    order_status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    panels = [
        FieldPanel("products"),
        FieldPanel("user"),
        FieldPanel("ordered_date"),
        FieldPanel("ordered"),
        FieldPanel("total_price"),
        FieldPanel("order_status")
    ]

    api_fields = [
        APIField("products"),
        APIField("user"),
        APIField("start_date"),
        APIField("ordered_date"),
        APIField("ordered"),
        APIField("total_price"),
        APIField("order_status")

    ]

    class Meta:
        verbose_name = "order"
        verbose_name_plural = "orders"

    def __str__(self):
        return f"{self.user.email}:{self.total_price}"
    
    def get_total_price(self):
        total = 0
        for order_products in self.products.all():
            total += order_products.price
        return total
