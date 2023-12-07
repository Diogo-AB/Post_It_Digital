# No arquivo api/urls.py

from django.urls import path
from .views import PostItListCreateView, WeekDataView

urlpatterns = [
    path('postits/', PostItListCreateView.as_view(), name='postit-list-create'),
    path('semanas/<int:week>/', WeekDataView.as_view(), name='week_data_api'),
    # Outras URLs da API...
]
