from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework_simplejwt.views import TokenRefreshView
from search import views as search_views
from users.token import MyTokenObtainPairView
from wagtail import urls as wagtail_urls
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls
# from django.views.generic import TemplateView

from .api import api_router

urlpatterns = [
    path("django-admin/", admin.site.urls),
    path("admin/", include(wagtailadmin_urls)),
    path("documents/", include(wagtaildocs_urls)),
    path("search/", search_views.search, name="search"),
    path("register/", include("users.urls")),
    path("profile/", include("users.profile_urls")),
    path("products/", include("products.urls")),
    path("contactus/", include("contact_us.urls")),
    path("coupon/", include("coupons.urls")),
    path("categories/", include("categories.urls")),
    path("order/", include("orders.urls")),
    path("token/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # re_path('/', TemplateView.as_view(template_name='index.html')),
]


if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = urlpatterns + [
    path("api/v2/", api_router.urls),
    path("", include(wagtailadmin_urls)),
]
