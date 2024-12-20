# angular-spring-example-crud

## Structure du dossier

``` bash
angular-spring-example-crud/
    |
    |-angular-crud/    <- ce dossion est le code angular 
    |-article-api/     <- ce dossion est le code spring-boot

```

## Clone Project

```bash
git clone https://github.com/soo-essoklina-ulrich/angular-spring-example-crud.git
cd angular-spring-example-crud
```


## Étapes pour lancer un projet Angular

1. **Installer Node.js et npm**: Assurez-vous que Node.js et npm sont installés sur votre machine. Vous pouvez les télécharger depuis [nodejs.org](https://nodejs.org/).

2. **Installer Angular CLI**: Ouvrez votre terminal et exécutez la commande suivante pour installer Angular CLI globalement:
    ```bash
    npm install -g @angular/cli
    ```

3. **Naviguer dans le répertoire du projet**: Accédez au répertoire du projet Angular:
    ```bash
    cd angular-crud
    ```

4. **Installer les dépendances**: Installez les dépendances du projet en exécutant la commande suivante:
    ```bash
    npm install
    ```

5. **Lancer le serveur de développement**: Démarrez le serveur de développement Angular avec la commande:
    ```bash
    ng serve
    ```

6. **Accéder à l'application**: Ouvrez votre navigateur et accédez à `http://localhost:4200` pour voir votre application Angular en action.




## Étapes pour lancer un projet Spring Boot

1. **Installer Java**: Assurez-vous que Java Development Kit (JDK) est installé sur votre machine. Vous pouvez le télécharger depuis [oracle.com](https://www.oracle.com/java/technologies/javase-downloads.html).

2. **Installer Maven**: Installez Apache Maven, qui est l'outil de gestion de projet utilisé par Spring Boot. Vous pouvez le télécharger depuis [maven.apache.org](https://maven.apache.org/download.cgi).


3. **Naviguer dans le répertoire du projet**: Accédez au répertoire du projet Spring Boot:
    ```bash
    cd article-api
    ```

4. **Construire le projet**: Utilisez Maven pour construire le projet en exécutant la commande suivante:
    ```bash
    mvn clean install
    ```

5. **Lancer l'application**: Démarrez l'application Spring Boot avec la commande:
    ```bash
    mvn spring-boot:run
    ```

6. **Accéder à l'API**: Ouvrez votre navigateur et accédez à `http://localhost:8080/api` pour interagir avec votre API Spring Boot.




## Comment Utilise le fichier .jar

1. **Naviguer dans le répertoire du projet**: Accédez au répertoire du projet Spring Boot:
    ```bash
    java -jar article-api-0.0.1-SNAPSHOT.jar
    ```