// application/ports/IMessageRepository.js

import Message from "../../domain/entities/message";

interface IMessageRepository {
    save(message: Message): Promise<void>;
}

export default IMessageRepository;