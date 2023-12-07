

# Create your models here.

from django.db import models

class PostIt(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()

    def __str__(self):
        return self.title
