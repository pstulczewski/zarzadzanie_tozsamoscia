// pobranie ze strony elementu formularza do logowania po wskazanym identyfikatorze
const loginForm = document.getElementById("login-form");
// pobranie ze strony przycisku do logowania po wskazanym identyfikatorze
const loginButton = document.getElementById("login-form-submit");
/* pobranie ze strony elementu, w którym umieścimy komunikat błędu w przypadku niepoprawnego loginu
   lub hasła po wskazanym identyfikatorze */
const loginErrorMsg = document.getElementById("login-error-msg");

// ustawienie akcji, która uruchomi się w przypadku naciśnięcie przycisku 'Login' przez użytkownika 
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    // pobranie wpisanego przez użytkownika loginu i hasła z formularza
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    /* sprawdzenie czy pole 'Username' nie jest puste i czy hasło zawiera przynajmniej 8 znaków
       zawężonych do małych i wielkich liter oraz liczb */
    if (username !== "" && password.match(/^[A-Za-z0-9]{8,}$/)) {
        // Wyświetlenie komunikatu o poprawnym zalogowaniu i przeładowanie strony
        alert("You have successfully logged in.");
        location.reload();
    } else {
        /* W przypadku nieprawidłowego loginu lub hasła ustawienie opacity elementu #login-error-msg na 1,
         w celu pokazania komunikatu o błędzie */
        loginErrorMsg.style.opacity = 1;
    }
})