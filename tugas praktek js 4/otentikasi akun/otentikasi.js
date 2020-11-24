var objPeople = [
	{ 
		username: "fathur",
		password: "fathur05"
	},
	{ 
		username: "abdullah",
		password: "abdullah05"
	},
	{ 
		username: "azzam",
		password: "azzam05"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			return
		}
	}
	console.log("incorrect username or password")
}
