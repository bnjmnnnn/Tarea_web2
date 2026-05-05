// Importamos el caso de uso desde la capa de aplicación
// El controller no debe tener lógica de negocio, solo delega
const DiHolaMundo = require("../../../application/use-cases/holaMundo");

/*
  Controller encargado de manejar la petición HTTP para el saludo.
  
  Responsabilidades:
  - Recibir datos desde la request (req)
  - Llamar al caso de uso correspondiente
  - Retornar una respuesta HTTP
  
   
 */
async function holaMundoController(req, res) {
  try {
    // 1. Obtener datos desde la request
    // En este caso usamos query params para obtener el nombre
    const { nombre } = req.query;

    // 2. Crear instancia del caso de uso
    // Esto permite separar la lógica de negocio del controller
    const diHolaMundo = new DiHolaMundo();

    // 3. Ejecutar el caso de uso
    // Se envía un objeto para mantener consistencia y escalabilidad
    const resultado = await diHolaMundo.execute({ nombre });

    // 4. Respuesta exitosa (HTTP 200)
    // Se sigue una estructura estándar de respuesta JSON
    return res.status(200).json({
      success: true,
      data: resultado
    });

  } catch (error) {
    // 5. Manejo de errores
    // Se captura cualquier error para evitar que el servidor se caiga

    console.error("Error en holaMundoController:", error);

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor"
      // No se expone error detallado en producción 
    });
  }
}

// Exportamos la función para usarla en las rutas (infraestructura)
module.exports = holaMundoController;