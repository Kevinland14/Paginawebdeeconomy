<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Login Simple</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-box {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 300px;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      width: 100%;
      padding: 10px;
      background: #007bff;
      border: none;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="login-box">
    <h2>Iniciar Sesión</h2>
    <form onsubmit="return validarLogin(event)">
      <input type="text" id="usuario" placeholder="Usuario" required>
      <input type="password" id="contraseña" placeholder="Contraseña" required>
      <button type="submit">Ingresar</button>
    </form>
    <p id="mensaje" style="color: red;"></p>
  </div>

  <script>
    function validarLogin(event) {
      event.preventDefault(); // evita que se recargue la página
      const usuario = document.getElementById("usuario").value;
      const contraseña = document.getElementById("contraseña").value;

      if (usuario === "usuario_demo01" && contraseña === "Prueba123!") {
        document.getElementById("mensaje").style.color = "green";
        document.getElementById("mensaje").textContent = "¡Login exitoso!";
      } else {
        document.getElementById("mensaje").textContent = "Usuario o contraseña incorrectos.";
      }
    }
  </script>

</body>
</html>
