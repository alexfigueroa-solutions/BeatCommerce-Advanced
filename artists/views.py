from django.db.models import query
from django.shortcuts import render
from rest_framework import viewsets
from .models import Artist, SocialLink
from .serializers import ArtistSerializer, SocialLinkSerializer
# Create your views here.

class ArtistView(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()
    
class SocialLinkView(viewsets.ModelViewSet):
    serializer_class = SocialLinkSerializer
    queryset = SocialLink.objects.all()