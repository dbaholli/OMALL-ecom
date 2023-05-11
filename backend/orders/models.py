import uuid

from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.snippets.models import register_snippet


@register_snippet
class OrderProduct(models.Model):
    uuid_order_product = models.UUIDField(default=uuid.uuid4, editable=False)
    product = models.ForeignKey("products.product", on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    ordered = models.BooleanField(default=True)
    price = models.FloatField(null=True)

    panels = [
        FieldPanel("product"),
        FieldPanel("quantity"),
        FieldPanel("price"),
        FieldPanel("ordered")
    ]

    api_fields = [
        APIField("order"),
        APIField("product"),
        APIField("quantity"),
        APIField("price")
    ]

    class Meta:
        verbose_name = "order product"
        verbose_name_plural = "order products"

    def __str__(self):
        return f"{self.quantity} : {self.product.title} : {self.price}"


@register_snippet
class Orders(models.Model):
    order_id = models.BigAutoField(primary_key=True)
    uuid_order = models.UUIDField(default=uuid.uuid4, editable=False)
    products = models.ManyToManyField(OrderProduct)
    user = models.ForeignKey("users.customUser", on_delete=models.CASCADE, blank=True, null=True)
    start_date = models.DateTimeField(auto_now_add=True, editable=False)

    first_name = models.TextField()
    last_name = models.TextField()
    email = models.TextField(verbose_name="email address", max_length=255)
    address = models.TextField()
    city = models.TextField()
    postal_code = models.CharField(max_length=100)
    state = models.TextField()
    phone_number = models.CharField(max_length=15, blank=True)
    ordered_date = models.DateTimeField(auto_now_add=True, editable=True)
    ordered = models.BooleanField(default=True)
    selected_coupon = models.CharField(max_length=500, blank=True, null=True)
    total_price = models.FloatField(default=0)
    
    STATUS_CHOICES = [
        ('pending', 'Ne pritje'),
        ('confirmed', 'E konfirmuar'),
        ('finished', 'E perfunduar'),
        ('cancelled', 'Anuluar'),
    ]
    order_status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    payment_type = models.CharField(max_length=50)
    additional_info = models.CharField(max_length=2000, blank=True, null=True)

    panels = [
        FieldPanel("order_id"),
        FieldPanel("products"),
        FieldPanel("total_price"),
        FieldPanel("order_status"),
        FieldPanel("first_name"),
        FieldPanel("last_name"),
        FieldPanel("email"),
        FieldPanel("address"),
        FieldPanel("city"),
        FieldPanel("postal_code"),
        FieldPanel("state"),
        FieldPanel("phone_number"),
        FieldPanel("ordered"),  
        FieldPanel("payment_type"),
        FieldPanel("additional_info"),
    ]

    api_fields = [
        APIField("order_id"),
        APIField("products"),
        APIField("total_price"),
        APIField("order_status"),
        APIField("first_name"),
        APIField("last_name"),
        APIField("email"),
        APIField("address"),
        APIField("city"),
        APIField("postal_code"),
        APIField("state"),
        APIField("phone_number"),
        APIField("ordered_date"),
        APIField("ordered"),
        APIField("payment_type"),
        APIField("additional_info"),
    ]

    class Meta:
        verbose_name = "order"
        verbose_name_plural = "orders"

    def __str__(self):
        return f"{self.email}:{self.total_price}"
