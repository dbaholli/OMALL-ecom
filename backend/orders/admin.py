from django.contrib import admin
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from .models import Orders


class Order(ModelAdmin):

    model = Orders
    menu_label = "Orders"
    menu_icon = "thumbtack"
    add_to_settings_menu = False 
    menu_order = 3
    exlude_from_explorer = False 
    list_display = ("ordered", "total_price")
    search_fields = ["ordered", "total_price"]

modeladmin_register(Order)