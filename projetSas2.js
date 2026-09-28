const prompt = require('prompt-sync')();
const condidats = [
    {
        cin: "A1234",
        nom: "daghor",
        prenom: "ahmed",
        partiPolitique: "Independant",
        age: 28,
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
        partiPolitique: "Parti A",
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
        partiPolitique: "Parti C",
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
    Number(prompt("entez le choix : "))
    }
    // function pour ajouter un nouveau candidat

function ajouterCandidat(){
         let a = prompt("saisissez votre CIN : ");
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
        candidat.partiPolitique = prompt("entez votre parti politique :"),
        candidat.age = Number(prompt("entez votre age :")),
        candidat.electeurs = []; 
    }
        condidats.push(candidat)
    
    
}
    // function pour ajouter plusieurs candidats à la fois

function ajouterPluCandidats(){
    console.log("========== ajouter plusieurs candidats à la fois ============")
    let number = Number(prompt("entez le nombre de candidats :"));
    for( let i =1 ; i <= number ; i++){
        console.log("-----------------------");
        console.log(`entez les information de candidat ${i} :`);
        ajouterCandidat();
    }
    Quitter();
}
    // function afficher parti politique

function AfficherPartiPolitique(){
    const x = {}
    for (let i = 0 ; i < condidats.length ; i++){
        if(x[condidats[i].partiPolitique] === undefined){
            x[condidats[i].partiPolitique] = [condidats[i].nom]
        }
        else {
            x[condidats[i].partiPolitique].push(condidats[i].nom)
        }
    }
    console.log("\n========== les partis politiques et leurs candidat ==========")
    for(let key in x){
        console.log("_________________________");
        console.log(` ${key} :`);
        for(let i = 0 ; i < x[key].length ; i++){
            console.log(`- ${x[key][i]}`)
        }
    }
}

    //function pour afficher la liste des candidats

function AfficherListCandidats(){
   
    let option = 1;
    do{
         console.log("========== Afficher la liste des candidats ==========\n");
    console.log("1. Candidats par nombre de votes\n2. Les candidats d'un parti politique\n0. Quitter ")
        option = parseInt(prompt("entez le choix : "));
        console.log("\n")
        switch(option){
        case 1:
    for(let i = 0 ; i < condidats.length ; i++){
    for(let j = 0 ; j < condidats.length - i -1 ;j++){
    if (condidats[j].electeurs.length < condidats[j+1].electeurs.length ){
        let swap = condidats[j+1];
        condidats[j+1]= condidats[j];
        condidats[j] = swap
    }}}

    for (let i = 0; i < condidats.length;i++ ){
        for(let key in condidats[i]){
            console.log(`${key} : ${condidats[i][key]}`)
        }
        
        console.log("~~~~~~~~~~~~~~~~~~~~~~")
    }
    
    Quitter()
    break;
    case 2:
        AfficherPartiPolitique();
        Quitter()
    break;
    default:
        console.log("saisissez l'une des options !!\n")
}
    
}while(option !== 0)
}
    //function pour voter pour un candidat 

function vote(){
let x = false;
let voterCin = prompt("saisissez votre CIN :");
    
    for(let i = 0 ; i < condidats.length ; i++){
        
        for( let j = 0 ;j < condidats[i].electeurs.length ; j++){
        if(voterCin === condidats[i].electeurs[j]){
           x = true;
           break;
            
        }}}
        
        if (x === true){
                    console.log(" ---------------------------------------------------") 

            return console.log("| !! vous n'avez pas le droit de voter deux foix !! |\n ---------------------------------------------------");
        } 
        let candidatCin = prompt("saisissez le CIN du candidat : ");

        let y = -1 ;
    for(let i = 0 ; i < condidats.length ; i++){
        if (candidatCin === condidats[i].cin){
            y = i

        }
        
    }
    if(y === -1){
        console.log("------------------------------") 
        return console.log("| Ce candidat n'existe pas !! |\n------------------------------");
         
    }  
    else{
        console.log("--------------------------") 
        console.log("| le vote a été un succès |");
        console.log("--------------------------") 

            condidats[y].electeurs.push(voterCin)
            
    }
}
        // function Modifier les informations d'un candidat

  
   function Modifier(){
        console.log("\n")
        console.log("============ Modifier les informations d'un candidat ============\n")
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
                    condidats[index].partiPolitique = prompt("saisissez nouveau parti politique de candidat :")
                    break;
                default:
                    console.log("le numéro est incorrect !!");
            }
            
    }
    Quitter();
}
        // function comme splice

function likeSplice(arr , i){
    let arry = arr
    for(i; i < arry.length ; i++){
        arry[i] = arry[i+1]
    }
    arry.length -=1;
    return arry;
}
    // function Supprimer un candidat
    function Supprimer (){
         console.log("\n====================== Supprimer un candidat  =====================\n")
         let cin = prompt("saisissez le CIN du candidat ");
        let index = -1
        for (let i = 0 ; i < condidats.length ; i++){
            if (cin === condidats[i].cin){
               index = i
            }
        }  
        if (index === -1){
            console.log("Ce candidat n'existe pas !!")
        }
        else {
                
                likeSplice(condidats,index);
        console.log("Supprimé avec succès");
       
    } 
    Quitter();
}
        //function Rechercher des candidats
function Rechercher(){
    console.log("\n=================== Rechercher des candidats  ====================\n")
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
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    return x;
}
    //function calcul le nombre total des votes
function countNomberElecteur(){
    let countElecteur = 0;
    for(let i =0; i < condidats.length ; i++){
        countElecteur += condidats[i].electeurs.length;
    }
    let x = console.log(`Nombre total des votes : ${countElecteur}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    return x ;
}

function topCandidats(){
        for(let i = 0 ; i < condidats.length ; i++){
    for(let j = 0 ; j < condidats.length - i -1  ;j++){
    if (condidats[j].electeurs.length < condidats[j+1].electeurs.length ){
        let swap = condidats[j+1];
        condidats[j+1]= condidats[j];
        condidats[j] = swap
    }}}
    console.log("Les trios meilleurs candidats :\n")
    
        for(let i =0 ; i < 3 && i < condidats.length; i++){
            console.log(`CIN :${condidats[i].cin}\nnom : ${condidats[i].nom}\nprenom : ${condidats[i].prenom}\nparti Politique : ${condidats[i].partiPolitique}\nage : ${condidats[i].age}\nelecteurs : ${condidats[i].electeurs.length}`)
            console.log("--------------------------------------------------")
        }
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    }
 function countParti(){
       const partiPoli = {};
       for(let i = 0; i < condidats.length ;i++){
        if (partiPoli[condidats[i].partiPolitique] === undefined){
            partiPoli[condidats[i].partiPolitique] = 1;
        }
        else{
            partiPoli[condidats[i].partiPolitique] += 1
        }
       }
       for(let key in partiPoli){
        console.log(` ${key} : ${partiPoli[key]} candidat(s)`);
        console.log("--------------------------------------------------") 
       }}
let option =0 ;
do{
    console.log("=============================================================");
    console.log("                            MENU")
    console.log("=============================================================");
    console.log(`1. Ajouter un nouveau candidat\n2. Ajouter plusieurs condidats à la fois\n3 .Afficher la liste des candidats`)
    console.log("4. Voter pour un candidat\n5. Modifier les informations d'un candidat\n6. Supprimer un candidat\n7. Rechercher des candidats\n8. Statistiques de l'élection")
     option = Number(prompt("entez le choix :"))
    switch(option){
        case 1: // Ajouter un nouveau candidat
            console.log("================= Ajouter un nouveau candidat =================")
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
        console.log("\n=========== Statistiques de l'élection ===============")
           countCandidats();
           countNomberElecteur();
           topCandidats();
           countParti();
           Quitter();
           break;
        default : 
            console.log("\nsaisissez l'une des options !!")
    }
}while(option !== 0);
 