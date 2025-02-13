import { Request, Response } from "express";

export const paginaFormulario = (req: Request, res: Response) => {
    console.log("Rota /formulario acessada!");
    res.render('formulario'); 
};
