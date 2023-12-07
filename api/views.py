# No arquivo api/views.py

from django.http import JsonResponse
from django.views import View
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from home.utils import get_week_data

class WeekDataView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request, week):
        week_data = get_week_data(week)
        return JsonResponse(week_data)

    def post(self, request, week):
        # L�gica para lidar com POST na API, se necess�rio
        return HttpResponse(status=200)  # Exemplo: sempre retorna um HTTP 200 OK para solicita��es POST

# Restante do c�digo...
from rest_framework import generics
from .models import PostIt
from .serializers import PostItSerializer

class PostItListCreateView(generics.ListCreateAPIView):
    queryset = PostIt.objects.all()
    serializer_class = PostItSerializer
