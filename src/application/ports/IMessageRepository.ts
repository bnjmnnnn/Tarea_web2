// application/ports/IMessageRepository.ts

import Message from "../../domain/entities/Message";

interface IMessageRepository {
    save(message: Message): Promise<void>;
}

export default IMessageRepository;