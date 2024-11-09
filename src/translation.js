import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ro: { 
    translation: {
      "ro": "EN",
      "bun venit": "Stai cu prietenii! Hotelul nostru ofera camere moderne la un pret accesibil. Stai la noi si bucura-te de o vizita frumoasa in Bucuresti!",
      "inceput": "INCEPUT",
      "locatie": "LOCATIE",
      "camere": "CAMERE",
      "contact": "CONTACT",
      "vorbim": "PUTEM VORBI",

      "bunvenit": "Bun venit - hotelul nostru ofera camere moderne in Bucuresti! De aici poti explora frumusetea orasului si simti ca acasa. Ai tot ce iti trebuie pentru o sedere placuta. Camere spatioase, mobilier modern, baie confortabila. Avem WiFi de mare viteza.",
      "convingete": "CONVINGE-TE SINGUR!",

      "camdubla": "CAMERA DUBLA",
      "dubladesc": "CAMERA PENTRU 2 PERSOANE, SPATIOASA, AMENAJATA MODERN CU BALCON",

      "deluxe": "CAMERA DUBLA",
      "room": "DELUXE",
      'deluxedesc': "CAMERA PENTRU 3 PERSOANE, SPATIOASA, AMENAJATA MODERN CU CANAPEA EXTENSIBILA SI TERASA. POTRIVITA PENTRU O FAMILIE CU 1 SAU 2 COPII",

      "apartament": "APARTAMENT",
      "apartamentdesc": "APARTAMENT PENTRU 4 PERSOANE CU UN ETAJ, LA PARTER ESTE O CANAPEA EXTENSIBILA IAR LA ETAJ UN PAT MATRIMONIAL SI BAIA.",

      "gaseste": "AI GASIT CEVA?",

      'locatie': "LOCATIE",
      "locatiedesc": "Hotelul nostru este in sectorul 3, in partea de vest a bucurestiului. Este o zona buna, se poate ajunge rapid oriunde si sunt 2 centre comerciale in zona.",

      "section7": `In apropiere sunt 2 centre comerciale si metroul la 5 minute distanta. 
      Poti ajunge rapid in orice parte a orasului.
      In apropiere este Parcul Titan si centrul comercial ParkLake.
      Hotelul nostru este alegerea ideala si daca veniti
      in cadrul unui eveniment.`,

      "section8": `La noi receptia este deschisa 24/7.
      Va fi mereu cineva sa va intampine si sa 
      va ajute cu indicatii.`,

      "interesat": "INTERESAT?",
      "rezerva": "REZERVA O CAMERA ACUM",

      "nume": "NUME",
      "subiect": "SUBIECT",
      "mesaj": "MESAJ",
      "trimite": "TRIMITE",

      "num": "Nume",
      "mail": "oaspete@mail.com",
      "sub": "Rezervare pentru 2 persoane...",
      "mes": "Buna ziua, as dori sa stiu daca aveti disponibilitate...",

      "strada": "STRADA POSTAVARUL NR 98A",
      "oras": "BUCURESTI, SECTOR 3",
      "conditii": "CONDITII",

      "sosire": "SOSIRE",
      "parcare": "PARCARE",
      "parcaredesc1": "GRATUIT, 5 LOCURI IN FATA HOTELULUI",
      "parcaredesc2": "IN APROPIERE, CU PLATA",
      "transport": "TRAMVAI, METROU 1 DECEMBRIE",

      "dormitor": "DORMITOR",
      "pat matrimonial": "PAT MATRIMONIAL",
      "birou": "BIROU",
      "terasa": "TERASA",
      "balcon": "BALCON",
      "canapea extensibila": "CANAPEA EXTENSIBILA",
      "baie": "BAIE",
      "dus": "DUS",
      "uscator": "USCATOR DE PAR",
      "internet": "INTERNET DE MARE VITEZA",
      "aer conditionat": "AER CONDITIONAT",
      "marime1": "2-3 PERSOANE DE LA 300 LEI",
      "marime2": "2 PERSOANE DE LA 270 LEI",
      "marime3": "4 PERSOANE DE LA 450 LEI",

      "metr": "METROU 1 DECEMBRIE 1918 - 700M",
      "park": "CENTRUL COMERCIAL PARK LAKE - 3000M",
      "titan": "PARCUL TITAN - 2000M",
    }
  },
  en: {
    translation: {
      "ro": "RO",
      "bun venit": "Stay with friends! Our hotel has modern rooms at an accesible price. Stay with us and explore Bucharest up close!",
      "inceput": "START",
      "locatie": "LOCATION",
      "camere": "ROOMS",
      "contact": "CONTACT",
      "vorbim": "WE CAN TALK",

      "bunvenit": `Welcome - our hotel offers modern rooms in Bucharest! 
      From here you can explore the beauty of the city and feel at home. 
      You have everything you need for a pleasant stay. Spacious rooms, modern furniture, comfortable bathroom. 
      We have high speed WiFi.`,
      "convingete": "CONVINCE YOURSELF!",

      "camdubla": "DOUBLE ROOM",
      "dubladesc": "TWO PERSON ROOM, SPACIOUS, MODERNLY FURNISHED WITH BALCONY",

      "deluxe": "DELUXE DOUBLE",
      "room": "ROOM",
      'deluxedesc': "TREE PERSON ROOM, SPACIOUS, MODERNLY FURNISHED WITH AN EXTENDABLE SOFA AND TERRACE. SUITABLE FOR A FAMILY WITH 1 OR 2 CHILDREN",

      "apartament": "APARTMENT",
      "apartamentdesc": "FOUR-PERSON APARTMENT WITH ONE FLOOR, A PULL-OUT SOFA ON THE GROUND FLOOR AND A DOUBLE BED AND BATHROOM ON THE UPPER FLOOR.",

      "gaseste": "FOUND SOMETHING?",

      "locatie": "LOCATION",
      "locatiedesc": `Our hotel is located in Sector 3, in the western part of Bucharest. It is a good area, with easy access to anywhere in the city and two shopping centers nearby.`,

      "section7": `There are two shopping centers nearby and the metro is 5 minutes away.
      You can quickly reach any part of the city.
      Titan Park and the ParkLake shopping center are nearby.
      Our hotel is the ideal choice even if you are coming for an event.`,

      "section8": `Our reception is open 24/7.
      There will always be someone to greet you and help you with directions.`,

      "interesat": "INTERESTED?",
      "rezerva": "BOOK A ROOM NOW",

      "nume": "NAME",
      "subiect": "SUBJECT",
      "mesaj": "MESSAGE",
      "trimite": "SEND",

      "num": "Name",
      "mail": "guest@mail.com",
      "sub": "2 person room...",
      "mes": "Hi, I would like to know if you have available rooms...",

      "strada": "POSTAVARUL STREET NR 98A",
      "oras": "BUCHAREST, SECTOR 3",
      "conditii": "CONDITIONS",

      "sosire": "ARRIVAL",
      "parcare": "PARKING",
      "parcaredesc1": "FREE, 5 SPOTS IN FRONT OF HOTEL",
      "parcaredesc2": "PAID, NEARBY",
      "transport": "TRAM, METRO 1 DECEMBRIE",

      "dormitor": "BEDROOM",
      "pat matrimonial": "KING SIZE BED",
      "birou": "DESK",
      "terasa": "TERRACE",
      "balcon": "BALCONY",
      "canapea extensibila": "SOFA",
      "baie": "BATHROOM",
      "dus": "SHOWER",
      "uscator": "HAIR DRYER",
      "internet": "FAST WIFI",
      "aer conditionat": "AIR CONDITIONING",
      "marime1": "2-3 PERSON FROM 300 LEI",
      "marime2": "2 PERSON FROM 270 LEI",
      "marime3": "4 PERSON FROM 450 LEI",

      "metr": "METRO 1 DECEMBRIE 1918 - 700M",
      "park": "PARK LAKE SHOPPING CENTRE - 3000M",
      "titan": "TITAN PARK - 2000M",
      
    }
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'ro', 
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
