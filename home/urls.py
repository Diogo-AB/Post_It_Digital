#url da home

from django.urls import path
from . import views


urlpatterns = [
    
    path('AcessarConta/', views.AcessarConta, name= 'Conta'),
    path('MinhasAnotacoes/', views.MinhasAnotacoes, name='Anotacoes'),
    
    ]
    

