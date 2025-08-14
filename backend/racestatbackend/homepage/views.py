from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Homepage
from .serializers import HomeTextSerializer

# Create your views here.
@api_view(['GET'])
def get_title_and_content(request):
    title_and_content = Homepage.objects.all()
    serializer = HomeTextSerializer(title_and_content, many=True)
    return Response(serializer.data)

