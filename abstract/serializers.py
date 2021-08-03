from rest_framework import serializers
from .models import AbstractAudioFile, AbstractCollection

class AbstractAudioFileSerializer(serializers.Serializer):
    title = serializers.CharField()
    id = serializers.CharField()
    bpm = serializers.IntegerField()
    audio_file = serializers.FileField()
    uploaded_at = serializers.DateTimeField()
    class Meta:
    
        fields = [
            "title",
            "bpm",
            "audio_file",
            "uploaded_at"
        ]
        

class AbstractCollectionSerializer(serializers.Serializer):
    title = serializers.CharField()
    img_cover = serializers.ImageField()
    description = serializers.CharField()
    class Meta:
 
        fields =  [
            "title",
            "img_cover",
            "description"
        ]