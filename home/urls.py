#url da home

from django.urls import path
from .views import home_view, notas
from django.contrib.auth.views import LogoutView
from .views import register

from .views import home_view

urlpatterns = [
    path('', home_view, name='home'),
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
    path('home/<int:week_number>/', home_view, name='home_week'),
    path('notas/',notas, name='Notas'),
    path('register/', register, name='register'),
]

    