from rest_framework import serializers
from .models import Instrumental, Producer

class InstrumentalSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Instrumental
        fields = (
            "title",
            "bpm",
            "uploaded_at"
        )

class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producer
        fields = (
            "first_name",
            "last_name",
            "alias"
        )