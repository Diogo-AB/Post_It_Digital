#url da home

from django.urls import include, path
from . import views
from .views import home_view
from django.contrib.auth.views import LogoutView
from .views import register_view
from .views import SuaViewDRF


urlpatterns = [
    
    path('', home_view, name='home'),
    path('register/', register_view, name='register'),
    
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
    
     path('api/semanas/<int:week>/', SuaViewDRF.as_view(), name='semanas_api'),
]
    
    