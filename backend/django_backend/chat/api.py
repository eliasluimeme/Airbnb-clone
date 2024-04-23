from django.http import JsonResponse

from rest_framework.decorators import api_view

from .models import Conversation
from .serializers import ConversationListSerializer, ConversationDetailSereializer

@api_view(['GET'])
def conversation_list(request):
    serializer = ConversationListSerializer(request.user.conversations, many=True)

    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def conversation_detail(request, pk):
    conversation = request.user.conversations.get(pk=pk)
    serializer = ConversationDetailSereializer(conversation, many=False)

    return JsonResponse({
        'conversation': serializer.data
    }, safe=False)