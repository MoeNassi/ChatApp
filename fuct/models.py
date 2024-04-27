from django.db import models

class User(models.Model):
	name = models.CharField(max_length=255, unique=True)

# Create your models here.
class Message(models.Model):
	mine = models.CharField(max_length=255)
	others = models.CharField(max_length=255)