import { useEffect, useState } from 'react'
import './chat.css'
import axios from 'axios'

function Chat() {
	const [Name, SetName] = useState<string>('')

	useEffect(()=> {
		const message = document.querySelector('.content')
		const input = document.getElementById('inp')
		const btn = document.querySelector('.btn-r')
		const btn_name = document.getElementById('btn-name')
		const inpName = document.getElementById('name')
		var TheName:string = ''
		let index = 0
		
		const obj = new WebSocket('ws://e3r10p8:8000/chat-app/')

		btn_name?.addEventListener('click', ()=> {
			SetName((inpName as HTMLInputElement)!.value)
			console.log(Name)
			if (Name !== '') {
				(inpName as HTMLInputElement)!.value = ''
				axios.get('http://e3r10p8:8000/add-user/')
				.then(response => {
					console.log(response.data)
				})
				.catch(error => {
					console.log(error)
				})
			}
		})

		function TheFunction() {
			var value = (input as HTMLInputElement)!.value;
			if (value === "") {
				input?.classList.add('red')
				setTimeout(()=> input?.classList.remove('red'), 400)
				return
			}
			(input as HTMLInputElement)!.value = ''
			obj.send(JSON.stringify({
				'type': 'message',
				'name': TheName,
				'message': value
			}))
		}

		btn?.addEventListener('click', TheFunction)
		window.addEventListener('keyup', function(e) {
			if (e.key === "Enter")
				TheFunction()
		})

		obj.onmessage = function(e) {
			const data = JSON.parse(e.data)
			const type = data.type

			const date = new Date();
			if (type === 'connection')
				index = data.message
			if (type === 'message') {
				const element = document.createElement('div')
				message?.appendChild(element)
				element.innerHTML = data.message.message
				console.log(index, ' ',data.message.user)
				// message.scrollTop = message?.scrollHeight;
				if (index === data.message.user) {
					element.classList.add('rmessage')
					const sta = document.createElement('div')
					element.appendChild(sta)
					sta.innerHTML = data.message.name + ' ' + date.getHours().toString() + ':'
					sta.innerHTML += date.getMinutes().toString()
					sta.classList.add('rmessage_')
				}
				else {
					element.classList.add('lmessage')
					const sta = document.createElement('div')
					element.appendChild(sta)
					sta.innerHTML = data.message.name + ' ' + date.getHours().toString() + ':'
					sta.innerHTML += date.getMinutes().toString()
					sta.classList.add('lmessage_')
				}
			}
			if (type === 'redirect') {
				window.location.href = data.redirect;
			}
		}
	})
	return (
		<div className="container">
			<img id='logo' src='logo.svg'></img>
			<div id="blur">
				<input id='name' name='name' placeholder='Your Name'></input>
				<button id='btn-name'>submit</button>
			</div>
			<div className="content">
				<input className="inp" id='inp' placeholder="message"></input>
				<button className="btn-r">send</button>
			</div>
		</div>
	)
}

export default Chat