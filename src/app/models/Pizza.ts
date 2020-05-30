export default class Pizza {
    id: number;
    photo: string;
    nom: string;
    ingredients: string[];
    prix: number;
    quantity: number;

    constructor(id: number, photo: string, nom: string, ingredients: string[], prix: number, quantity: number) {
        this.id = id;
        this.photo = photo;
        this.nom = nom;
        this.ingredients = ingredients;
        this.prix = prix;
        this.quantity = quantity;
    }
}
