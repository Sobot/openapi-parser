import adminApi from './api-docs-admin-api.json'
import {Spec} from "swagger-schema-official";
interface IParserInput {
    swaggerDoc: any,
    rootPath?: string,

}

const parse = (input:IParserInput) => {
    const {swaggerDoc, rootPath} = input;
    const paths = rootPath ? Object.keys(swaggerDoc.paths)
                    .filter(key=>key.indexOf(rootPath)==0)
                    .map(key=>{return {[key]:swaggerDoc.paths[key]}}) :
        swaggerDoc.paths;
    console.log(paths);

}

export const run = () => {
    const input:IParserInput = { swaggerDoc:adminApi, rootPath:"/admin"};
    parse(input);
}

run();
