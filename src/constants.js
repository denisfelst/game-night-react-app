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
    Q: "Mi comida está sosa, le falta sabor. Me pregunto cuanta variedad de especias habrá en esta casa.",
    Qen: "",
    S: "8", //=========CHECK==========
    P: "cocina",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "Dicen que el queso azul que comen en esta casa tiene bastantes grasas saturadas",
    Qen: "",
    S: "46016",
    P: "hoy vi a ailen usarlo en su ensalada",
    N: niveles.N1,
  },

  {
    T: "text",
    Q: "Me rasco la cabeza y sale caspa. Tengo que solucionarlo.",
    Qen: "",
    S: "silver",
    P: "necesito algo anti-caspa",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "Ya he llenado el depósito de la moto 2 veces esta semana. La más barata nunca ha sido tan cara. Fucking Putin",
    Qen: "",
    S: "1.794", //=========CHECK==========
    P: "la 95 es la mas barata. tienes buena vista?",
    N: niveles.N1,
  },

  {
    T: "number",
    Q: "Te acabas de despertar y te huele el aliento.",
    Qen: "",
    S: "13",
    P: "noto la mugre en los dientes",
    N: niveles.N1,
  },

  //LEVEL 2

  {
    T: "text",
    Q: "Papada de aguila",
    Qen: "",
    S: "new york",
    P: "1: has visto una ultimamente? 2: watchout abreviaturas.",
    N: niveles.N2,
  },

  {
    T: "texto",
    Q: "Encuentra la palabra compuesta de las iniciales de los jugadores de esta partida (no necesariamente todos, se puede repetir letra maximo 1 vez) - Pista: grupo de especies marinas",
    Qen: "",
    S: "almeja",
    P: "invertebrado, primitivo, duro",
    N: niveles.N2,
  },

  {
    T: "date",
    Q: "Gin, tonica, vasos... que falta?",
    Qen: "",
    S: "2024-01-30", //=========CHECK==========
    P: "beber eso en verano debe ser mortal",
    N: niveles.N2,
  },

  {
    T: "date",
    Q: "Esta está complicada: el lugar mas TOP...",
    Qen: "",
    S: "2022-10-15",
    P: "...del edificio",
    N: niveles.N2,
  },

  {
    T: "text",
    Q: "Conoces el chiste de la bombilla? Ponedlo en practicas, tontos.",
    Qen: "",
    S: "roggiero",
    P: "hay muchas por aqui",
    N: niveles.N2,
  },
  {
    T: "text",
    Q: "Balcón. Fuente. Plaza. Acera. __:__ . ¿Lo ves?  (Si está muy oscuro avisar a Denis)",
    Qen: "",
    S: "24:26",
    P: "Sigue el mismo formato",
    N: niveles.N2,
  },

  // LEVEL 3

  {
    T: "number",
    Q: "Numero de palabras contenidas en el título de la cancion que escuchas en este momento.",
    Qen: "",
    S: "14",
    P: "usa la tecnologia",
    N: niveles.N3,
  },
  {
    T: "text",
    Q: "¿Color favorito de la chica del Easy Pizza (pizzeria abajo)?",
    Qen: "",
    S: "azul marino",
    P: "solo hay una manera de averiguarlo",
    N: niveles.N3,
  },
  {
    T: "number",
    Q: "Me apetece un kinder bueno de toda la vida. Me pregunto que empresa los importa? (CP)",
    Qen: "",
    S: "08940", //=========CHECK==========
    P: "Ayer compre uno en el kiosko de la gasolinera :D ... mira la parte de atras.",
    N: niveles.N3,
  },

  {
    T: "number",
    Q: "¿Cuantas escaleras tiene la entrada principal del edificio?",
    Qen: "",
    S: "29", //=========CHECK========== x + 21 + 1
    P: "fijate bien en cada paso...",
    N: niveles.N3,
  },
  {
    T: "number",
    Q: "Uf... ya casi estas. pero aun necesito saber el precio por kilogramo de los anacardos crudos del consum. Son muy sanos!",
    Qen: "",
    S: "14.5", //=========CHECK==========
    P: "Hay uno aqui abajo!",
    N: niveles.N3,
  },
];
