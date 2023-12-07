# forms.py

from django import forms
from .models import Imagem, PostIt

class ImagemForm(forms.ModelForm):
    class Meta:
        model = Imagem
        fields = ['imagem']

class PostItForm(forms.ModelForm):
    class Meta:
        model = PostIt
        fields = ['dados_postits']