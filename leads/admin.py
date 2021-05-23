from django.contrib import admin
from .models import Lead

# Register your models here.
models = [
    Lead
]
for model in models: 
    admin.site.register(model)