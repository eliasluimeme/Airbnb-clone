from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .forms import PropertyForm
from .models import Property, Reservation
from useraccount.models import User
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer, ReservationListSerializer

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
def property_reservations(request, pk):
    properties = Property.objects.get(pk=pk)
    reservations = properties.reservations.all()

    serializer = ReservationListSerializer(reservations, many=True)

    return JsonResponse(serializer.data, safe=False)

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
        property.landlord = request.user
        property.save()

        return JsonResponse({
            'success': True
        })
    else:
        return JsonResponse({
            'errors': form.errors.as_json()
        }, status=400)
    
@api_view(['POST'])
def book_property(request, pk):
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guests = request.POST.get('guests', '')

        property = Property.objects.get(pk=pk)
        print('user: ', request.user)
        Reservation.objects.create(
            property = property,
            start_date = start_date,
            end_date = end_date,
            number_of_nights = number_of_nights,
            total_price = total_price,
            guests = guests,
            created_by = request.user
        )

        return JsonResponse({'success': True})
    except Exception as e:
        print("Error: ", e)

    return JsonResponse({'success': False})