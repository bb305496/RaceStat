from rest_framework import serializers
from .models import Homepage

class HomeTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homepage
        fields = ['title', 'content', 'date']