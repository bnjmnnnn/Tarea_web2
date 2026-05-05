// Importamos tipos de Express para tipar correctamente req y res
import { Request, Response } from "express";

// Importamos el caso de uso desde la capa de aplicación
// En TypeScript usamos "import" en lugar de "require"
import DiHolaMundo from "../../../application/use-cases/holaMundo";

/*
  Controller encargado de manejar la petición HTTP para el saludo.

  Responsabilidades:
  - Recibir datos desde la request (req)
  - Llamar al caso de uso correspondiente
  - Retornar una respuesta HTTP

  No contiene lógica de negocio (eso está en application/domain)
*/
const holaMundoController = async (req: Request, res: Response): Promise<Response> => {
  try {
    // 1. Obtener datos desde la request
    // req.query puede traer distintos tipos, por eso hacemos casting a string
    const nombre = req.query.nombre as string;

    // 2. Crear instancia del caso de uso
    const diHolaMundo = new DiHolaMundo();

    // 3. Ejecutar el caso de uso
    const resultado = await diHolaMundo.execute({ nombre });

    // 4. Respuesta exitosa
    return res.status(200).json({
      success: true,
      data: resultado
    });

  } catch (error) {
    // 5. Manejo de errores
    console.error("Error en holaMundoController:", error);

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor"
    });
  }
};

// Exportamos el controller
export default holaMundoController;