import 'reflect-metadata'
import express from 'express'
import createConnection from './database'
import { router } from './routes'

createConnection()

const app = express()

app.use(express.json()) //habilitar formato json
app.use(router)

export { app } //mudança para adaptar aos testes, para ele criar o app