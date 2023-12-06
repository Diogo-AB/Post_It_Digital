from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .models import PostIt
from .serializers import PostItSerializer

class PostItListCreateView(generics.ListCreateAPIView):
    queryset = PostIt.objects.all()
    serializer_class = PostItSerializer
