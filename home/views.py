# No arquivo views.py

from datetime import datetime, timedelta
from django.shortcuts import render

from django.contrib.auth import login, logout


def home_view(request, week_number=None):
    # Obtém a data atual
    current_date = datetime.now().date()

    # Se week_number não for fornecido, assume a semana atual
    if week_number is None:
        week_number = 0

    # Calcula a data para cada dia da semana
    date_values = []
    days_of_week = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

    for i in range(7):
        day = current_date + timedelta(days=i) - timedelta(days=3)
        # Adiciona a data formatada à lista
        date_values.append(day.strftime('%d/%m/%Y'))

    # Cria uma lista de tuplas (dias da semana, datas) para usar no loop do template
    days_and_dates = zip(days_of_week, date_values)

    context = {'days_and_dates': days_and_dates, 'days_of_week': days_of_week}
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

