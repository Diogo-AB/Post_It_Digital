
# -*- coding: utf-8 -*-

from datetime import datetime, timedelta
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout

from rest_framework.views import APIView
from rest_framework.response import Response

def home_view(request):
    # Obtém a data atual
    current_date = datetime.now().date()

    # Calcula a data para cada dia da semana
    date_values = []
    days_of_week = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

    for i in range(7):
        day = current_date + timedelta(days=i)
        # Adiciona a data formatada à lista
        date_values.append(day.strftime('%d/%m/%Y'))

    # Cria uma lista de tuplas (dias da semana, datas) para usar no loop do template
    days_and_dates = zip(days_of_week, date_values)

    context = {'days_and_dates': days_and_dates}
    return render(request, 'home.html', context)



def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')
    else:
        form = UserCreationForm()

    return render(request, 'register.html', {'form': form})

def Logout_View(request):
    logout(request)
    return redirect('/')


class SuaViewDRF(APIView):
    def get(self, request, week, *args, **kwargs):
        # Lógica para obter dados relacionados à semana específica (use o parâmetro 'week')
        data = {"semana": f"Semana {week}"}
        return Response(data)