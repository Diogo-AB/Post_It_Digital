# home/utils.py

from datetime import datetime, timedelta

def get_week_data(week_number):
    current_date = datetime.now().date() + timedelta(weeks=week_number)
    days_of_week = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
    date_values = [current_date + timedelta(days=i) for i in range(7)]

    week_data = {
        'days_of_week': days_of_week,
        'date_values': [day.strftime('%d/%m/%Y') for day in date_values],
        # Outros dados relevantes para a semana
    }

    return week_data

def get_next_week_data(week_number):
    next_week_data = get_week_data(week_number)

    return next_week_data
