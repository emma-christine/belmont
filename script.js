
function validateEmail() {
    console.log("lel");
    let email = document.getElementById("email").value;
    let resultSpot = document.getElementById("result");
    console.log(email);
    if (email == "") {
        resultSpot.innerHTML = "you have to enter an email";
        return false;
    }
    else {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.eva.pingutil.com/email?email=${email}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                let myResult = JSON.parse(result);
                console.log(myResult);
                console.log(myResult.status);
                if (myResult.status == "success") {
                    resultSpot.innerHTML = "valid email";
                }
                else {
                    resultSpot.innerHTML = "not a valid email";
                }
            })
            .catch(error => {
                console.log('error', error)
            });
    }
}