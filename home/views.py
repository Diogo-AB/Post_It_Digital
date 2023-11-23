#views da home 

from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import CustomUserCreationForm
from django.contrib.auth import logout

# Create your views here.

def home_view(request):
    user_name = request.user.username if request.user.is_authenticated else None
    return render(request, 'home.html', {'user_name': user_name})


def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')
    else:
        form = CustomUserCreationForm()

    return render(request, 'register.html', {'form': form})
   
def Logout_View(request):
    logout(request)
    return redirect('/')