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
function validateForm(event) {

    // ❗ Cegah reload
    event.preventDefault();

    // Ambil data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birth = document.getElementById("birthdate").value;
    const message = document.getElementById("message").value;

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        ).value;

    // Validasi
    if (name === "" || email === "" || birth === "" || message === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    // Tampilkan hasil
    document.getElementById("resultName").innerText = name;
    document.getElementById("resultEmail").innerText = email;
    document.getElementById("resultBirth").innerText = birth;
    document.getElementById("resultGender").innerText = gender;
    document.getElementById("resultMessage").innerText = message;

    // Tampilkan data kanan
    document.getElementById("resultData").style.display = "block";

    // Reset input kiri
    document.getElementById("messageForm").reset();

    return false;
}


