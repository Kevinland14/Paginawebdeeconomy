function registrar(event) {
  event.preventDefault();
  const usuario = document.getElementById('registroUsuario').value;
  const clave = document.getElementById('registroClave').value;
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('clave', clave);
  alert('¡Registrado correctamente!');
  window.location.href = 'index.html';
}

function login(event) {
  event.preventDefault();
  const usuario = document.getElementById('loginUsuario').value;
  const clave = document.getElementById('loginClave').value;
  const usuarioGuardado = localStorage.getItem('usuario');
  const claveGuardada = localStorage.getItem('clave');

  if (usuario === usuarioGuardado && clave === claveGuardada) {
    window.location.href = 'kevineco.html';
  } else {
    alert('Usuario o clave incorrectos');
  }
}
