from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
	re_path(r'chat-app/', consumers.ChatApp.as_asgi())
]