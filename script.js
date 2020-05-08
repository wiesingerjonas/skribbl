window.addEventListener('load', () => {

    let value = [];

    let lehrer = document.getElementById("lehrer");
    let faecher = document.getElementById("faecher");
    let politiker = document.getElementById("politiker");
    let disneyfilme = document.getElementById("disneyfilme");
    let ourClass = document.getElementById("3AHITM");
    let sex = document.getElementById("SEX");
    let potter = document.getElementById("potter");
    let musiker = document.getElementById("musiker");
    let filme = document.getElementById("filme");
    let ohCancer = document.getElementById("ohCancer");
    let games = document.getElementById("games");
    let heros = document.getElementById("heros");
    let animals = document.getElementById("animals");
    let brands = document.getElementById("brands");
    let food = document.getElementById("food");
    let countries = document.getElementById("countries");
    let cities = document.getElementById("cities");
    let alk = document.getElementById("alk");
    let hardware = document.getElementById("hardware");
    let plants = document.getElementById("plants");
    let religion = document.getElementById("religion");
    let austria = document.getElementById("austria");
    let instrumente = document.getElementById("instrumente");
    let youtuber = document.getElementById("youtuber");

    let colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c", "#16a085", "#27ae60",
        "#2980b9", "#8e44ad", "#f39c12", "#d35400", "#c0392b"];

    let output = document.getElementById("output");
    
    let copy = document.getElementById("copy");
    let info = document.getElementById('info');

    //region text
    let lehrerText = "Erich Baar, Peter Bauer, Rosemarie Brenn, Rainer Denkmair, Patricia Engleitner, Rudolf Giritzhofer, "
    + "Markus Haslinger, Gerhard Höfer, Wolfgang Holzer, Michael Holzmann, Martin Huemer, Christian Jäger, Franz Jakob, "
    + "Franz Rager, Robert Reder, Riccarda Reiter, Birgit Schröder, Barbara Schwaiger, Dietmar Steiner, Martin Sternath, "
    + "Thomas Stütz, Günter Traunmüller, Gert Urschitz, Renate Willmann, Edwin Wingert";

    let faecherText = "Systemtechnik, SYT, Geographie und Politische Bildung, ggp, Naturwissenschaften, Chemie, nwc, "
    + "Informationstechnische Projekte, itp, deutsch, Medientechnik, Medt, Netzwerktechnik, NWT, Religion, "
    + "Römisch Katholisch, Evangelisch, Angewandte Mathematik, Mathematik, am, INSY, Informationssysteme, Englisch, "
    + "Business English, Geographie, Geschichte, Medienpraxis, Bewegung und Sport, Turnen, Softwareentwicklung, SEW, "
    + "NWP, Physik, Informatik, Medizintechnik, Elektronik";

    let politikerText = "Sebastian Kurz, Alexander Van der Bellen, Werner Kogler, HC Strache, Norbert Hofer, "
    + "Herbert Kickl, Heinz Fischer, Donald Trump, Barack Obama, Boris Johnson, Angela Merkel, Vladimir Putin";

    let disneyfilmeText = "Schneewittchen, Pinocchio, Dumbo, Bambi, Cinderella, Alice im Wunderland, "
    + "Peter Pan, Susi und Strolch, Dornröschen, 101 Dalmatiner, Das Dschungelbuch, Aristocats, Robin Hood, Winnie Puuh, "
    + "Arielle, Die Schöne und das Biest, Aladdin, Der König der Löwen, Der Glöckner von Notre Dame, Hercules, Mulan, "
    + "Tarzan, Frozen, Baymax";

    let ourClassText = "Meris Besic, Jonas Dorfinger, Felix Dumfarth, Quirin Ecker, Philipp Edlinger, Sarah Feichtinger, "
    + "Jakob Fitzinger, tobias höfler, Silvio kalinke, Florian Klausner, Simon Knogler, Rosalie Mandel, Adrian Moser, "
    + "Janina Novy, Jonas Oirer, Daniela Plöchl, Vanessa Primetzhofer, Jakob Ratzenböck, Sebastian Scholl, Lukas Starka, "
    + "Marah Steigersdorfer, Sandy Tang, Kelly Tran, Nina Weissengruber, Jonas Wiesinger, Maximilian Fuchs";

    let sexText = "Sex, Geschlechtsverkehr, Anal, Oral, schwul, lesbisch, Blowjob, gangbang, Kekswichsen, orgasmus, "
    + "gruppensex, adamsapfel, affäre, aids, after, anus, titten, brüste, bh, bordell, bumsen, busen, Coitus interruptus, "
    + "Coming-Out, dick, dildo, Dirty talk, dreier, eichel, erektion, erotik, ficken, Fotze, fisting, gay, geil, "
    + "HIV-positiv, Hoden, Hodensack, inzest, jungfrau, Koitus, kondom, kuss, Menstruation, Möse, Muschi, nutte, "
    +"onanieren, wichsen, penis, vagina, pimmel, porno, scheide, sexy, sperma";

    let potterText = "Harry Potter, Hermine Granger, Ron Weasley, Severus Snape, Lord Voldemort, Albus Dumbledore, "
    + "Draco Malfoy, Rubeus Hagrid, Neville Longbottom, Dobby, Minerva Mconagall, Bellatrix Lestrange, Dolores Umbridge, "
    + "Ginny Weasley, Der sprechende Hut, Hedwig, Sirius Black, Muggel, Peitschende Weide, Heiligtümer des Todes, "
    + "Karte des Rumtreibers, Stein der Weisen, Zauberstab, Besen, Fahrender Ritter, Hogwarts-Express, Quidditch, "
    + "Trimagisches Turnier, Vielsaft-Trank, Avada Kedavra";

    let musikerText = "The Beatles, AC/DC, The Rolling Stones, ABBA, Queen, Bon Jovi, Led Zeppelin, Pink Floyd, Nirvana, "
    + "Green Day, Bob Dylan, Elvis Presley, Bob Marley, Stevie Wonder, Prince, Michael Jackson, Madonna, John Lennon, "
    + "David Bowie, Elton John, Tina Turner, Guns n' Roses, Udo Jürgens, Andreas Gabalier";

    let filmeText = "Avatar, Herr der Ringe, James Bond, Pulp Fiction, Shrek, Titanic, Der weiße Hai, Nachts im Museum, "
    + "Star Wars, Findet Nemo, Kevin allein zuhaus, Die unendliche geschichte, "
    + "Fifty Shades of Gray, Terminator, The Fast and the Furious, the LEGO Movie, La La Land, Fluch der Karibik, Star Trek, "
    + "E.T. , Jurassic Park, Indiana Jones, Back to the Future, Toy Story, The Greatest Showman, Mary Poppins, Rango";

    let ohCancerText = "Alkoholiker, Corona, Kärntner, Penis, Phallus, Schwanz, Cock, Hure, Jungs, Blowjob, BBC, Quarantäne, "
    + "Youporn, Gay, Cum, Masturbieren, Absturz, Pornhub Premium, Ficken, Laura Wiesinger, Paul Zwitter, Alois Petutschnig, "
    + "Simon Edl, Lukas Edl, Nikolas Zwitter, Trichter, Sebastian Kurz, Hentai, Analsex, Thorsten Jarz, Jonas Wiesinger, "
    + "Autoscooter, Möpse, Hurensohn, Gänzer, Selbstbefriedigung, Albert Petutschnig, Verena Wiesinger, Mietzi, Kernöl, "
    + "Graz, Steinfeld, Wels, Peggau, Smite, Mutzikatzi, Zielpunktfrau, Brüste, Eichelkäse, Gurke, Cassy, Matapiro, "
    + "JungUndGeil, PaulPenisBig, simonpenis";

    let gamesText = "Tetris, World of Warcraft, WoW, Grand Theft Auto, GTA, Minecraft, Die Sims, Mario, Pokemon Go, "
    + "Wii Sports, Portal, Fortnite, Pong, Pac-Man, Goat Simulator, Luigi, Bowser, Prinzessin Peach, Yoshi, Snake, "
    + "Subway Surfers, Call of Duty, PUBG, FIFA, Rocket League, Candy Crush, Fruit Ninja, Solitaire, Angry Birds, Smite, "
    + "Animal Crossing";

    let herosText = "Superman, Batman, Spiderman, Ironman, Wolverine, Captain Marvel, Deadpool, Aquaman, Wonder Woman, "
    + "Thor, Flash, Shazam, Ant-Man, Batgirl, Captain America, Joker, Robin, X-Men, Hulk, Marvel, DC";

    let animalsText = "Ameise, Axolotl, Alpaka, Ameisenbär, Aal, Adler, Affe, Bär, Blutegel, Biene, Biber, Boa, "
    + "Clownfisch, Chamäleon, Dachs, Delfin, Ente, Elch, Eidechse, Eule, Erdmännchen, Eichhörnchen, Esel, Elefant, Frosch, "
    + "Fliege, Flughund, Frettchen, Falke, Flamingo, Fuchs, Fledermaus, Flusspferd, Faultier, Gans, Goldfisch, Giraffe, "
    + "Gürteltier, Gazelle, Gottesanbeterin, Gorilla, Gepard, Hai, Huhn, Haubentaucher, Hund, Hamster, Hase, Hirsch, Husk, "
    + "Hyäne, Igel, Krebs, Käfer, Kakadu, Koala, Kamel, Katze, Känguru, Kaninchen, Krähe, Katta, Krokodil, Leguan, Laus, "
    + "Lemming, Lama, Luchs, Löwe, Maus, Meerschweinchen, Nasenbär, Nashorn, Otter, Orang-Utan, Papagei, Paranha, Pelikam"
    + "Pfau, Pferd, Pinguin, Panda, Qualle, Rochen, Ratte, Regenwurm, Rentier, Kuh, Robbe, Schlange, Schildkröte, Specht, "
    + "Schabe, Spinne, Stinktier, Steinbock, Schwein, Schaf, Schwan, Seepferdchen, Schimpanse, Feuersalamander, "
    + "Seehund, Strauß, Stachelschwein, Tausenfüßer, Taube, Tiger, Uhu, Wal, Ziege, Zebra";

    let brandsText = "Apple, Google, Amazon, Microsoft, Coca-Cola, Samsung, Toyota, Mercedes, McDonald's, Disney, BMW, "
    + "IBM, intel, Facebook, Nike, Louis Vuitton, Oracle, Honda, Chanel, Pepsi, IKEA, UPS, Zara, H&M, Gucci, "
    + "Pampers, Ford, Hyundai, Gilette, Nescafe, Adobe, Volkswagen, VW, Audi, Allianz, Ebay, Adidas, Starbucks, Porsche, "
    + "Nissan, HP, Sony, Kellogg's, Siemens, YouTube, Red Bull, Rolex, Netflix, LG, KFC, Subway, Shell, Haribp, Nintendo, "
    + "Lego, Nivea, Nikon, Canon, Schwarzkopf, Fanta, Sprite, Pringels, Milka, Tesla";

    let foodText = "Suppe, Gemüse, Obst, Früchte, Apfel, Banane, Gurke, Orange, Trauben, Birne, Erdbeere, Melone, "
    + "Pfirsich, Mango, Aubergine, , Karotte, Gurke, Salat, Tomate, Kartoffel, Brokoli, Spargel, Paprika, Lasagne, "
    + "Gulasch, Pizza, Schnitzel, Nudeln, Kaiserschmarren, Kebap, Hamburger, Cheeseburger, Sandwich, Brot, Zuckerl, "
    + "Kuchen, Torte, Cupcake, Muffin, Cookies, Schokolade, Joghurt, Ei, Omlet, Palatschinken, Germknödel, Pasta, Wrap";

    let countriesText = "Österreich, Deutschland, Schweiz, China, USA, Frankreich, Italien, Kanada, Australien, Indien, " +
        "Mexiko, England, Vereinigtes Königreich, Niederlande, Holland, Griechenland, Polen, Norwegen, Kroatien, Irland, " +
        "Spanien, Japan, Bosnien";

    let citiesText = "Wels, Linz, Graz, Wien, Salzburg, Klagenfurt, Innsbruck, Berlin, Rom, Paris, London, Barcelona, " +
        "Amsterdam, Hamburg, München, Madrid, Prag, Budapest, Venedig, Mailand, Stockholm, Istanbul, Sankt Petersburg, " +
        "New York, New York City, Los Angeles, Chicago, San Francisco, Washington, Las Vegas, Moskau, Rio de Genaro, " +
        "Honkong, Peking, Tokyo, Sydney";

    let alkText = "Bier, Wein, Gin, Rum, Tequila, Vodka, Likör, Whiskey, Cocktail, Sex on the Beach, Jägermeister, Klopfer, " +
        "Bacardi, B52, Shot, Stamperl, Weißbier";

    let hardwareText = "Mainboard, Prozessor, RAM, Arbeitsspeicher, Grafikkarte, Monitor, Festplatte, CD, CD-ROM, " +
        "Kartenleser, Drucker, Laptop, Computer, Lautsprecher, Spannungswandler, Speicherlkarte, USB, USB-Stick, Touchpad, " +
        "Kopfhörer, Akku, Batterie, Maus, Tastatur, Bluetooth Maus, Leertaste, Enter, Shift, Tastenkombination, Windows, " +
        "Linux, Mac, Software, Piezo Summer, HDMI, HDMI-Kabel, Klinkenstecker, Touchscreen, Fingerprintsensor, Mikrofon";

    let plantsText = "Ahorn, Birke, Buchs, Efeu, Apfelbaum, Fichte, Haselnussbaum, Palme, Tanne, Petersilie, Schnittlauch, " +
        "Kresse, Basilikum, Oragen, Rose, Mohn, Gänseblümchen, Wurzel, Baumkrone, Baumstamm, Stamm";

    let religionText = "Atheismus, Ethik, Gott, Religion, Glaube, Engel, Auferstehung, Beichte, Fluch, Gebet, Glaube, Kreuz, " +
        "Seele, Wunder, Zehn Gebote, Altes Testament, Abendmahl, Apostel, Bibel, Chor, Evangelist, Fegefeuer, Geburt, Herr, " +
        "Hölle, Israel, Jesus, Joseph, Kreuzigung, Krippe, Liebe, Ostern, Pfarrer, Priester, Synagoge, Weihwasser, Judentum, " +
        "Christentum, Islam, Hinduismus, Buddhismus, Islam, Kirche";

    let austriaText = "Sachertorte, Mannerwaffeln, Mozartkugel, Debrezina, Kaisersemmel, Wiener Schnitzel, Falco, Mozart, " +
        "Skifahren, Lederhose, Volksmusik, Schönbrunn, Prater, Stephansdom, Sissi, Krampus, Perchten, FKK, Würstelstand, " +
        "Kaffehaus, Nikotin, Bier, Hochdeutsch";

    let instrumenteText = "Akkordeon, Balalaika, Bass-Gitarre, Blockflöte, Bongos, Bratsche, Cello, E-Bass, E-Gitarre, " +
        "Fagott, Geige, Gitarre, Gong, Harfe, Horn, Keyboard, Klavier, Kontrabass, Mund-harmonika, Oboe, Orgel, Panflöte, " +
        "Pauke, Piccoloflöte, Posaune, Querflöte, Regenmacher, Saxophon, Synthesizer, Tamburin, Triangel, Trompete, Tuba, " +
        "Vibraphon, Xylophon";

    let youtuberText = "BibisBeautyPalace, Julien Bam, Gronkh, Simon Desue, ConCrafter, Julienco, Dagi Bee, ApeCrime, " +
        "Paluten, GermanLetsPlay, Freshtorge, Felix von der Laden, Dner, Rewinside, LeFloid, Die Lochis, PewDiePie, " +
        "Dude Perfect, MrBeast";
    //endregion

    let buttons = [lehrer, faecher, politiker, disneyfilme, ourClass, sex, potter, musiker, filme, ohCancer, games,
        heros, animals, brands, food, countries, cities, alk, hardware, plants, religion, austria, instrumente, youtuber];

    let text = [lehrerText, faecherText, politikerText, disneyfilmeText, ourClassText, sexText, potterText, musikerText,
        filmeText, ohCancerText, gamesText, herosText, animalsText, brandsText, foodText, countriesText, citiesText,
        alkText, hardwareText, plantsText, religionText, austriaText, instrumenteText, youtuberText];

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if(check(text[i]) === -1) {
                value.push(text[i]);
                writeValue();
                setColour(i);
            } else {
                remove(check(text[i]));
                buttons[i].style.backgroundColor = "#bdc3c7";
            }
        });
    }

    function writeValue() {

        let string = "";

        for (let i = 0; i < value.length; i++) {
            string = string + value[i] + ", "
        }

        output.value = string;

        output.style.height = output.scrollHeight+'px';

        info.innerHTML = string.split(',').length - 1 + " words";
    }

    function setColour(index) {
        let container = document.getElementById("container");

        let c = container.children;

        let colourIndex;
        if (index >= colors.length) {
            colourIndex = index%colors.length;
        } else {
            colourIndex = index
        }
        c[index].style.backgroundColor = colors[colourIndex];

    }

    function check(text) {
        for (let i = 0; i < value.length; i++) {
            if(value[i] === text) {
                return i;
            }
        }
        return -1;
    }

    function remove(index) {

        for (let i = index; i < value.length; i++) {
            if (i === value.length-1) {
                value.pop();
            } else {
                value[i] = value[i+1]
            }
        }
        writeValue();
    }

    copy.addEventListener('click', () => {
        let copyText = output
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    });
});