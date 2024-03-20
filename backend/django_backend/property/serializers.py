from rest_framework import serializers

from .models import Property
from useraccount.serializers import userDetailSerializer

class PropertiesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['id', 'title', 'price_per_night', 'image_url']

class PropertiesDetailSerializer(serializers.ModelSerializer):
    landlord = userDetailSerializer(read_only=True, many=False)
    class Meta:
        model = Property
        fields = ['id', 'title', 'description', 'price_per_night', 'image_url', 'bedrooms', 'bathrooms', 'guests', 'landlord']