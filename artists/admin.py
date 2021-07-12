from django.contrib import admin
from .models import Artist, SocialLink
# Register your models here.
models = [
    Artist,
    SocialLink
]
for model in models: 
    admin.site.register(model)