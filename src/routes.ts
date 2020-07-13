import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWord(resquest: Request, response: Response) {
    const user = createUser({
        name: 'RodrigoPD',
        email: 'ro@gmail.com',
        password: '123456',
        techs: [
            'React',
            'Node.js'
        ],
    })

    return response.json(user)
}