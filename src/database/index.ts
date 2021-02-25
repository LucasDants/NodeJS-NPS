import {Connection, createConnection, getConnectionOptions} from 'typeorm'

//mudança para adaptar aos testes, para ele criar um banco de dados reserva para os testes
export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions()
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite" : defaultOptions.database 
        })
    )
}