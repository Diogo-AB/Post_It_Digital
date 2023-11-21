#views da home 

from django.shortcuts import render
from datetime import datetime
from django.http import HttpResponse

# Create your views here.

def home_view(request):
    # Configurando o local para português do Brasil
    
    data_atual = datetime.now().date() 
    return render(request, 'home.html', {'data_atual': data_atual})

def AcessarConta(request):
    return render(request, 'home.html')


def MinhasAnotacoes(request):
    return render(request, 'home.html')
   