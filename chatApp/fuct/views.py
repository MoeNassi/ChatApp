from django.shortcuts import render, redirect
from .models import User
from django.http import JsonResponse

# Create your views here.
def AddUser(request):
	name = request.GET.get('name')
	exist = User.objects.get(name__iexact=name)
	if exist:
		return JsonResponse({
			'type': 'error',
			'status_code': '301',
		}, status=301)
	else:
		try:
			User(name=name)
			return JsonResponse({
				'type': 'success',
				'status_code': '200',
			}, status=200)
		except ...:
			return JsonResponse({
				'type': 'error',
				'status_code': '301',
			}, status=301)


def Error(request):
	return render(request, 'error.html')