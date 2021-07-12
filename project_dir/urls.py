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
<<<<<<< HEAD
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('beats.urls'))
=======
from rest_framework import routers
import artists.views as artist_views

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
    )
>>>>>>> 7233e50ffcf548050c102dec14182634ac4f2336
]
