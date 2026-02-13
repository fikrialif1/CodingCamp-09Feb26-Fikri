// WELCOME MESSAGE
window.onload = function () {
    welcomeMessage();
    showTime();
};

function welcomeMessage() {

    let name = prompt("Welcome to Tekno Mandiri! What is your name?");

    if (name == null || name.trim() === "") {
        name = "Guest";
    }
    document.getElementById("heroText")
    .innerText = `Hi ${name}, Selamat Datang`;

}

// TIME DISPLAY
function showTime() {

  setInterval(function () {

    const now = new Date();

    const timeString = now.toLocaleString();

    document.getElementById("currentTime")
      .innerText = timeString;

  }, 1000);

}

// FORM VALIDATION
function validateForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birth = document.getElementById("birthdate").value;
    const message = document.getElementById("message").value;

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        ).value;

    if (name === "" || birth === "" || message === "") {
        alert("All fields must be filled!");
        return false;
    }

    // Tampilkan ke kotak kanan
    document.getElementById("resultName").innerText = name;
    document.getElementById("resultEmail").innerText = email;
    document.getElementById("resultBirth").innerText = birth;
    document.getElementById("resultGender").innerText = gender;
    document.getElementById("resultMessage").innerText = message;

    // 🔥 TAMBAHAN 1 — Munculkan kotak kanan
    document.getElementById("resultBox").style.display = "block";

    // 🔥 TAMBAHAN 2 — Reset form
    document.querySelector("form").reset();

    return false; // prevent reload
}

