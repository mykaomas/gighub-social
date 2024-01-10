function formLogin() {
    let emailelement = document.getElementById("emaillogin");
    let passwordelement = document.getElementById("passwordlogin");
    let valid = validateLogin(emailelement.value, passwordelement.value);
    if(valid){
        window.location = "/bands";
    }
   
}

 function validateLogin(email, password){
        let postdata = {
            email: email,
            password: password
        };
        let data = JSON.stringify(postdata);
        let url = "http://localhost:3001/api/users/login";

        console.log(data);
        const response =  fetch(url, {
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
            body: data, // body data type must match "Content-Type" header
          
        }).then((response) => {
            console.log(response.body);
            return true;
        }).then((res) => {
            if (res.status === 201) {
                console.log("Post successfully created!")
            }
        }).catch((error) => {
            console.log(error)
            return false;
        });
    };


