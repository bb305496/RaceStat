from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import PriceList
from .serializers import PriceListSerializer

# Create your views here.

@api_view(['GET'])
def get_pricelist(request):
    pricelist = PriceList.objects.all()
    serializer = PriceListSerializer(pricelist, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_car(request):
    serializer = PriceListSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

