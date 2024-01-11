function formLogin() {
    let emailelement = document.getElementById("emaillogin");
    let passwordelement = document.getElementById("passwordlogin");
   validateLogin(emailelement.value, passwordelement.value);
    

}

function band(){
  window.location = "/bands";
}
function fan(){
  window.location ="/bandsearch";
}

 function validateLogin(email, password){
        let postdata = {
            email: email,
            password: password
        };
        let data = JSON.stringify(postdata);
        let url = "http://localhost:3001/api/users/login";


                fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: data, // body data type must match "Content-Type" header, find data in body.
          
        })    .then(response => response.json())
        .then(responseData => {
          const loginResponse = responseData;
          if (loginResponse.isLoggedIn){
            window.location = "/bandaccount"; // changed from bands to bandaccount!
          }
        })
        .catch(error => console.error(error));
    };


