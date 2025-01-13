// Variables para almacenar el estado de los botones seleccionados
let selectedButton = null;

// Agregar eventos de clic a los botones
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    // Cambiar el fondo de todos los botones a su estado original
    document.querySelectorAll('.btn').forEach(btn => btn.style.backgroundColor = '#4CAF50');
    
    // Marcar el botón seleccionado
    selectedButton = button.id;
    
    // Cambiar el color de fondo del botón seleccionado
    button.style.backgroundColor = '#45a049';
  });
});

// Función para manejar el evento de clic en el botón "Enviar"
document.getElementById('sendButton').addEventListener('click', () => {
  if (selectedButton) {
    alert(`Has seleccionado el ${selectedButton} y presionado Enviar.`);
  } else {
    alert('Gracias agradecemos que te hayas tomado el tiempo de dar una calificacion.');
  }
});
