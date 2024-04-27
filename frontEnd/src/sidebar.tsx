import './sidebar.css'

function sideBar() {
	return (
		<nav className="sidebar">
			<div>
				<img src="home.svg"></img>
				<h1>HOME</h1>
			</div>
			<div>
				<img src="chat.svg"></img>
				<h1>CHAT</h1>
			</div>
			<div>
				<img src="profile.svg"></img>
				<h1>PROFILE</h1>
			</div>
		</nav>
	)
}

export default sideBar