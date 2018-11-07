# bjorn
Testing app

Pokazni rad sa Vue front i Node / MySQL back 

Napomene:
- mysql baza je u /database
- fajl app.js je front end a server.js back end
- Korišten Axios za requeste
- Treba instalirati sa npm node modules koji su u dependencies package.json
- Zbog brzine rađeno sa CDN dodavanjem Vue linka a ne sa webpackom
- Zbog toga nije Single Page Application pa Vue Single File Components ne rade, već se stranice šalju sa Node servera. Zbog toga je /detaljno .ejs template stranica a ne Vue jer treba istovremeno slati stranicu i odmah prikazati poslane JSON podatke

U Google Console javlja se warning: "Added non-passive event listener to a scroll-blocking 'touchstart' event"
To je bug u kombinaciji Vue/JQuery/Chrome vezan sa korištenjem smooth scrollanja, ne utiče na performanse
