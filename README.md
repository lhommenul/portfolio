# 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Projects 

### Project __karyo-admin-beta__
1. Stack : Vue 3 ( option api ) / Axios / Vuex / Primevue / Sass / Docker
2. Enjeux : Récupération des documents provenant ( génération ) des logiciels existants ( LeSage, Inpro, Aïda ) proposés par l'entreprise. Mise à disposition de ces documents.BtoB
Plateforme de partage de documents entre groupes d'utilisateurs. 
3. Features : 
  Gestion de droits d'utilisateurs ( création , modification etc ...)
  Création de groupes, utilisateurs
  Gestion des fichiers ( livraison, validation, refus etc ... )
  Création de templates de mail comme ( Mailchimp )
  Utilisateur multicomptes
  Assistance ( Inception )
4. Clients : Maisons d'édition ( Velvetica, 22D, Alterk... )

### Project __karyo-acteur-beta__
1. Stack : Vue 3 ( option api ) / Axios / Vuex / Primevue/ Sass/ Docker
2. Enjeux : Interface de récupération et de dépot de documents à destination des clients finaux. BtoC
Rendre les documents disponibles pour les clients finaux afin de les visualiser ou de les retourner à leurs gestionnaires ( validation / refus depuis l'interface web ). 
3. Features : 
  Télécharment, Supp
  Multicomptes
4. Clients : Clients des Maisons d'édition ( Velvetica, 22D, Alterk... )

### Project __karyo-api-beta__
1. Stack :  Node js / Fastify ( http frarmework ) / Swagger ( documentation api ) / Redis
2. Enjeux : Communication entre la base de données ( Karyo ) et/ou les bases de données des logiciels ( LeSage, Inpro ) et les applications front ( __karyo-acteur-beta__, __karyo-admin-beta__ ).
3. Features : 
Gestion des crons ( emails, statistiques )
Authentification basée sur les Bearer.
4. Clients : Utilisateurs du service Karyo.

### Project __karyo-db-beta__ ( WIP )
1. Stack : Postgresql 
2. Enjeux : Gerer les données concernant les applications ( __karyo-acteur-beta__, __karyo-admin-beta__ ).
3. Features : Gestion des des droits des utilisateurs / groupes de manière récursive.
4. Clients : API Karyo.

### Project __karyo-db-v1__ ( WIP )
1. Stack : Postgresql 
2. Enjeux :
3. Features :
4. Clients : 

### Project __karyo-api-v1__
1. Stack : Deno / Oak ( framework ) / Redis
2. Enjeux : Création d'une passerelle entre __karyo-api-beta__ et __karyo-api-v1__
3. Features : 
  Nouvelle communication entre les logciels et les logiciels web afin de recuperer les fiches acteurs ( coordonnéees pro et perso )
4. CLients : Utilisateurs du service Karyo.

### Project __karyo-acteur-v1__
1. Stack : Vue js / Axios / Vuex / Primevue
2. Enjeux : Appliquer la nouvelle direction artistique.
3. Features :
  Nouvelle interface graphique
  Nouvelle datatable ( implementation de la librairie Improvize )
  Interface profil utilisateur.

### Project __karyo-lib__
1. Stack : Vue js
2. Enjeux : Création des composants scalables à destination des logiciels web.
3. Features : 
  Support de grande quantitée de données 

### Project __showcase__
1. Stack : Nuxt 3 js / Strapi / i18n / Js Report / Pinia
2. Enjeux : Promotion des produits proposés par l'entreprise improvize, appliquer la nouvelle direction artitstique.
3. Features : Generation des devis ( Js Report )