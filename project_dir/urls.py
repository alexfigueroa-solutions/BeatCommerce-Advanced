"""project_dir URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
import artists.views as artist_views
import beats.views as beat_views

router = routers.DefaultRouter()

router_item_list = [
    {
        "plural": r"artists",
        "view": artist_views.ArtistView,
        "singular": "artist"
    },
    {
        "plural": r"social-links",
        "view": artist_views.SocialLinkView,
        "singular": "social-link"
    },
    {
        "plural": r"instrumentals",
        "view": beat_views.InstrumentalView,
        "singular": "instrumental"
    },
    {
        "plural": r"instrumental-collections",
        "view": beat_views.InstrumentalCollectionView,
        "singular": "instrumental-collection"
    }
]
for router_item in router_item_list:
    router.register(
        router_item["plural"],
        router_item["view"],
        router_item["singular"]
    )

urlpatterns = [
    path('admin/', admin.site.urls),
    path(
        "api/",
        include(router.urls)
    ),
    path(
        "infinite-api/",
        beat_views.ReactInfiniteInstrumentalView.as_view(),
        name = "infinite-react"
    )
]
