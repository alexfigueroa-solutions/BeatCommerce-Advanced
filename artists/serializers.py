from rest_framework import serializers
from .models import Artist, SocialLink



class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = (
            "medium",
            "url",
            "username"
        )
class ArtistSerializer(serializers.ModelSerializer):
    social_links = SocialLinkSerializer(
        many = True,
        read_only = True
    )
    class Meta: 
        model = Artist
        fields = (
            "first_name",
            "last_name",
            "alias",
            "social_links"
        )

