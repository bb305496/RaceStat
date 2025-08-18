from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Track(models.Model):
    name = models.CharField(max_length=100)
    track_img = models.ImageField(upload_to='images/')
    track_length = models.FloatField()
    best_time = models.CharField(max_length=100)
    car = models.CharField(max_length=100)
    driver = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

