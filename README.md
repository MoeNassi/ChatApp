In this project, I created an app that uses channels to expand django server to handle the websockets

-> Channels are built in a low level aspec called ASGI

-> Consumers are a simple abstraction allow you to create ASGI app to avoid complexity

-> using consumers u can create a structure code that helps you handle multiple events rather than creating a loop

-> by creating a room in consumer channel class its way easier to broadcast a message to all the sockets 

[packages]

  .django
  .channels
  .psycopg
  .psycopg-binary
