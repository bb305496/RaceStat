from django.db import models

# Create your models here.

class Track(models.Model):
    name = models.CharField(max_length=100)
    track_img = models.ImageField(upload_to='images/')
    
