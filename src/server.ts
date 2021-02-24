import 'reflect-metadata'
import express, {Request, Response} from 'express'
import './database'
import { router } from './routes'

const app = express()
app.use(express.json()) //habilitar formato json
app.use(router)

app.listen(3333, () => console.log('erro'));

/**
 * criar migration npx typeorm migration:create -n CreateUsers
 * rodar a migration npm run typeorm migration:run
 * desfazer a migration npm run typeorm migration:revert
 */

/*
PATCH => alteração especifica
*/

