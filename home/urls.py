#url da home

from django.urls import path
from . import views
from .views import home_view


urlpatterns = [
    
    path('', home_view, name='home'),
    path('AcessarConta/', views.AcessarConta, name= 'Conta'),
    path('MinhasAnotacoes/', views.MinhasAnotacoes, name='Anotacoes'),
    
    ]
    

