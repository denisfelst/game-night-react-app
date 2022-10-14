const niveles = {
  N1: "n1",
  N2: "n2",
  N3: "n3",
};

export const elem = [
  // LEVEL 1
  {
    T: "number",
    Q: "Para calentar: del 1 al 10, ¿como de sexy, inteligente y buen organizador de eventos es Denis?",
    Qen: "To warm up: from a scale from 1 to 10, how sexy, inteligent and good event organizer is Denis?",
    S: "10",
    P: "Es obvio.",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "Mi comida está sosa, le falta sabor. Me pregunto cuantas especias habrá en esta casa.",
    Qen: "My food lacks flavour. I wonder how many spices there are in this house.",
    S: "15", // ======== double Check
    P: "cocina",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "A ver esas matematicas: media de año de nacimiento de jugadores",
    Qen: "Let's see them math skillz: average year of birth of participants of players",
    S: "1997.2",
    P: "Σ(años de nacimiento jugadores) / num. jugadores = ",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "Dicen que el queso azul que comen en esta casa tiene bastantes grasas saturadas.",
    Qen: "They say that the blue cheese they eat in this house has a lot of saturated fats.",
    S: "59",
    P: "hoy vi a ailen usarlo en su ensalada",
    N: niveles.N1,
  },

  {
    T: "text",
    Q: "Me rasco la cabeza y sale caspa. Tengo que solucionarlo.",
    Qen: "I scratch my head and dandruff comes out. I have to do smth about it.",
    S: "silver",
    P: "necesito algo anti-caspa",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "Ya he llenado el depósito de la moto 2 veces esta semana. La más barata nunca ha sido tan cara!",
    Qen: "I have already filled up my bike 2 times this week. The cheapest has never been so expensive!",
    S: "1.809",
    P: "la 95 es la mas barata. ¿tienes buena vista?",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "Te acabas de despertar y te huele el aliento.",
    Qen: "You just woke up and your breath stinks.",
    S: "10",
    P: "noto la suciedad en mis dientes",
    N: niveles.N1,
  },

  //LEVEL 2

  {
    T: "text",
    Q: "Papada de aguila",
    Qen: "Eagle double chin",
    S: "new york",
    P: "1: has visto un aguila ultimamente? 2: cuidao abreviaturas.",
    N: niveles.N2,
  },

  {
    T: "texto",
    Q: "Encuentra la palabra compuesta de las iniciales de los jugadores de esta partida (no necesariamente todos, se puede repetir letra maximo 1 vez) - Pista: especies marinas",
    Qen: "Find the word composed of the initials of the players of this game (not necessarily all of them, you can repeat letter maximum 1 time) - Hint: marine species. sorry emma, spanish word :( ",
    S: "almeja",
    P: "invertebrado, primitivo, duro, a veces pegado a las rocas",
    N: niveles.N2,
  },

  {
    T: "date",
    Q: "Gin, tonica, vasos... ¿que más falta?",
    Qen: "Gin, tonic, glasses... What else is missing?",
    S: "2019-12-04",
    P: "beber eso en verano debe ser mortal",
    N: niveles.N2,
  },

  {
    T: "date",
    Q: "Piensa outside the box: el lugar más TOP🔝 ...",
    Qen: "Think outside the box : most TOP place 🔝 ...",
    S: "2022-10-15",
    P: "...del edificio",
    N: niveles.N2,
  },

  {
    T: "text",
    Q: "Conoces el chiste de la bombilla? Ponedlo en practica, tontos.",
    Qen: "You know the joke about the light bulb? Put it into practice, you fools.",
    S: "roggiero",
    P: "hay varias por aqui",
    N: niveles.N2,
  },
  {
    T: "text",
    Q: "Balcón. Plaza. Acera. __:__ ¿Lo ves? 👀 ",
    Qen: "Balcony. Plaza. Sidewalk. _ _ : _ _ ¿See it? 👀",
    S: "26:24",
    P: "Sigue el mismo formato.",
    N: niveles.N2,
  },

  {
    T: "number",
    Q: "TURN DOWN FOR WHAT",
    Qen: "(meme)",
    S: "1234",
    P: "Busca por el salón",
    N: niveles.N2,
  },

  // LEVEL 3

  {
    T: "number",
    Q: "Numero de palabras contenidas en el título de la cancion que escuchas en este momento.",
    Qen: "Number of words contained in the title of the song you are currently listening to.",
    S: "14",
    P: "usa la tecnologia",
    N: niveles.N3,
  },
  {
    T: "text",
    Q: "¿Cual es el color favorito de la chica del Easy Pizza (pizzeria abajo)?",
    Qen: "What is the favorite color of the girl at Easy Pizza (pizzeria downstairs)?",
    S: "azul marino",
    P: "solo hay una manera de averiguarlo",
    N: niveles.N3,
  },
  {
    T: "date",
    Q: "Hay un rumor que dice que los Kinder Bueno del kiosko de la gasolinera están caducados. ¿Será verdad?",
    Qen: "There is a rumor that states that the Kinder Bueno at the gas station kiosk is out of date. Is it true?",
    S: "2023-03-21",
    P: "parte de atrás del paquete.",
    N: niveles.N3,
  },

  {
    T: "number",
    Q: "¿Cuantas escaleras tiene la entrada principal del edificio?",
    Qen: "How many stairs does the main entrance of the building have?",
    S: "29",
    P: "fijate bien en cada paso...",
    N: niveles.N3,
  },
  {
    T: "number",
    Q: "Uf... ya casi estas. Pero aun necesito saber el precio por kilogramo de los anacardos crudos del consum. Son muy sanos!",
    Qen: "Almost there! But I still need to know the price per kilogram of raw cashew nuts from the consum. They are very healthy!",
    S: "14.5", //=========CHECK==========
    P: "Hay uno aqui abajo!",
    N: niveles.N3,
  },
];
