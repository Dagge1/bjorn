// server side (port 3000), pokrenuti lokalno iz cli sa: node server
var express = require("express");
var app = express();
var ejs = require('ejs');
var mysql = require("mysql");
var bodyParser = require("body-parser"); // za unos iz forme bez Axios
var port = process.env.PORT || 3000; // lokalni port ili 3000

// 1) kreiraj konekciju sa MySQL.. vidi da li je MySQL port na kompu 3307
var db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'abcmkt',
    port: '3307'
});

app.use(bodyParser.json()); // support za json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // parser za POST poslane podatke

// lokacija static fajlova (css itd)
app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs'); // samo za stranu /detaljno

// konekcija na bazu
db.connect(function(err) {
    if (err) {
        console.error('Error prilikom konekcije na bazu: ' + err);
        return;
    }
    console.log('Spojen sa id ' + db.threadId);
});

// 2) Html stranice se šalju sa servera (nije SPA i nije renderiranje)
app.get('/', (req, res) => {  
    res.sendFile(__dirname + '/index.html'); 
});

app.get('/unos', (req, res) => {  
    res.sendFile(__dirname + '/unos.html'); 
});

// 3) slanje podataka na front end nakon što se učita Vue
app.get('/data', (req, res) => {
    db.query("SELECT * FROM companies ORDER BY naziv", (error, results) => {
    if (error) throw error;
    res.json(results);
    });
});

// slanje podataka na front-end, ova strana mora sa render engineom jer nije SPA
// pa ne može slati istovremeno html i JSON data
app.get('/detaljno/:id', function(req, res) { 
    db.query("SELECT * FROM companies WHERE id = ?", [req.params.id], (error, results) => {
    if (error) throw error;
        // console.log(results[0].naziv);
        res.render('detaljno', { title: results[0] }); // renderiraj stranu i šalji JSON
    });
});


// prihvat POST podataka i slanje u MySQL bazu.. RESTful API endpoint /nova 
// Raw data, nije vršena provjera tipa podataka, da li je polje prazno itd
app.post('/nova', (req, res) => {
    var podaci = {
        drzava: req.body.f_drzava,
        naziv: req.body.f_company,
        adresa: req.body.f_address,
        grad: req.body.f_city,
        posta: req.body.f_pobox,
        vrijednost: req.body.f_valuation,
        email: req.body.f_email,
        telefon: req.body.f_phone,
        opis: ''
    }
    db.query("INSERT INTO companies SET ?", podaci, (error, results) => {
        if (error) throw error;
        res.send(); // poželjna je povratna info Axios-u, inače može stati nakon nekolicine unosa
    });
    // console.log(req.body);
});

// server uključen na local env port ili 3000
app.listen(port, function() {
    console.log('Listening on the port ' + port);
});
