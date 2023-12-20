// auth.js

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.className = 'bi bi-eye-slash';
    } else {
        passwordInput.type = 'password';
        eyeIcon.className = 'bi bi-eye';
    }
}

function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perbaikan: Gunakan string untuk membandingkan dengan nilai username dan password
    if (username === 'zizidika541' && password === 'student-nf23') {
        alert('Login berhasil');
        window.location.href = 'success.html';
    } else {
        alert('Login gagal. Silakan periksa kredensial Anda.');
    }
}
