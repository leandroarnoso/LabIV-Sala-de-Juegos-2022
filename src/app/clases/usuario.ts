export class Usuario {
    
    // ATRIBUTOS
    nombreUsuario: string;
    email: string;
    sexo: string;

    // CONSTRUCTOR
    constructor(nombreUsuario: string, email: string, sexo: string) {
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.sexo = sexo;
    }
}
