const CardTypes = {
  character: "Character",
  combatSkill: "Combat Skill"
} 
const SubTypes = {
  mutant: "Mutant",
  superhero: "Superhero",
  human: "Human",
  radiactive: "Radioactive"
}
const Attributes = {
  aerial: "Aerial",
  unblockable: "Unblockable"
}

const Cards = {
  // Characters
  Wolverine: {
    name: "Wolverine",
    const: 3,
    types: [CardTypes.character, CardTypes.mutant],
    healthPonints: 5,
    moves: [
      {
        name: "Berserker Barrage",
        damage: 3,
        cost: 1,
      },
      {
        name: "Berserker Charge",
        damage: 6,
        cost: -6,
        attributes: [Attributes.unblockable]
      }
    ],
    abilities: [
      "Healing Factor - Recover 1 Health Point per turn."
    ]
  }
}