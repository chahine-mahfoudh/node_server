import express from 'express'; // Importer express
const app = express() ; // Créer l'instance de express à utiliser
const hostname = '127.0.0.1' ; // L ' @ du serveur
const port = process.env.PORT || 9090 ; // Le port du serveur


class Game{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

app.get('/game', (req, res) => {
    const game = new Game("dmc5", 2019);
  res.status(200).json({message : 'hello world!'}); // envoyer la réponse au requérant
} )

app.get('/game/:name', (req, res) => {
    res.status(200).json({ mesage : `the name of this game is ${req.params.name}`});
})
 

app.get("/secret", (req, res) =>{
    res.status(401).json({message : "unauthorized"});
})

/*app.listen(port, hostname, () => {
  console.log (`Server running at http://${hostname}:${port}/`);
})*/