from django.contrib import admin

# Register your models here.
from .models import UserProfiles
from django.contrib.auth.models import User
from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    modeladmin_register,
)
# Register your models here.
class UserProfiles(ModelAdmin):

    model = UserProfiles
    menu_label = "User Profiles"
    menu_icon = "user"
    add_to_settings_menu = False 
    menu_order = 3
    exlude_from_explorer = False 
    list_display = ("userid", "user")
    search_fields = ["userid", "user"]

modeladmin_register(UserProfiles)