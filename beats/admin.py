from django.contrib import admin
from .models import Instrumental

models = [
    Instrumental
    ]

for model in models: 
    admin.site.register(model)