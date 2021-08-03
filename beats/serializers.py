from rest_framework import serializers
from abstract.serializers import AbstractAudioFileSerializer, AbstractCollectionSerializer
from .models import Instrumental, InstrumentalCollection
class InstrumentalSerializer(AbstractAudioFileSerializer, serializers.ModelSerializer):
    
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
