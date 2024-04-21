from django.urls import path
from . import views

urlpatterns = [
	path('chat/', views.renderWebPage),
	path('login/', views.login),
	path('errorPage/', views.Error)
]
