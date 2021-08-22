from django.db import models
from artists.models import Artist
from abstract.models import AbstractAudioFile, AbstractCollection
# Create your models here.

class Instrumental(AbstractAudioFile):
    producer = models.ForeignKey(
        to = Artist,
        on_delete = models.DO_NOTHING,
        null = True,
        blank = True,
        related_name = "+"
    )
  
class InstrumentalCollection(AbstractCollection):
    instrumentals = models.ManyToManyField(
        to = Instrumental,
        blank = True,
        related_name="+"
    )

    