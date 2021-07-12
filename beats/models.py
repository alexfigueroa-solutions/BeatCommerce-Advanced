from django.db import models
from artists.models import Artist
# Create your models here.
class AbstractAudioFile(models.Model):
    title = models.CharField(
        max_length = 100,
        null = True,
        blank = True
    )
    bpm = models.FloatField(
        blank = True,
        null = True

    )
    uploaded_at = models.DateTimeField(
        auto_now = True,
        null = True,
        blank = True
    )
  
class Instrumental(AbstractAudioFile):
    producer = models.ForeignKey(
        to = Artist,
        on_delete = models.DO_NOTHING,
        null = True,
        blank = True
    )
    