from django.core.exceptions import MultipleObjectsReturned
from django.db import models
from django.shortcuts import redirect
from django.urls import path, reverse

from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet


class CustomAPIEndpoint(PagesAPIViewSet):
    """Our custom Pages API endpoint that allows finding pages by pk or slug"""

    def detail_view(self, request, pk=None, slug=None):
        param = pk
        if slug is not None:
            self.lookup_field = 'slug'
            param = slug
        try:
            return super().detail_view(request, param)
        except MultipleObjectsReturned:
            # Redirect to the listing view, filtered by the relevant slug
            # The router is registered with the `wagtailapi` namespace,
            # `pages` is our endpoint namespace and `listing` is the listing view url name.
            return redirect(
                reverse('wagtailapi:pages:listing') + f'?{self.lookup_field}={param}'
            )

    @classmethod
    def get_urlpatterns(cls):
        """ This returns a list of URL patterns for the endpoint"""
        return [
            path('', cls.as_view({'get': 'listing_view'}), name='listing'),
            path('<slug:slug>/', cls.as_view({'get': 'detail_view'}), name='detail'),
            path('<int:pk>/', cls.as_view({'get': 'detail_view'}), name='detail'),
            path('find/', cls.as_view({'get': 'find_view'}), name='find1'),
        ]

api_router = WagtailAPIRouter('wagtailapi')
api_router.register_endpoint('pages', CustomAPIEndpoint)
api_router.register_endpoint('images', ImagesAPIViewSet)
api_router.register_endpoint('documents', DocumentsAPIViewSet)