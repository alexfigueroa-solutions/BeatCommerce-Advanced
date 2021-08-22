from rest_framework import serializers
from abstract.serializers import AbstractAudioFileSerializer, AbstractCollectionSerializer
from .models import Instrumental, InstrumentalCollection
from artists.serializers import ArtistSerializer
class InstrumentalSerializer(AbstractAudioFileSerializer, serializers.ModelSerializer):
    producer = ArtistSerializer(
        many = False,
        read_only = False
    )
    class Meta: 
        model = Instrumental
        fields = AbstractAudioFileSerializer.Meta.fields + [
            "producer"
        ]

class InstrumentalCollectionSerializer(AbstractCollectionSerializer, serializers.ModelSerializer):
    collection_instrumentals = InstrumentalSerializer(
        many = True,
        read_only = True
    )
    class Meta:
        model = InstrumentalCollection,
        fields = AbstractAudioFileSerializer.Meta.fields +  [    
            "instrumentals"
        ]
