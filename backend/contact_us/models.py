from django.db import models
from wagtail.snippets.models import register_snippet
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from django.urls import reverse
import uuid
from django.template.defaultfilters import slugify

@register_snippet
class Contact(models.Model):
    contact_id = models.BigAutoField(primary_key=True)
    contact_uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    full_name = models.TextField(max_length=25)
    email = models.EmailField(max_length=25)
    message = models.TextField(max_length=1000)
    slug = models.SlugField(blank=True)
    
    panels = [
        FieldPanel('full_name'),
        FieldPanel('email'),
        FieldPanel('message'),
    ]

    apifields = [
        APIField('full_name'),
        APIField('email'),
        APIField('message'),
        APIField('slug')
    ]

    class Meta:
        verbose_name = "contacted_us"
        verbose_name_plural = "contacted_us"

    def save(self, *args, **kwargs):
        if not self.contact_id:
            self.slug = slugify(self.full_name)
        super(Contact, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("contact_us_detail", args=(self.contact_id,))

    def get_absolute_url(self):
        return reverse("contact_us_update", args=(self.contact_id,))