document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("inputBox");
    const message = document.getElementById("message");

    inputBox.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const value = inputBox.value.toLowerCase();
            if (value === "projektový den") {
                message.classList.remove("hidden");
                inputBox.disabled = true;
                const container = document.querySelector(".container");
                container.classList.add("shake-container"); 
            } else {
                inputBox.value = "";
            }
        }
    });
});