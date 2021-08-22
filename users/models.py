
# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser




class AppUser(AbstractUser):
    OCCUPATION_CHOICES =  [
        ("Producer", "Producer"),
        ("Artist", "Artist"),
        ("Manager", "Manager"),
        ("Listener", "Listener"),
        ("Other", "Other")
    ]
    occupation = models.CharField(
        max_length = 500,
        choices = OCCUPATION_CHOICES,
        blank = True,
        null = True
    )
    
 
   