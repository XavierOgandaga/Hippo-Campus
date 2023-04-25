//import {hippoList} from './data.js'


// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
const hippoList = [{
    "nom": "HIPPOCAMPUS HYSTRIX",
    "description": "Il vit dans des eaux peu profondes, de 5 à 20 mètres de profondeur. Sa taille peut atteindre entre 15 et 17 centimètres. Ses épines sont pointues avec des extrémités sombres. Ses couleurs sont variables et dépendent de son environnement. Il peut être gris, crème, jaune vif, vert, brun ou encore rouge.",
    "prix": 99.9,
    "img": "https://dailygeekshow.com/wp-content/uploads/2016/04/HIPPOCAMPE-kuda.jpg",
    "Localisation": ["bassin Indo-Pacifique","Lambaréné"]
    },
    {
    "nom": "HIPPOCAMPUS INGENS",
    "description": " Il peut vivre de 2 à 30 mètres de profondeur. Sa couleur peut aller du rouge orangé au marron, parfois avec du jaune ou du noir, et marbré de petits traits et de petits points blancs. Ses yeux sont entourés de traits blancs.",
    "prix": 66.6,
    "img": "https://dailygeekshow.com/wp-content/uploads/2016/04/hippocampus-reidi.jpg",
    "Localisation": ["Colombie","costa Rica","Mexique","Panama"]
    },
    
    {
    "nom": "HIPPOCAMPUS HIPPOCAMPUS",
    "description": " Il vit souvent à environ 10 mètres de profondeur, jusqu'à 30 mètres maximum. C'est un hippocampe qui atteint une taille d’environ 10 cm. Sa couleur peut aller du brun au marron.",
    "prix": 555.45,
    "img": "https://dailygeekshow.com/wp-content/uploads/2016/04/hippocampe-hitrixe.jpg",
    "Localisation": ["France","Méditérranée","Atlantique"]
    },

    {
        "nom": "HIPPOCAMPUS ERECTUS",
        "description": "Il peut vivre à une profondeur pouvant aller jusqu'à 73 mètres. Il peut atteindre une longueur de 17 centimètres, et sa couleur est très variable. Elle peut aller du noir/gris au brun, rouge, orange ou jaune, et est souvent orné d’un motif à lignes ou à points, avec des taches plus ou moins claires.",
        "prix": 1399.88,
        "img": "https://dailygeekshow.com/wp-content/uploads/2016/04/hippocampe-pacifique.jpg",
        "Localisation": [" côtes canadiennes", "caribéennes"]
   }
]
//console.log('hippoList', hippoList)


// Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML


// Etape 1
// Pour chacun des burgers affiche le nom dans la console
//console.log(hippoList.nom)
const container = document.querySelector('#hippo-container')
// Etape 2
// Dans #burger-container afficher le nom des burgers

// Etape 3 
// Ajouter la description et le prix 

// Etape 4 
// Afficher l'image du burger

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js

// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients
hippoList.forEach(hippoList=> {container.innerHTML +=

    `<div class="flex flex-col items-center">
    <div class=" max-w-md m-24">
        <div class="h-full border-2 border-gray-200  rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${hippoList.img}" alt="blog"></img>
          <div class="p-6 ">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${hippoList.nom}</h1>
            <p class="leading-relaxed mb-3"><strong>Descriptions</strong> : ${hippoList.description}</p>
            <div class="flex items-center flex-wrap">
              <div class="mb-3 text-blue-900 font-semibold inline-flex items-center md:mb-2 lg:mb-0"><strong>Localisation</strong>: ${hippoList.Localisation}</div>
              <div class="mb-3 text-blue-900 font-semibold inline-flex items-center md:mb-2 lg:mb-0"><strong>prix</strong>: ${hippoList.prix}£</div>
            </div>
          </div>
        </div>
      </div>
      </div> `
    });

