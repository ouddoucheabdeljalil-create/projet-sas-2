const prompt = require('prompt-sync')();
const condidats = [
    {
        cin: "AB123456",
        nom: "daghor",
        prenom: "yassin",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: [
            "EL101",
            "EL102",
            "EL103",
            
        ]
    },

    {
        cin: "CD234567",
        nom: "Alaoui",
        prenom: "Yassine",
        partiPolitique: "Parti A",
        age: 35,
        electeurs: [
            "EL201",
            "EL202",
            "EL203",
            "EL204",
            "EL205",
            "EL206",
            "EL207"
        ]
    },

    {
        cin: "EF345678",
        nom: "Bennani",
        prenom: "Amine",
        partiPolitique: "Parti B",
        age: 45,
        electeurs: [
            "EL301",
            "EL302",
            "EL303",
            "EL304",
            "EL305"
        ]
    },

    {
        cin: "GH456789",
        nom: "El Idrissi",
        prenom: "Omar",
        partiPolitique: "Parti A",
        age: 38,
        electeurs: [
            "EL401",
            "EL402",
            "EL403",
            "EL404",
            "EL405",
            "EL406",
            "EL407",
            "EL408"
        ]}
    ]
    
    function Quitter(){
    console.log("\n 0. Quitter ");
    console.log(Number(prompt("entez le choix :")))
    }
    // function pour ajouter un nouveau candidat

function ajouterCandidat(){
    console.log("=== Ajouter un nouveau candidat ===")
         let a = prompt("entez votre CIN :");
      const candidat = {}
     let b = false ;
   for(let i = 0 ; i < condidats.length ; i++){
        if (a === condidats[i].cin){
            b = true ;
            break;
        }
    }
    if(b == true){
        console.log("Désolé, ce candidat existe déjà ");
    }
    else{
        candidat.cin = a,
        candidat.prenom = prompt("entez votre prenom :"),
        candidat.nom = prompt("entez votre nom :"),
        candidat.parti = prompt("entez votre parti politique :"),
        candidat.age = Number(prompt("entez votre age :")),
        candidat.electeurs = ["j111","y222"]; 
    }
        condidats.push(candidat)
    
    
}
    // function pour ajouter plusieurs candidats à la fois

function ajouterPluCandidats(){
    console.log("=== Ajouter plusieurs candidats à la fois ===\n")
    let number = Number(prompt("entez le nombre de candidats :"));
    for( let i =1 ; i <= number ; i++){
        console.log("-----------------------");
        console.log("entez les information de candidat ", i);
        ajouterCandidat();
    }
    Quitter();
}
    //function pour afficher la liste des candidats

function AfficherListCandidats(){
    console.log("=== Afficher la liste des candidats ===\n")

    for(let i = 0 ; i < condidats.length ; i++){
    for(let j = 0 ; j < condidats.length - i -1 ;j++){
    if (condidats[j].electeurs.length < condidats[j+1].electeurs.length ){
        let swap = condidats[j+1];
        condidats[j+1]= condidats[j];
        condidats[j] = swap
    }}}

    for (let i = 0; i < condidats.length;i++ ){
        for(const key in condidats[i]){
            console.log(`${key} : ${condidats[i][key]}`)
        }
        console.log("~~~~~~~~~~~~~~~~~~~~~~")
    }
    Quitter();
}
    //function pour voter pour un candidat 

function vote(){
    console.log("=== voter pour un candidat ===\n")
    let a = -1;
    let voterCin = prompt("saisissez votre CIN :");
    let candidatCin = prompt("saisissez le CIN du candidat : ");
    for(let i = 0 ; i < condidats.length ; i++){
        
        for( let j = 0 ;j < condidats[i].electeurs.length ; j++){
        if(voterCin === condidats[i].electeurs[j]){
           console.log("!! vous n'avez pas le droit de voter deux foix !!");
        }
        else{
             a = i ;
        }
        }}
    if(a !== -1){
       if(candidatCin === condidats[a].cin){
                console.log("le vote a été un succès");
                condidats[a].electeurs.push(voterCin);
            
            }
            else{
                console.log("Ce candidat n'existe pas !!");
            }
        }
        Quitter();
    }
        // function Modifier les informations d'un candidat

  
   function Modifier(){
        console.log("\n")
        console.log("=== Modifier les informations d'un candidat ===\n")
        let cin = prompt("saisissez le CIN du candidat ");
        let index = -1
        for (let i = 0 ; i < condidats.length ; i++){
            if (cin === condidats[i].cin){
               index = i
            }  
        }
        if ( index === -1){
            console.log("Ce candidat n'existe pas !!")
        }
        else{
            console.log("-----------------------");
            console.log("1. Ajouter ou modifier l'àge :\n2. Ajouter ou modifier le parti politique : ")
            console.log("-----------------------");
            let choix = parseInt(prompt("entez le choix :"));
            switch(choix){
                case 1:
                    condidats[index].age = parseInt(prompt("saisissez nouveau age de candidat :"))
                    break;
                case 2:
                    condidats[index].partiPolitique = prompt("saisissez nouveau parti politique de candidat : ")
                    break;
                default:
                    console.log("le numéro est incorrect !!");
        }
    }
    Quitter();
}
        // function Supprimer un candidat

    function Supprimer (){
         console.log("\n=== Supprimer un candidat  ===\n")
         let cin = prompt("saisissez le CIN du candidat ");
        let index = -1
        for (let i = 0 ; i < condidats.length ; i++){
            if (cin === condidats[i].cin){
               index = i
            }}  
        if (index === -1){
            console.log("Ce candidat n'existe pas !!")
        }
        else{
                condidats.splice(index);
        console.log("Supprimé avec succès")
       
    } 
    Quitter();
}
        //function Rechercher des candidats
function Rechercher(){
    console.log("\n=== Rechercher des candidats  ===\n")
    let nom = prompt("entez le nom de candidat : ");
    let index = -1 ;
    for(let i = 0; i < condidats.length ; i++){
        if (nom === condidats[i].nom){ 
           index = i}
            
    }
    if ( index === -1){
        console.log("Ce candidat n'existe pas !!");
    }
    else{
       for ( let key in condidats[index]){
        console.log(`${key} : ${condidats[index][key]}`)
       }
    }
    Quitter();
}
    // function calcul le nombre de candidat
function countCandidats(){
    let countCandidat = condidats.length;
    let x = console.log(`\nNomber de candidats : ${countCandidat}`);
    console.log("-----------------------");
    return x;
}
    //function calcul le nombre total des votes
function countNomberElecteur(){
    let countElecteur = 0;
    for(let i =0; i < condidats.length ; i++){
        countElecteur += condidats[i].electeurs.length;
    }
    let x = console.log(`Nombre total des votes : ${countElecteur}`);
    return x ;
}
let option =0 ;
do{
    console.log("-----------------------");
    console.log("        MENU")
    console.log("-----------------------");
    console.log(`1. Ajouter un nouveau candidat\n2. Ajouter plusieurs condidats à la fois\n3 .Afficher la liste des candidats`)
    console.log("4. Voter pour un candidat\n5. Modifier les informations d'un candidat\n6. Supprimer un candidat\n7. Rechercher des candidats\n8. Statistiques de l'élection")
     option = Number(prompt("entez le choix :"))
    switch(option){
        case 1: // Ajouter un nouveau candidat
            ajouterCandidat();
            break;
        case 2: //Ajouter plusieurs candidats à ma fois
            ajouterPluCandidats();
            break;
        case 3: //Afficher la liste des candidats
            AfficherListCandidats();
            break;
        case 4: //Voter pour un candidat
            vote();
            break;
        case 5:  //Modifier les informations d'un candidat 
            Modifier();
            break;
        case 6:  //Supprimer un candidat
            Supprimer();
            break;
        case 7: //Rechercher des candidats
            Rechercher();
            break;
        case 8 : //Statistiques de l'élection 
           countCandidats();
           countNomberElecteur();

    }
}while(option !== 0);
 