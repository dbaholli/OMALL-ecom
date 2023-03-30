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
    list_display = (
        "order_id","total_price", "phone_number", "first_name",
        "last_name", "email", "address",
        "city", "state", "ordered_date", "ordered"
        )
    search_fields = ["ordered", "ordered_date", "products", "email", "address", "city","state", "total_price"]

modeladmin_register(Order)