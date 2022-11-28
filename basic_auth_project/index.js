// Requiring module
const express = require("express");
var path = require('path');

const app = express();

function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);

    //jeżeli w przesłanym requestcie nie znaleziono nagłówka 'authorization' zgłaszamy błąd autentykacji
	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

    // wyciągnięcie loginu i hasła z przesłanego nagłówka 'authorization'
	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

    /* sprawdzenie czy pole 'Username' nie jest puste i czy hasło zawiera przynajmniej 8 znaków
       zawężonych do małych i wielkich liter oraz liczb */
	if (user !== "" && pass.match(/^[A-Za-z0-9]{8,}$/)) {

		// If Authorized user
		next();
	} else {
        // w przypadku nieprawidłowego loginu i hasła zgłaszamy błąd autentykacji
		var err = new Error('You are not authenticated 11!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
// W przypadku poprawnej autentykacji wskazujemy folder 'public' jako miejsce startu aplikacji
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running");
});