from django.db import models

# Create your models here.
class Lead(models.Model):
    full_name = models.CharField(max_length=50)