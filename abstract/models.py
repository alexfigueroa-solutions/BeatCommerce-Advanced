from django.db import models

# Create your models here.
class AbstractAudioFile(models.Model):
    class Meta:
        abstract = True
    title = models.CharField(
        max_length = 100,
        null = True,
        blank = True
    )
    bpm = models.FloatField(
        blank = True,
        null = True

    )
    audio_file = models.FileField(
        null = True,
        blank = True
    )
    uploaded_at = models.DateTimeField(
        auto_now = True,
        null = True,
        blank = True
    )
class AbstractCollection(models.Model):
    class Meta: 
        abstract = True
    title = models.CharField(
        max_length = 200,
        null = True,
        blank = True
    ),
    img_cover = models.ImageField(
        blank = True,
        null = True,

    ),
    description = models.CharField(
        null = True,
        blank = True,
        max_length = 500
    )

