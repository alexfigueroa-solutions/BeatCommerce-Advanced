from django.shortcuts import render
from .models import Instrumental, Producer
from .serializers import ProducerSerializer, InstrumentalSerializer
from rest_framework import generics
# Create your views here.

class InstrumentalListCreate(generics.ListCreateAPIView):
    queryset = Instrumental.objects.all()
    serializer_class = InstrumentalSerializer

class ProducerListCreate(generics.ListCreateAPIView):
    queryset = Producer.objects.all()
    serializer_class = ProducerSerializer