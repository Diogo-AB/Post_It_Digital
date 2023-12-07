#url da home

from django.urls import path
from .views import home_view
from django.contrib.auth.views import LogoutView

from .views import home_view, register_view

urlpatterns = [
    path('', home_view, name='home'),
    path('register/', register_view, name='register'),
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
    path('home/<int:week_number>/', home_view, name='home_week'),
 
]

    