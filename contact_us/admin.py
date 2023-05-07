from django.contrib import admin
from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    modeladmin_register,
)
from .models import Contact

class contacted_us(ModelAdmin):

    model = Contact
    menu_label = "Contacted Us"
    menu_icon = "mail"
    add_to_settings_menu = False 
    exlude_from_explorer = False 
    list_display = ('contact_id', 'full_name', 'email','message', 'slug')
    search_fields = ['full_name', 'email']

modeladmin_register(contacted_us)