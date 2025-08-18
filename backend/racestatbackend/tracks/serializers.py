from rest_framework import serializers
from .models import Track

class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ['name', 'track_img', 'track_length', 'best_time', 'car', 'driver', 'date', 'country']

