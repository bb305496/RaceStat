from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Track
from .serializers import TrackSerializer

# Create your views here.

@api_view(['GET'])
def get_tracks(request):
    tracks = Track.objects.all()
    serializer = TrackSerializer(tracks, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_track(request):
    serializer = TrackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
