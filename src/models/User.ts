import { promisePool } from "../DB";

interface Iuser {
    id?: number;
    name: string;
    email: string;
    senha: string;
}