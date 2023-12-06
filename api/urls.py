from django.urls import path
from .views import PostItListCreateView

urlpatterns = [
    path('postits/', PostItListCreateView.as_view(), name='postit-list-create'),
]
