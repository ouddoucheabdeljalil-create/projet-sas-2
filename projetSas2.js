const prompt = require('prompt-sync')();
const condidats = [ {
        cin: "j555",
        prenom: "dsgs",
        nom: "dfsdf",
        
        age: 55,
        electeurs: ["j123","f123"] 
    },
    {
        cin: "j154",
        prenom: "dsgdds",
        nom: "dfsdf",
        
        age: 55,
        electeurs: ["dsdf","f123","sfsd","sdgds"] 

    },
     {
        cin: "j555",
        prenom: "dsgs",
        nom: "dfsdf",
        
        age: 55,
        electeurs: ["f123"] 
    },
    {
        cin: "j14",
        prenom: "dsgdds",
        nom: "dfsdf",
        
        age: 55,
        electeurs: ["dsdf",,"sfsd","sdgds"] 

    }];
    // function pour ajouter un nouveau candidat

function ajouterCandidat(){
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
        
    condidats.push(candidat);
}
    // function pour ajouter plusieurs candidats à la fois

function ajouterPluCandidats(){
    let number = Number(prompt("entez le nombre de candidats :"));
    for( let i =1 ; i <= number ; i++){
        console.log("-----------------------");
        console.log("entez les information de candidat ", i);
        ajouterCandidat();
    }
   
}
    //function pour afficher la liste des candidats

function AfficherListCandidats(){

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
    
}
    //function pour voter pour un candidat 

function vote(){
    let a = false;
    let voterCin = prompt("saisissez votre CIN :");
    let candidatCin = prompt("saisissez le CIN du candidat : ");
    for(let i = 0 ; i < condidats.length ; i++){
        
        for( let j = 0 ;j < condidats[i].electeurs.length ; j++){
        if(voterCin === condidats[i].electeurs[j]){
           a = true ;  
        }
        }}
    
    for(let i = 0 ; i < condidats.length ; i++){
    if(a == true){
        console.log("!! vous n'avez pas le droit de voter deux foix !!");
        break;
        }
        else{
        
            if(candidatCin === condidats[i].cin){
                console.log("le vote a été un succès");
                condidats[i].electeurs.push(voterCin);
            
            }
            else{
                console.log("Ce candidat n'existe pas !!");
            
            }

   
        }
    }
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
            condidats[index].age = Number(prompt("saisissez nouveau age de candidat :"))
            condidats[index].parti = prompt("saisissez nouveau parti politique de candidat : ")
        }
         console.log("\n0. Quitter ");
         console.log(Number(prompt("entez le choix :")));
    }
let option ;
do{
    console.log("-----------------------");
    console.log("        MENU")
    console.log("-----------------------");
    console.log(`1. Ajouter un nouveau candidat\n2. Ajouter plusieurs condidats à la fois\n3 .Afficher la liste des candidats`)
    console.log("4. Voter pour un candidat\n5. Modifier les informations d'un candidat\n6. Supprimer un candidat\n7. Rechercher des candidats\n8. Statistiques de l'élection")
     option = Number(prompt("entez le choix :"))
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
            break;
        case 3: //Afficher la liste des candidats
            console.log("-----------------------");
            console.log("Afficher la liste des candidats")
            console.log("-----------------------");
            AfficherListCandidats();
            console.log("0. Quitter ");
            console.log(Number(prompt("entez le choix :")));
            break;
        case 4: //Voter pour un candidat
            console.log("-----------------------");
            console.log("Voter pour un candidat")
            console.log("-----------------------");
            vote();
            console.log("0. Quitter ");
            console.log(Number(prompt("entez le choix :")));
            break;
        case 5:
            Modifier();
            break;
        case 6:
            

    }
}while(option !== 0);
 