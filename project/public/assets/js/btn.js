
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");
    const container = document.querySelector(".contact__container");

    const messageDiv = document.createElement("div");
    messageDiv.className = "success-message";
    messageDiv.style.color = "green";
    messageDiv.style.marginTop = "10px";
    messageDiv.style.display = "none"; 
    container.appendChild(messageDiv);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                messageDiv.textContent = "Message sent successfully!";
                messageDiv.style.display = "block"; 
                form.reset(); 
                setTimeout(() => {
                    messageDiv.style.display = "none"; 
                }, 3000);
            } else {
                messageDiv.textContent = "Error sending message.";
                messageDiv.style.display = "block";
            }
        }).catch(error => {
            messageDiv.textContent = "Something went wrong.";
            messageDiv.style.display = "block";
        });
    });

    
});
