from django.db import models

# Create your models here.
class Producer(models.Model):
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    alias = models.CharField(max_length = 50)
    
class Instrumental(models.Model):
    title = models.CharField(max_length = 50)
    bpm = models.IntegerField()
    uploaded_at = models.DateTimeField(auto_now=True)