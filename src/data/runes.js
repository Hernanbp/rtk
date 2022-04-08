import { nanoid } from "@reduxjs/toolkit";

export const runes = [
  {
    name: "Leftover Potion",
    rarity: "Common",
    id: nanoid(),
    description: "Recover 4% of max HP at the end of your turn.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_utility_1.png",
  },
  {
    name: "Mini Legion",
    rarity: "Common",
    id: nanoid(),
    description:
      "Summoned units have +10 max HP. Deal +2 DMG per Summon to all Enemies at the begining of your turn.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_hybrid_1.png",
  },
  {
    name: "Thick Shield",
    rarity: "Common",
    id: nanoid(),
    description: "Gain 10 bonus Shield from cards.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_defensive_1.png",
  },
  {
    name: "Tough Strike",
    rarity: "Common",
    id: nanoid(),
    description: "Non Multihit Attack Abilities deal 10 bonus DMG.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_offensive_1.png",
  },
  {
    name: "Pure Power",
    rarity: "Rare",
    id: nanoid(),
    description: "Attack Abilities gain 15% Class Bonus.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_offensive_2.png",
  },
  {
    name: "Pure Skill",
    rarity: "Rare",
    id: nanoid(),
    description: "Heal and Shield Abilities gain 15% Class Bonus.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_defensive_2.png",
  },
  {
    name: "Pure Instinct",
    rarity: "Epic",
    id: nanoid(),
    description: "All cards gain 15% Class Bonus.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_hybrid_2.png",
  },
  {
    name: "Shady Exchange",
    rarity: "Rare",
    id: nanoid(),
    description:
      "Solo. +1 energy on even numbered turns. Add 1 Daze, 1 Goo, 1 Void to your deck.",
    image:
      "https://www.axie.tech/images/templates/rune/art/rune_neutral_utility_2.png",
  },
];
