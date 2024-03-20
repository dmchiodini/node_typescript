import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    create({name, description}: ICreateCategoryDTO): void;
    list(): Category[] | null;
    findByName(name: string): Category | null | undefined;

}

export { ICategoriesRepository, ICreateCategoryDTO }