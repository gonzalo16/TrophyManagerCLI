export class Usuario{

    nombre: string;
    idUsuario:number;
    email:string;
    password:string;
    create_date:Date | null;
    

    constructor(){
        this.nombre='';
        this.idUsuario=0;
        this.email='';
        this.password='';
        this.create_date=null;

    }
}