from django.contrib import admin
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from .models import Coupons




class Coupon(ModelAdmin):

    model = Coupons
    menu_label = "Coupons"
    menu_icon = "tag"
    add_to_settings_menu = False 
    menu_order = 3
    exlude_from_explorer = False 
    list_display = ("title", "discount", "expiry_date")
    search_fields = ["title", "discount"]

modeladmin_register(Coupon)