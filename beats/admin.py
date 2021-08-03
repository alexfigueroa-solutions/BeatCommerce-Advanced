from django.contrib import admin
from .models import Instrumental, InstrumentalCollection

models = [
    Instrumental,
    InstrumentalCollection
    ]

for model in models: 
    admin.site.register(model)