import { Request, Response } from "express";

export const paginaPrincipal = async(res: Response, req: Request) => {
    res.render('index')
}