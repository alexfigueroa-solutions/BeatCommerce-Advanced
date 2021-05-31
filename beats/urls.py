from django.urls import path
from . import views

urlpatterns = [
    path('api/instrumental/', views.InstrumentalListCreate.as_view()),
    path('api/producer/', views.ProducerListCreate.as_view()),
]