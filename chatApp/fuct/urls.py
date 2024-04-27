from django.urls import path
from . import views

urlpatterns = [
	path('add-user/', views.AddUser),
	path('errorPage/', views.Error)
]
