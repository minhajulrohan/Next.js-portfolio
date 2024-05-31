const myHeaders = new Headers();
myHeaders.append("Authorization", "App 8bc6db351a4c91e32d90ebb668f2a598-21dd9e48-38a8-444e-8e1c-3e32fb7573d9");
myHeaders.append("Content-Type", "multipart/form-data");
myHeaders.append("Accept", "application/json");

const formdata = new FormData();
formdata.append("from", "minhajulislamrohan1@gmail.com");
formdata.append("subject", "Free trial");
formdata.append("to", "{\"to\":\"minhajulislamrohan1@gmail.com\",\"placeholders\":{\"firstName\":\"Minhajul Islam\"}}");
formdata.append("text", "Hi {{firstName}}, this is a test message from Infobip. Have a nice day!");

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow"
};

fetch("https://8gep2r.api.infobip.com/email/3/send", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));