#views da home 

from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login

# Create your views here.

def home_view(request):
    user_name = request.user.username if request.user.is_authenticated else None
    return render(request, 'home.html', {'user_name': user_name})

def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')  # Substitua 'home' pelo nome da sua página inicial
    else:
        form = UserCreationForm()

    return render(request, 'register.html', {'form': form})
   