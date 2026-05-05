// La estructura de los casos de uso siempre sera la misma, se debe crear una clase con el nombre del caso de uso, en este caso "diHolaMundo", y dentro de la clase se debe crear un metodo llamado "execute" que es el que se va a ejecutar cuando se llame al caso de uso, este metodo debe retornar el resultado del caso de uso, en este caso "Hola Mundo".

import Message from "../../domain/entities/Message";


// 1. La Clase 
class diHolaMundo {

    // 2. El Constructor
    constructor() {
    }

    //3. El Metodo Execute
    async execute({nombre}: {nombre: string}): Promise<Message> {
        const message = new Message(`Hola ${nombre}! Bienvenido a Clean Architecture!`);
        return message;
    }
}

// 4. Exportar la Clase
export default diHolaMundo;