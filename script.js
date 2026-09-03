const formulario = document.getElementById('loginForm');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    // Capturar valores de los campos del formulario 
    const nombre = document.getElementById('user').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-psw').value;
    const maximoDigitosTelefono = 10;

    // Guarda errores que se encuentren
    let msjError = [];

    if (nombre === '') {
        msjError.push('ERROR: el nombre es obligatorio');
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        msjError.push('ERROR: el nombre solo debe contener letras y espacios');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msjError.push('ERROR: escribe un correo válido, por ejemplo usuario@gmail.com');
    }

    if (telefono === '') {
        msjError.push('ERROR: el teléfono es obligatorio');
    } else if (!/^\d+$/.test(telefono)) {
        msjError.push('ERROR: el teléfono solo debe contener números');
    } else if (telefono.length > maximoDigitosTelefono) {
        msjError.push(`ERROR: el teléfono no puede tener más de ${maximoDigitosTelefono} dígitos`);
    }

    if (password !== confirmPassword) {
        msjError.push('ERROR: las contraseñas no coinciden');
    }

    if (password.length < 6) {
        msjError.push('ERROR: la contraseña debe tener al menos 6 caracteres');
    }

    if (msjError.length > 0) {
        alert(msjError.join('\n'));
    } else {
        alert ('Registro exitoso, Bienvenido a Veterinaria San Marcos');
    }
});