


export const doulaImages = {
  1: {
    mobile: '/optimized-images/Annika.webp', // HERE IT WORKS WITH any image
    alt: 'Annika Lindberg',
  },

  2: {
    mobile: '/optimized-images/Karin.webp', // not working
    alt : 'Karin Dernulf',
  },
  3: {
    mobile: '/optimized-images/Dunja.webp', //not working 
    alt: 'Dunja Grisell',
    },
  
  4: {
    mobile: '/optimized-images/Jenny.webp', 
    alt: 'Jenny',
    },
  };


export const doulorArray = [
    {
      id: 1,
        name: 'Annika Lindberg',
        bor: 'Skogås, Stockholm',
        erbjuder: ['Baspaket', 'Postpartum', 'AkutDoula', 'AnnikasProfilsida'],
    description: ' Jag har en bakgrund inom elitidrott och coach inom en fullkontaktsport, vilket gett mig effektiva verktyg och metoder att förbereda kroppen och det mentala inför krävande utmaningar. Här är mental förberedelse en lika självklar del som den fysiska vilket jag tagit med mig in i mitt Doulaskap och i hur jag coachar den födande inför och under födseln. Jag har genom åren samlat på mig en mängd effektiva metoder för att hitta de nycklar som fungerar, och jag brinner för att ständigt hitta de nya sätt som passar för varje individ. Som person är jag är intuitiv och inkännande, och jobbar mycket med att stärka den födande och coacha på ett lyhört sätt. Finns det en partner och/eller stödperson, så jobbar jag med att stärka er som ett team.',
    rubrik2: 'Queermedevetet doulaskap',
    stycke2: 'Förutom doula (och fd idrottare) är jag även genusvetare och jag har jobbat med utbildning och inkludering samt normkritik i över 20 års tid, vilket har gett mig en djup inblick hur normer och förväntningar påverkar kroppar på olika sätt i olika sammanhang.',
    stycke3: 'Graviditet och födande kan innebära att du/ni som HBTQI+ möter dessa sammanhang utifrån en minoritetsstress som är svår att sätta sig in i utan att själv ha egen levd erfarenhet. Jag har erfarenhet att bära och föda barn utanför heternormen, samt genomgå ivf-behandling som lesbiskt par. Jag har även arbetat med HBTQI+ frågor i olika sammanhang under många år. Jag har en stor förståelse för de utmaningar som kan uppstå i mötet med vården och kan erbjuda stöd utifrån ett HBTQI+ medvetet perspektiv.', 
    pris: 'Gå till Annikas profilsida för prisuppgifter',
    hasOwnProfile: true,
    image: doulaImages[1],  
    kontakt: 'annika.edit.lindberg@gmail.com',
    showFormButton: true, // Only for the specific doula card

    },
    {
      id: 2,
      name: 'Karin Dernulf',
        bor: 'Södermalm, Stockholm',
     erbjuder: ['Baspaket', 'AkutDoula'],
      description: 'Vid en förlossning kan man behöva hjälp att lita på sin kropp & att den klarar den fysiska prestationen. Kroppen har oanade krafter och förmågor och det ska vi ta tillvara på. Jag hjälper dig att ha tillit till din kropp och att lyssna på den under förlossningen.Till vardags jobbar jag som leg. kiropraktor och har en god förmåga att vara lyhörd för vad varje person behöver för att känna sig trygg. Att nu få doula födande är ett stort förtroende och jag ser fram emot att få vägleda fler i detta magiska ögonblick i livet.',
         hasOwnProfile: false,
      pris: 'Kontakta Karin för prisuppgifter',
      image: doulaImages[2], // Link the images directly 
      kontakt: 'karin.dernulf@gmail.com',
                showFormButton: false, // Only for the specific doula card


    },
    {
      id: 3,
      name: 'Dunja Grisell',
        bor: 'Tyresö, Stockholm',
        erbjuder: ['Baspaket'],
      description: 'Jag har egen erfarenhet av att föda på sjukhus, på sjukhus med egen barnmorska, planerad hemförlossning samt kejsarfödsel. Jag är även utbildad peer supporter, vilket innebär att jag har erfarenhet och kunskap om hur man stöttar människor i svåra livsomständigheter, vid kris och i återhämntning. Jag jobbar traumamedvetet, vilket innebär att jag gärna har extra samtal kring eventuella trauman som kan finnas kring sjukvård eller den egna kroppen. Mitt fokus är trygghet och relationsskapande. Hur skapar vi trygghet i en otrygg värld? Jag vill stärka dig i att känna dig trygg i din egen kropp. Det är inte ett maraton du ska springa, det är ditt livs största utmaning vad gäller din tillit till dig själv och din kropp.',
      price: 'Prisuppgifter kommer...',
         hasOwnProfile: false,
      image: doulaImages[3],
      kontakt: 'dunja.grisell@gmail.com',
          showFormButton: false, // Only for the specific doula card

    },
    {
      id: 4,
      name: 'Jenny Höglund',
        bor: 'Gustavsberg, Stockholm',
        erbjuder: ['Baspaket'],
      description: 'Till vardags pluggar jag till sjuksköterska, är mamma till en liten Astrid, fru till min man och bor i radhus i Gustavsberg. Egen förlossningserfarenhet är genom ur-akut kejsarfödsel i 30:e graviditetsveckan och därefter boendes på Neonatal-avdelning i 10 veckor. Att föda för tidigt kan vara både planerat och oplanerat och oavsett varför och hur så vet jag att i en sådan situation behövs extra mycket stöd! Jag är superintresserad av allt som har med graviditet och förlossning att göra och att nu ha påbörjat mitt doula-arbete känns SÅ spännande! Att föda barn är något magiskt. Det är tungt, vackert, läskigt, spännande, overkligt, obehagligt, underbart, smärtsamt och allt däremellan – självklart behövs stöd i det som sker, både fysiskt och mentalt till födande och en ev. partner. Du/ni har all rätt till en positiv förlossningsupplevelse, ditt barn har rätt till en anknytande första tid i livet utanför magen och detta vill jag som doula stötta er till att få! Mina ledord är lyhördhet, samspel och trygghet.',
         hasOwnProfile: false,
      pris: 'Kontakta Jenny för prisuppgifter',
      image: doulaImages[4],
      kontakt: 'jenny.höglund@gmail.com',
                showFormButton: false, // Only for the specific doula card

    }
];
  
