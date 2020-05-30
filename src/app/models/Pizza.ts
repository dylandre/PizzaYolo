export default class Pizza {
    id: number;
    photo: string;
    nom: string;
    prix: number;

    constructor(id: number, photo: string, nom: string, prix: number) {
        this.id = id;
        this.photo = photo;
        this.nom = nom;
        this.prix = prix;
    }
}
