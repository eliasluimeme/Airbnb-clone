from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from rest_framework import status

# Create your views here.

# class user(APIView):
#     model = User
#     def get(self, request):
#         users = User.objects.all()
#         return Response(users.values(), status=status.HTTP_200_OK)
    