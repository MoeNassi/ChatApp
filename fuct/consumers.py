import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from django.shortcuts import render, redirect

class ChatApp(WebsocketConsumer):
	identify = 0
	connections = {}
	def connect(self):
		self.accept()

		# if len(ChatApp.connections) + 1 == 3:
		# 	self.send(json.dumps({
		# 		'type': 'redirect',
		# 		'redirect': 'http://e2r7p13:8000/errorPage/'}
		# 	))

		self.identify = len(ChatApp.connections) + 1
		ChatApp.connections[self] = self.identify

		self.room_group_name = 'bertouch'

		async_to_sync(self.channel_layer.group_add) (
			self.room_group_name,
			self.channel_name
		)

		self.send(text_data=json.dumps({
			'type': 'connection',
			'message': self.identify,
		}))

	def receive(self, text_data):
		data = json.loads(text_data)
		type = data.get('type')

		if type == 'message':
			message = {
				'type': 'message',
				'user': self.identify,
				'name': data.get('name'),
				'message': data['message']
			}
			async_to_sync(self.channel_layer.group_send) (
				self.room_group_name,
				{
					'type': 'message',
					'message': message
				}
			)

	def message(self, event):
		message = event['message']

		self.send(text_data=json.dumps({
			'type': 'message',
			'message': message
		}))

	# def disconnect(self):
	# 	pass