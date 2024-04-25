from django.http import JsonResponse

from rest_framework.decorators import api_view

from .models import Conversation, ConversationMessage
from .serializers import ConversationListSerializer, ConversationDetailSerializer, ConversationMessageSerializer

@api_view(['GET'])
def conversation_list(request):
    serializer = ConversationListSerializer(request.user.conversations, many=True)

    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def conversation_detail(request, pk):
    conversation = request.user.conversations.get(pk=pk)

    conversationSerializer = ConversationDetailSerializer(conversation, many=False)
    messagesSerializer = ConversationMessageSerializer(conversation.messages.all(), many=True)

    return JsonResponse({
        'conversation': conversationSerializer.data,
        'messages': messagesSerializer.data
    }, safe=False)