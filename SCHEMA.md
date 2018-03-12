# Warframe

```typescript

type Operation: "add" | "add_percent";

class WarframeAbilityBase {
  id: string;

  name: string;
  cost: number;
  range: number;
  
  stats: {
    name: string,
    values: number[],
    affected_by: string,
    affect_op: Operation;
    prefix: string,
    suffix: string,
  }[];
}

class WarframeAbility extends WarframeAbilityBase {

  rank: number;
}

class WarframeBase {
  id: string;

  name: string;

  armor: number;
  energy: number;
  health: number;
  shield: number;
  sprint_speed: number;
}

class Warframe extends WarframeBase {

  rank: number;
  potato: boolean;

  duration: number;
  efficiency: number;
  range: number;
  strength: number;

  cast_speed: number;

  shield_recharge_rate: number;
  energy_recharge_rate: number;

  parkour_velocity: number;
  slide: number;
  friction: number;
  bullet_jump: number;
  parkour_interact: number; // aim glide & wall hang

  bullet_jump_damage: {type: string, amount: number}[];

  knockdown_recovery: number;
  resist_knockdown_chance: number;
  knockdown_damage_resistance: number;

  stagger_recovery: number;

  evasion: number;
  airborne_damage_resistance: number;

  bleedout_damage_multiplier: number;
  auto_parry_chance: number;

  shield_resistance: {type: string, amount: number}[];

  damage_resistance: {type: string, amount: number}[];
  damage_reflect: number;

  hacking_grace: number;

  aura_strength: number; // your aura's strength
  aura_effectiveness: number; // aura's effectiveness on you

  loot_radar: number;
  enemy_radar: number;

  stomp_range: number;
  stomp_damage: number;

  aura_effect_field: string;
  aura_effect_amount: number;

  aura_mod: {id: string, level: number};
  exilus_mod: {id: string, level: number};
  mods: {id: string, level: number}[];
}
```

```typescript

class Weapon {
  accuracy: number;
  charge_rate?: number;
}

```
