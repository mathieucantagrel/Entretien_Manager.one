# Entretien Technique Mathieu CANTAGREL

## Installation

Pour installer le projet, vous devez dans un premier temps cloner le repository.
Puis une fois dans le projet effectuez la commande

```cmd
    npm install
```

Afin de faire fonctionner l'application, vous devez créer un ficher `.env`.
Ceci peut se faire soit à la main soit avec la commande

```cmd
    touch .env
```

Dans ce fichier vous devez ajouter la variable suivante : `VUE_APP_API_TOKEN`
Par la suite il vous suffit d'ajouter votre clef d'api openweathermap.org ou celle que je vous ai envoyé par email.
Un template du fichier .env est disponible via le fichier `env-template.txt`.

Pour lancer le projet pour pouvez exécuter la commande suivante :

```cmd
    npm run serve
```

## Utilisation

L'utilisation de cette application est relativement simple.
Lorsque vous arrivez dessus, la ville par défaut est Paris. Grace à la barre de recherche en haut vous pouvez rechercher n'importe quelle ville.
Pour ajouter aux favoris pous pouvez cliquer sur le coeur en haut a droite de l'écran. Lorsque celui-ci est rouge, la ville fait partie de vos favories.
Vous pouvez accéder a vos villes favorites via le burger menu en haut a gauche de votre écran.

Enfin, l'application vous donne la météo selon le dernier relevé effectué ainsi que celle pour les cinq prochain jours.
