from django.contrib import admin
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from .models import CustomUser


# Register your models here.
class CustomUsers(ModelAdmin):

    model = CustomUser
    menu_label = "User Profiles"
    menu_icon = "user"
    add_to_settings_menu = False 
    menu_order = 3
    exlude_from_explorer = False 
    list_display = ("user_id", "email")
    search_fields = ["user_id", "email"]

modeladmin_register(CustomUsers)