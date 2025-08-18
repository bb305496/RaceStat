from django.db import models


# Create your models here.

class PriceList(models.Model):
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    price = models.DecimalField(decimal_places=2, max_digits=10)
    year = models.IntegerField()
    displacement = models.IntegerField()
    hp = models.IntegerField()
    torque = models.IntegerField()
    top_speed = models.IntegerField()
    acceleration = models.FloatField()
    weight = models.IntegerField()