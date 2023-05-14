export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    edad : number;
    img: string;


    constructor (nombre:string, apellido:string,descripcion: string, edad:number, img: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.descripcion=descripcion;
        this.edad=edad;
        this.img=img;
    }
}