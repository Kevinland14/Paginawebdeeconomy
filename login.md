<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
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
</body>
</html>
