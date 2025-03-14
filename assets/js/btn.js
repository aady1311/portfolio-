// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector(".contact__form");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevents the default form submission

//         // Sends the form data to Formspree
//         fetch(form.action, {
//             method: form.method,
//             body: new FormData(form),
           
//             headers: {
//                 'Accept': 'application/json'
              
//             }
            
//         });
//         form.reset();
//         console.log("thankYou");
//         // }).then(response => {
//         //     if (response.ok) {
//         //         alert("Message sent successfully!"); // Success message
//         //         form.reset(); // Clears the form
//         //     } else {
//         //         alert("Error sending message. Please try again.");
//         //     }
//         // }).catch(error => {
//         //     alert("Something went wrong. Please try again.");
//         // });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");
    const container = document.querySelector(".contact__container");

    const messageDiv = document.createElement("div");
    messageDiv.className = "success-message";
    messageDiv.style.color = "green";
    messageDiv.style.marginTop = "10px";
    messageDiv.style.display = "none"; // Hide initially
    container.appendChild(messageDiv);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission

        // Sends the form data to Formspree
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                messageDiv.textContent = "Message sent successfully!";
                messageDiv.style.display = "block"; // Show message
                form.reset(); // Clear form
                setTimeout(() => {
                    messageDiv.style.display = "none"; // Hide after 3 seconds
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
