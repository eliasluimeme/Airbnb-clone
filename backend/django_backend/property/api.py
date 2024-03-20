from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .forms import PropertyForm
from .models import Property
from useraccount.models import User
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)
    
    return JsonResponse({
        'data': serializer.data
    })

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_detail(request, pk):
    try:
        property = Property.objects.get(pk=pk)
        serializer = PropertiesDetailSerializer(property, many=False)
        return JsonResponse(serializer.data)
    except Property.DoesNotExist:
        return JsonResponse({
            'errors': 'Property not found'
        }, status=404)
    
    serializer = PropertiesListSerializer(property)
    
    return JsonResponse({
        'data': serializer.data
    })

@api_view(['POST', 'FILES'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)

    if form.is_valid():
        property = form.save(commit=False)
        # property.landlord = request.user
        property.save()

        return JsonResponse({
            'success': True
        })
    else:
        return JsonResponse({
            'errors': form.errors.as_json()
        }, status=400)