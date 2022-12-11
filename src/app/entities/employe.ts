export class Employe {
    constructor(
        public id:number,
        public nom:string,
        public photo: string,
        public dateNaissance: Date,
        public adresse:{
            rue:string;
            ville: string,
            codePostal:number;
        },
        public diplomes:string[],
        public idDep:number,
        public poste: string
    ){
    }
}
