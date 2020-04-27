//Please do not read this

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

    let faecherText = "Systemtechnik, syt, Geographie und Politische Bildung, ggp, Naturwissenschaften, Chemie, nwc, "
    + "Informationstechnische Projekte, itp, deutsch, Medientechnik, Medt, Netzwerktechnik, nwt, Religion, "
    + "Römisch Katholisch, evangelisch, angewandte mathematik, mathematik, am, INSY, Informations Systeme, Englisch, "
    + "Business Englisch, Geographie, Geschichte, Medienpraxis, Bewegung und Sport, Turnen, Sorftwareentwicklung, SEW, "
    + "NWP, Physik";

    let politikerText = "Sebastian Kurz, Alexander Van der Bellen, Werner Kogler, HC Strache, Norbert Hofer, "
    + "Herbert Kickl, Heinz Fischer, Donald Trump, Barack Obama, Boris Johnson, Angela Merkel, Vladimir Putin";

    let disneyfilmeText = "Schneewittchen und die sieben Zwerge, Pinocchio, Dumbo, Bambi, Cinderella, Alice im Wunderland, "
    + "Peter Pan, Susi und Strolch, Dornröschen, 101 Dalmatiner, Das Dschungelbuch, Aristocats, Robin Hood, Winnie Puuh, "
    + "Arielle, Die Schöne und das Biest, Aladdin, Der König der Löwen, Der Glöckner von Notre Dame, Hercules, Mulan, "
    + "Tarzan, Frozen, Baymax";

    let ourClassText = "Meris Besic, Jonas Dorfinger, Felix Dumfarth, Quirin Ecker, Philipp Edlinger, Sarah Feichtinger, "
    + "Jakob Fitzinger, tobias höfler, Silvio kalinke, Florian Klausner, Simon Knogler, Rosalie Mandel, Adrian Moser, "
    + "Janina Novy, Jonas Oirer, Daniela Plöchl, Vanessa Primetzhofer, Jakob Ratzenböck, Sebastian Scholl, Lukas Startka, "
    + "Marah Steigersdorfer, Sandy Tang, Kelly Tran, Nina Weissengruber, Jonas Wiesinger";

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
    + "David Bowie, Elton John, Tina Turner, Guns n' Roses, Udo Jürgens";
    //endregion

    lehrer.addEventListener('click', () => {
        if(check(lehrerText) === -1) {
            value.push(lehrerText);
            writeValue();
            setColour(0);
        } else {
            remove(check(lehrerText));
            lehrer.style.backgroundColor = "#bdc3c7";
        }
    });

    faecher.addEventListener('click', () => {
        if(check(faecherText) === -1) {
            value.push(faecherText);
            writeValue();
            setColour(1);
        } else {
            remove(check(faecherText));
            faecher.style.backgroundColor = "#bdc3c7";
        }
    });

    politiker.addEventListener('click', () => {
        if(check(politikerText) === -1) {
            value.push(politikerText);
            writeValue();
            setColour(2);
        } else {
            remove(check(politikerText));
            politiker.style.backgroundColor = "#bdc3c7";
        }
    });

    disneyfilme.addEventListener('click', () => {
        if(check(disneyfilmeText) === -1) {
            value.push(disneyfilmeText);
            writeValue();
            setColour(3);
        } else {
            remove(check(disneyfilmeText));
            disneyfilme.style.backgroundColor = "#bdc3c7";
        }
    });

    ourClass.addEventListener('click', () => {
        if(check(ourClassText) === -1) {
            value.push(ourClassText);
            writeValue();
            setColour(4);
        } else {
            remove(check(ourClassText));
            ourClass.style.backgroundColor = "#bdc3c7";
        }
    });

    sex.addEventListener('click', () => {
        if(check(sexText) === -1) {
            value.push(sexText);
            writeValue();
            setColour(5);
        } else {
            remove(check(sexText));
            sex.style.backgroundColor = "#bdc3c7";
        }
    });

    potter.addEventListener('click', () => {
        if(check(potterText) === -1) {
            value.push(potterText);
            writeValue();
            setColour(6);
        } else {
            remove(check(potterText));
            potter.style.backgroundColor = "#bdc3c7";
        }
    });

    musiker.addEventListener('click', () => {
        if(check(musikerText) === -1) {
            value.push(musikerText);
            writeValue();
            setColour(7);
        } else {
            remove(check(musikerText));
            musiker.style.backgroundColor = "#bdc3c7";
        }
    });

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

        console.log(c + "   " + index)

        c[index].style.backgroundColor = colors[index];

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

        console.log(index + "   " + value.length);
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