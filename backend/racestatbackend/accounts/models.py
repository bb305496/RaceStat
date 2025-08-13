from django.db import models

# Create your models here.

class Account(models.Model):
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    created = models.DateTimeField(auto_now_add=True)
    password = models.CharField(max_length=128)



