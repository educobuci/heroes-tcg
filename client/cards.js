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
  ant_air: "Ant-air",
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
        name: "Tornado Claw",
        damage: 1,
        cost: 1,
        attributes: [Attributes.ant_air]
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
  },
  IronMan: {
    name: "Iron Man",
    cost: 4,
    types: [CardTypes.character, CardTypes.superhero],
    healthPonints: 4,
    moves: [
      {
        name: "Unibean",
        damge: 2,
        cost: 1,
      },
      {
        name: "Repulsor Blast",
        damge: 1,
        cost: 1,
        attributes: [Attributes.aerial]
      },
      {
        name: "Proton Cannon",
        damge: 5,
        cost: -6
      }
    ]
  },
  Hulk: {
    name: "Hulk",
    cost: 5,
    types: [CardTypes.character, CardTypes.radioactive],
    healthPonints: 7,
    moves: [
      {
        name: "Gama Charge",
        damge: 4,
        cost: 1,
      },
      {
        name: "Gamma Crush",
        damage: 7,
        cost: -6
      }
    ]
  },
  AdvancedGuard: {
    name: "AdvancedGuard",
    cost: 1,
    types: [CardTypes.combatSkill],
    text: "Reduces damage caused to target character you control to 1."
  },  
  Tag: {
    name: "Tag",
    cost: 2,
    types: [CardTypes.combatSkill],
    text: "If a character caused combat damage to a player, you can set another character you control in the active position, then perform a move."
  }
}