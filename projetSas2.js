const prompt = require('prompt-sync')();
const condidats = [];

let option = 10;
do{
    console.log("-----------------------");
    console.log("        MENU")
    console.log("-----------------------");
    console.log(`1. Ajouter un nouveau candidat\n2. Ajouter plusieurs condidats à la fois\n3 .Afficher la liste des candidats`)
    console.log("4. Voter pour un candidat\n5. Modifier les informations d'un candidat\n6. Supprimer un candidat\n7. Rechercher des candidats\n8. Statistiques de l'élection")
    let option = Number(prompt("entez le choix :"))
    switch(option){
        case 1: // Ajouter un nouveau candidat
            console.log("-----------------------");
            console.log("Ajouter un nouveau candidat")
            console.log("-----------------------");
            ajouterCandidat();
            console.log("0. Quitter ");
            console.log(Number(prompt("entez le choix :")))
            break;
        case 2: //Ajouter plusieurs candidats à ma fois
            console.log("-----------------------");
            console.log("Ajouter plusieurs candidats à ma fois")
            console.log("-----------------------");
            ajouterPluCandidats();
            console.log("0. Quitter ");
            console.log(Number(prompt("entez le choix :")));
        case 3: //Afficher la liste des candidats
            console.log("-----------------------");
            console.log("Afficher la liste des candidats")
            console.log("-----------------------");
            AfficherListCandidats();
            console.log("0. Quitter ");
            console.log(Number(prompt("entez le choix :")));
            break;
        case 4:


    }
}while(option !==0);

    // function pour ajouter un nouveau candidat

function ajouterCandidat(){
    const candidat = {
        cin: prompt("entez votre CIN :"),
        prenom: prompt("entez votre prenom :"),
        nom: prompt("entez votre nom :"),
        parti: prompt("entez votre parti politique :"),
        age: prompt("entez votre age :"),
        electeurs: [] 
    }
    condidats.push(candidat);
   
}
    // function pour ajouter plusieurs candidats à la fois

function ajouterPluCandidats(){
    let number = Number(prompt("entez le nombre de candidats :"));
    for( let i =1 ; i <= number ; i++){
        console.log("entez les information de candidat ", i);
        ajouterCandidat();
    }
   
}
    //function pour afficher la liste des candidats

function AfficherListCandidats(){
    for (let i = 0; i < condidats.length;i++ ){
        for(const key in condidats[i]){
            console.log(`${key} : ${condidats[i][key]}`)
        }
        console.log("~~~~~~~~~~~~~~~~~~~~~~")
    }
    
}
    //function pour voter pour un candidat 
    
function voter(){
    let cin = prompt("saisissez votre CIN :");
    for(let i = 0 ; i < condidats.length ; i++){
        if(cin == condidats[i].)
    }
}
 