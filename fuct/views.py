from django.shortcuts import render

# Create your views here.
def renderWebPage(request):
	return render(request, 'index.html')

def login(request):
	return render(request, 'login.html')

def Error(request):
	return render(request, 'error.html')