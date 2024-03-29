import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase){}

    handle(request: Request, response: Response): Response {
        const { file }= request;
        
        this.importCategoryUseCase.execute(file as Express.Multer.File);
        return response.send();
    }
}

export { ImportCategoryController }