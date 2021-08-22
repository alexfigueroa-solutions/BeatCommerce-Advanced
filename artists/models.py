from django.db import models

# Create your models here.
class SocialLink(models.Model):
    SOCIAL_MEDIUM_CHOICES = (
        ("youtube", "youtube"),
        ("soundcloud", "soundcloud"),
        ("twitter", "twitter"),
        ("instagram","instagram")
    )
    medium = models.CharField(
        max_length = 500,
        choices = SOCIAL_MEDIUM_CHOICES,
        null = True,
        blank = True
    )
    url = models.URLField(
        null = True,
        blank = True
    )
    username = models.CharField(
        null = True,
        blank = True,
        max_length = 1000
    )
class Artist(models.Model):
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    alias = models.CharField(max_length = 50)
    social_links = models.ManyToManyField(
        to = SocialLink,
        blank = True
        
    )
    bio = models.CharField(
        max_length = 100000,
        blank = True,
        null = True
    )
    def __str__(self):
        return f"{self.alias}"

  