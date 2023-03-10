from django.contrib import admin
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from .models import HomePage


class HomePageAdmin(ModelAdmin):
    
    model = HomePage
    menu_label = 'Trending Products'
    menu_icon = 'order' 
    menu_order = 1
    add_to_settings_menu = False 
    exclude_from_explorer = False 
    can_create = False

modeladmin_register(HomePageAdmin)