export class InMemorytrackService {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    //let sites = [
    //  {
    //    "id": 11,
    //    "name": "Chewbacca",
    //    "side": "light"
    //  },
    //  {
    //    "id": 12,
    //    "name": "Rey",
    //    "side": "light"
    //  },
    //  {
    //    "id": 13,
    //    "name": "Finn (FN2187)",
    //    "side": "light"
    //  },
    //  {
    //    "id": 14,
    //    "name": "Han Solo",
    //    "side": "light"
    //  },
    //  {
    //    "id": 15,
    //    "name": "Leia Organa",
    //    "side": "light"
    //  },
    //  {
    //    "id": 16,
    //    "name": "Luke Skywalker",
    //    "side": "light"
    //  },
    //  {
    //    "id": 17,
    //    "name": "Poe Dameron",
    //    "side": "light"
    //  },
    //  {
    //    "id": 18,
    //    "name": "Kylo Ren",
    //    "side": "dark"
    //  },
    //  {
    //    "id": 19,
    //    "name": "Supreme Commander Snoke",
    //    "side": "dark"
    //  },
    //  {
    //    "id": 20,
    //    "name": "R2-D2",
    //    "side": "light"
    //  },
    //  {
    //    "id": 21,
    //    "name": "BB8",
    //    "side": "light"
    //  },
    //  {
    //    "id": 22,
    //    "name": "C-3PO",
    //    "side": "light"
    //  },
    //  {
    //    "id": 23,
    //    "name": "Maz Kanata",
    //    "side": "light"
    //  },
    //  {
    //    "id": 24,
    //    "name": "Captain Phasma",
    //    "side": "dark"
    //  },
    //  {
    //    "id": 25,
    //    "name": "General Hux",
    //    "side": "dark"
    //  },
    //  {
    //    "id": 26,
    //    "name": "Lor San Tekka",
    //    "side": "light"
    //  }
    //  ];

    let sites = [
        { name: "Bulbasaur", location: "grass", stage: 0, caught: 0, description: "Seed Site" },
        { name: "Ivysaur", location: "grass", stage: 3, caught: 0, description: "Seed Site" },
        { name: "Venusaur", location: "grass", stage: 5, caught: 0, description: "Seed Site" },
        { name: "Charmander", location: "fire", stage: 0, caught: 0, description: "Lizard Site" },
        { name: "Charmeleon", location: "fire", stage: 3, caught: 0, description: "Flame Site" },
        { name: "Charizard", location: "fire", stage: 5, caught: 0, description: "Flame Site" },
        { name: "Squirtle", location: "water", stage: 0, caught: 0, description: "Tiny Turtle Site" },
        { name: "Wartortle", location: "water", stage: 3, caught: 0, description: "Turtle Site" },
        { name: "Blastoise", location: "water", stage: 5, caught: 0, description: "Shellfish Site" },
        { name: "Caterpie", location: "bug", stage: 1, caught: 0, description: "Worm Site" },
        { name: "Metapod", location: "bug", stage: 2, caught: 0, description: "Cocoon Site" },
        { name: "Butterfree", location: "bug", stage: 4, caught: 0, description: "Butterfly Site" },
        { name: "Weedle", location: "bug", stage: 1, caught: 0, description: "Hairy bug Site" },
        { name: "Kakuna", location: "bug", stage: 2, caught: 0, description: "Cocoon Site" },
        { name: "Beedrill", location: "bug", stage: 4, caught: 0, description: "poison Bee Site" },
        { name: "Pidgey", location: "flying", stage: 1, caught: 0, description: "Tiny Bird Site" },
        { name: "Pidgeotto", location: "flying", stage: 3, caught: 0, description: "Bird Site" },
        { name: "Pidgeot", location: "flying", stage: 5, caught: 0, description: "Bird Site" },
        { name: "Rattata", location: "normal", stage: 1, caught: 0, description: "Mouse Site" },
        { name: "Raticate", location: "normal", stage: 2, caught: 0, description: "Mouse Site" },
        { name: "Spearow", location: "flying", stage: 1, caught: 0, description: "Tiny Bird Site" },
        { name: "Fearow", location: "flying", stage: 3, caught: 0, description: "Beak Site" },
        { name: "Ekans", location: "poison", stage: 1, caught: 0, description: "Snake Site" },
        { name: "Arbok", location: "poison", stage: 3, caught: 0, description: "Cobra Site" },
        { name: "Pikachu", location: "electric", stage: 1, caught: 0, description: "Mouse Site" },
        { name: "Raichu", location: "electric", stage: 3, caught: 0, description: "Mouse Site" },
        { name: "Sandshrew", location: "ground", stage: 1, caught: 0, description: "Mouse Site" },
        { name: "Sandslash", location: "ground", stage: 2, caught: 0, description: "Mouse Site" },
        { name: "Nidoran F", location: "poison", stage: 1, caught: 0, description: "poison Pin Site" },
        { name: "Nidorina", location: "poison", stage: 2, caught: 0, description: "poison Pin Site" },
        { name: "Nidoqueen", location: "poison", stage: 5, caught: 0, description: "Drill Site" },
        { name: "Nidoran M", location: "poison", stage: 1, caught: 0, description: "poison Pin Site" },
        { name: "Nidorino", location: "poison", stage: 2, caught: 0, description: "poison Pin Site" },
        { name: "Nidoking", location: "poison", stage: 5, caught: 0, description: "Drill Site" },
        { name: "Clefairy", location: "fairy", stage: 1, caught: 0, description: "fairy Site" },
        { name: "Clefable", location: "fairy", stage: 3, caught: 0, description: "fairy Site" },
        { name: "Vuplix", location: "fire", stage: 1, caught: 0, description: "Fox Site" },
        { name: "Ninetales", location: "fire", stage: 3, caught: 0, description: "Fox Site" },
        { name: "Jigglypuff", location: "fairy", stage: 1, caught: 0, description: "Balloon Site" },
        { name: "Wigglytuff", location: "fairy", stage: 3, caught: 0, description: "Balloon Site" },
        { name: "Zubat", location: "poison", stage: 1, caught: 0, description: "Bat Site" },
        { name: "Golbat", location: "poison", stage: 2, caught: 0, description: "Bat Site" },
        { name: "Oddish", location: "grass", stage: 1, caught: 0, description: "Weed Site" },
        { name: "Gloom", location: "grass", stage: 2, caught: 0, description: "Weed Site" },
        { name: "Vileplume", location: "grass", stage: 3, caught: 0, description: "Flower Site" },
        { name: "Paras", location: "bug", stage: 1, caught: 0, description: "Mushroom Site" },
        { name: "Parasect", location: "bug", stage: 2, caught: 0, description: "Mushroom Site" },
        { name: "Venonat", location: "bug", stage: 1, caught: 0, description: "Insect Site" },
        { name: "Venomoth", location: "bug", stage: 2, caught: 0, description: "poison Moth Site" },
        { name: "Diglett", location: "ground", stage: 1, caught: 0, description: "Mole Site" },
        { name: "Dugtrio", location: "ground", stage: 2, caught: 0, description: "Mole Site" },
        { name: "Meowth", location: "normal", stage: 1, caught: 0, description: "Scratch Cat Site" },
        { name: "Persian", location: "normal", stage: 2, caught: 0, description: "Classy Cat Site" },
        { name: "Psyduck", location: "water", stage: 1, caught: 0, description: "Duck Site" },
        { name: "Golduck", location: "water", stage: 2, caught: 0, description: "Duck Site" },
        { name: "Mankey", location: "fighting", stage: 1, caught: 0, description: "Pig Monkey Site" },
        { name: "Primeape", location: "fighting", stage: 2, caught: 0, description: "Pig Monkey Site" },
        { name: "Growlithe", location: "fire", stage: 1, caught: 0, description: "Puppy Site" },
        { name: "Arcanine", location: "fire", stage: 2, caught: 0, description: "Legendary Site" },
        { name: "Poliwag", location: "water", stage: 1, caught: 0, description: "Tadpole Site" },
        { name: "Poliwhirl", location: "water", stage: 2, caught: 0, description: "Tadpole Site" },
        { name: "Poliwrath", location: "water", stage: 5, caught: 0, description: "Tadpole Site" },
        { name: "Abra", location: "psychic", stage: 1, caught: 0, description: "Psi Site" },
        { name: "Kadabra", location: "psychic", stage: 2, caught: 0, description: "Psi Site" },
        { name: "Alakazam", location: "psychic", stage: 5, caught: 0, description: "Psi Site" },
        { name: "Machop", location: "fighting", stage: 1, caught: 0, description: "Superpower Site" },
        { name: "Machoke", location: "fighting", stage: 2, caught: 0, description: "Superpower Site" },
        { name: "Machamp", location: "fighting", stage: 5, caught: 0, description: "Superpower Site" },
        { name: "Bellsprout", location: "grass", stage: 1, caught: 0, description: "Flower Site" },
        { name: "Weepinbell", location: "grass", stage: 3, caught: 0, description: "Flycatcher Site" },
        { name: "Victreebel", location: "grass", stage: 5, caught: 0, description: "Flycatcher Site" },
        { name: "Tentacool", location: "water", stage: 1, caught: 0, description: "Jellyfish Site" },
        { name: "Tentacruel", location: "water", stage: 3, caught: 0, description: "Jellyfish Site" },
        { name: "Geodude", location: "rock", stage: 1, caught: 0, description: "Rock Site" },
        { name: "Graveler", location: "rock", stage: 3, caught: 0, description: "Rock Site" },
        { name: "Golem", location: "rock", stage: 5, caught: 0, description: "Megaton Site" },
        { name: "Ponyta", location: "fire", stage: 2, caught: 0, description: "fire Horse Site" },
        { name: "Rapidash", location: "fire", stage: 3, caught: 0, description: "fire Horse Site" },
        { name: "Slowpoke", location: "water", stage: 2, caught: 0, description: "Dopey Site" },
        { name: "Slowbro", location: "water", stage: 3, caught: 0, description: "Hermit Crab Site" },
        { name: "Magnemite", location: "electric", stage: 2, caught: 0, description: "Magnet Site" },
        { name: "Magneton", location: "electric", stage: 3, caught: 0, description: "Magnet Site" },
        { name: "Farfetch'd", location: "flying", stage: 3, caught: 0, description: "Wild Duck Site" },
        { name: "Doduo", location: "flying", stage: 2, caught: 0, description: "Twin Bird Site" },
        { name: "Dodrio", location: "flying", stage: 4, caught: 0, description: "Triple Bird Site" },
        { name: "Seel", location: "water", stage: 3, caught: 0, description: "Sea Lion Site" },
        { name: "Dewgong", location: "ice", stage: 5, caught: 0, description: "Sea Lion Site" },
        { name: "Grimer", location: "poison", stage: 2, caught: 0, description: "Sludge Site" },
        { name: "Muk", location: "poison", stage: 4, caught: 0, description: "Sludge Site" },
        { name: "Shellder", location: "water", stage: 2, caught: 0, description: "Bivalve Site" },
        { name: "Cloyster", location: "ice", stage: 4, caught: 0, description: "Bivalve Site" },
        { name: "Gastly", location: "ghost", stage: 2, caught: 0, description: "Gas Site" },
        { name: "Haunter", location: "ghost", stage: 3, caught: 0, description: "Gas Site" },
        { name: "Gengar", location: "ghost", stage: 4, caught: 0, description: "Shadow Site" },
        { name: "Onix", location: "rock", stage: 3, caught: 0, description: "Rock Snake Site" },
        { name: "Drozee", location: "psychic", stage: 1, caught: 0, description: "Hypnosis Site" },
        { name: "Hypno", location: "psychic", stage: 3, caught: 0, description: "Hypnosis Site" },
        { name: "Krabby", location: "water", stage: 3, caught: 0, description: "River Crab Site" },
        { name: "Kingler", location: "water", stage: 4, caught: 0, description: "Pincer Site" },
        { name: "Voltorb", location: "electric", stage: 1, caught: 0, description: "Ball Site" },
        { name: "Electrode", location: "electric", stage: 3, caught: 0, description: "Ball Site" },
        { name: "Exeggcute", location: "grass", stage: 3, caught: 0, description: "Egg Site" },
        { name: "Exeggutor", location: "grass", stage: 5, caught: 0, description: "Coconut Site" },
        { name: "Cubone", location: "ground", stage: 3, caught: 0, description: "Lonely Site" },
        { name: "Marowak", location: "ground", stage: 4, caught: 0, description: "Bone Keeper Site" },
        { name: "Hitmonchan", location: "fighting", stage: 5, caught: 0, description: "Kicking Site" },
        { name: "Hitmonlee", location: "fighting", stage: 5, caught: 0, description: "Punching Site" },
        { name: "Lickitung", location: "normal", stage: 4, caught: 0, description: "Licking Site" },
        { name: "Koffing", location: "poison", stage: 2, caught: 0, description: "poison Gas Site" },
        { name: "Weezing", location: "poison", stage: 4, caught: 0, description: "poison Gas Site" },
        { name: "Rhyhorn", location: "rock", stage: 3, caught: 0, description: "Spikes Site" },
        { name: "Rhydon", location: "rock", stage: 4, caught: 0, description: "Drill Site" },
        { name: "Chansey", location: "normal", stage: 4, caught: 0, description: "Egg Site" },
        { name: "Tangela", location: "grass", stage: 4, caught: 0, description: "Vine Site" },
        { name: "Kangaskhan", location: "normal", stage: 4, caught: 0, description: "Parent Site" },
        { name: "Horsea", location: "water", stage: 1, caught: 0, description: "Dragon Site" },
        { name: "Seadra", location: "water", stage: 2, caught: 0, description: "Dragon Site" },
        { name: "Goldeen", location: "water", stage: 3, caught: 0, description: "Goldfish Site" },
        { name: "Seaking", location: "water", stage: 4, caught: 0, description: "Goldfish Site" },
        { name: "Staryu", location: "water", stage: 1, caught: 0, description: "Star Shape Site" },
        { name: "Starmie", location: "water", stage: 2, caught: 0, description: "Mysterious Site" },
        { name: "Mr. Mime", location: "psychic", stage: 4, caught: 0, description: "Barrier Site" },
        { name: "Scyther", location: "bug", stage: 4, caught: 0, description: "Mantis Site" },
        { name: "Jynx", location: "psychic", stage: 4, caught: 0, description: "Human Shape Site" },
        { name: "Electabuzz", location: "electric", stage: 5, caught: 0, description: "electric Site" },
        { name: "Magmar", location: "fire", stage: 5, caught: 0, description: "Spitfire Site" },
        { name: "Pinsir", location: "bug", stage: 5, caught: 0, description: "Stag Beetle Site" },
        { name: "Tauros", location: "normal", stage: 4, caught: 0, description: "Wild Bull Site" },
        { name: "Magikarp", location: "water", stage: 1, caught: 0, description: "Fish Site" },
        { name: "Gyrados", location: "water", stage: 5, caught: 0, description: "Atrocious Site" },
        { name: "Lapras", location: "water", stage: 4, caught: 0, description: "Transport Site" },
        { name: "Ditto", location: "normal", stage: 4, caught: 0, description: "Transform Site" },
        { name: "Eevee", location: "normal", stage: 2, caught: 0, description: "Evolution Site" },
        { name: "Vaporeon", location: "water", stage: 4, caught: 0, description: "Bubble Jet Site" },
        { name: "Jolteon", location: "electric", stage: 4, caught: 0, description: "Lightning Site" },
        { name: "Flareon", location: "fire", stage: 4, caught: 0, description: "Flame Site" },
        { name: "Porygon", location: "normal", stage: 5, caught: 0, description: "Virtual Site" },
        { name: "Omanyte", location: "water", stage: 4, caught: 0, description: "Spiral Site" },
        { name: "Omastar", location: "water", stage: 5, caught: 0, description: "Spiral Site" },
        { name: "Kabuto", location: "rock", stage: 4, caught: 0, description: "Shellfish Site" },
        { name: "Kabutops", location: "rock", stage: 5, caught: 0, description: "Shellfish Site" },
        { name: "Aerodactyl", location: "flying", stage: 5, caught: 0, description: "Fossil Site" },
        { name: "Snorlax", location: "normal", stage: 5, caught: 0, description: "Sleeping Site" },
        { name: "Articuno", location: "ice", stage: 6, caught: 0, description: "Freeze Site" },
        { name: "Zapdos", location: "electric", stage: 6, caught: 0, description: "electric Site" },
        { name: "Moltres", location: "fire", stage: 6, caught: 0, description: "Flame Site" },
        { name: "Dratini", location: "dragon", stage: 4, caught: 0, description: "Dragon Site" },
        { name: "Dragonair", location: "dragon", stage: 5, caught: 0, description: "Dragon Site" },
        { name: "Dragonite", location: "dragon", stage: 6, caught: 0, description: "Dragon Site" },
        { name: "Mewtwo", location: "psychic", stage: 6, caught: 0, description: "Genetic Site" },
        { name: "Mew", location: "psychic", stage: 7, caught: 0, description: "New Species Site" }
    ];

    let resources = [{}];
    //[
    //  {
    //    "id": 30,
    //    "name": "Millennium Falcon",
    //    "type": "space"
    //  },
    //  {
    //    "id": 32,
    //    "name": "X-Wing Fighter",
    //    "type": "space"
    //  },
    //  {
    //    "id": 33,
    //    "name": "Imperial Star Destroyer",
    //    "type": "space"
    //  },
    //  {
    //    "id": 34,
    //    "name": "AT-AT Walker",
    //    "type": "land"
    //  },
    //  {
    //    "id": 35,
    //    "name": "TIE Fighter",
    //    "type": "space"
    //  },
    //  {
    //    "id": 36,
    //    "name": "B-Wing Fighter",
    //    "type": "space"
    //  },
    //  {
    //    "id": 37,
    //    "name": "ETA-2 Jedi Starfighter",
    //    "type": "space"
    //  },
    //  {
    //    "id": 38,
    //    "name": "TIE Interceptor",
    //    "type": "space"
    //  },
    //  {
    //    "id": 39,
    //    "name": "X-34 Landspeeder",
    //    "type": "land"
    //  },
    //  {
    //    "id": 40,
    //    "name": "Snow Speeder",
    //    "type": "land"
    //  },
    //  {
    //    "id": 41,
    //    "name": "X-34 Landspeeder",
    //    "type": "land"
    //  }
    //]

    return { sites, resources };
  }
}