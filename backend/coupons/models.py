import uuid

from django.db import models
from django.template.defaultfilters import slugify
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.snippets.models import register_snippet


@register_snippet
class Coupons(models.Model):
    coupon_id = models.BigAutoField(primary_key=True)
    coupon_uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=100)
    discount = models.IntegerField()
    expiry_date = models.DateTimeField(blank=True)
    slug = models.SlugField(blank=True)


    panels = [
        FieldPanel("title"),
        FieldPanel("discount"),
        FieldPanel("expiry_date"), 
        FieldPanel("slug"),      
    ]

    api_fields = [
        APIField("coupon_id"),
        APIField("title"),
        APIField("discount"),
        APIField("expiry_date"),
        APIField("slug")
    ]

    class Meta:
        verbose_name = "coupon"
        verbose_name_plural = "coupons"

    def save(self, *args, **kwargs):
        if not self.coupon_id:
            self.slug = slugify(self.title)
        super(Coupons, self).save(*args, **kwargs)