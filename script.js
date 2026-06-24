document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        e.preventDefault();
        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Enter a valid email address.");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});