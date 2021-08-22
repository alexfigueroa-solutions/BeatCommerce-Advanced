
from django.contrib import admin
from .models import AppUser

class AppUserAdmin(admin.ModelAdmin):
    model = AppUser


admin.site.register(AppUser, AppUserAdmin)