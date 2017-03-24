var Types = require('./Types.enum');
var Effects = require('./Effects.enum');
var Stats = require('./Stats.enum');
var Status = require('./Status.enum');

module.exports = {
MIMIC: {name: 'Mimic', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.COPY_MOVE, pp: 10, damagetype: 'STAT', params: {}},
MIRROR_MOVE: {name: 'Mirror Move', type: Types.FLYING, power: 0, accuracy: 0, effect: Effects.COPY_MOVE, pp: 20, damagetype: 'STAT', params: {}},
CONVERSION: {name: 'Conversion', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.COPY_TYPE, pp: 30, damagetype: 'STAT', params: {}},
SUBSTITUTE: {name: 'Substitute', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.CREATE_DECOY, pp: 10, damagetype: 'STAT', params: {}},
BARRAGE: {name: 'Barrage', type: Types.NORMAL, power: 15, accuracy: 85, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {multihit: 5}},
BIND: {name: 'Bind', type: Types.NORMAL, power: 15, accuracy: 85, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {multihit: 5, trap: true}},
BITE: {name: 'Bite', type: Types.DARK, power: 60, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'PHYS', params: {flinchChance: 10}},
BODY_SLAM: {name: 'Body Slam', type: Types.NORMAL, power: 85, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', range: 2, params: {assault: true, paralyzeChance: 30}},
BONE_CLUB: {name: 'Bone Club', type: Types.GROUND, power: 65, accuracy: 85, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {flinchChance: 10}},
BONEMERANG: {name: 'Bonemerang', type: Types.GROUND, power: 50, accuracy: 90, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', range: 3, params: {multihit: 2}},
CLAMP: {name: 'Clamp', type: Types.WATER, power: 35, accuracy: 85, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {multihit: 5, trap: true}},
COMET_PUNCH: {name: 'Comet Punch', type: Types.NORMAL, power: 18, accuracy: 85, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {multihit: 5}},
CONSTRICT: {name: 'Constrict', type: Types.NORMAL, power: 10, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS', params: {lowerChance: 10, lowerStat: Stats.SPD}},
CRABHAMMER: {name: 'Crabhammer', type: Types.WATER, power: 100, accuracy: 90, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {critBoost: true}},
CUT: {name: 'Cut', type: Types.NORMAL, power: 50, accuracy: 95, effect: Effects.DAMAGE, pp: 30, damagetype: 'PHYS', params: {}},
DIZZY_PUNCH: {name: 'Dizzy Punch', type: Types.NORMAL, power: 70, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {}},
DOUBLE_KICK: {name: 'Double Kick', type: Types.FIGHTING, power: 30, accuracy: 100, effect: Effects.DAMAGE, pp: 30, damagetype: 'PHYS', params: {multihit: 2}},
DOUBLE_SLAP: {name: 'Double Slap', type: Types.NORMAL, power: 15, accuracy: 85, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {multihit: 5}},
DOUBLE_EDGE: {name: 'Double-Edge', type: Types.NORMAL, power: 120, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {recoil: 25}},
DRILL_PECK: {name: 'Drill Peck', type: Types.FLYING, power: 80, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {}},
EARTHQUAKE: {name: 'Earthquake', type: Types.GROUND, power: 100, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', range: 5, params: {undergroundBonus: 2, splashRange: 4}},
EGG_BOMB: {name: 'Egg Bomb', type: Types.NORMAL, power: 100, accuracy: 75, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', range: 3, params: {}},
EXPLOSION: {name: 'Explosion', type: Types.NORMAL, power: 250, accuracy: 100, effect: Effects.DAMAGE, pp: 5, damagetype: 'PHYS', params: {suicide: true, splashRange: 3}},
FIRE_PUNCH: {name: 'Fire Punch', type: Types.FIRE, power: 75, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {burnChance: 10}},
FURY_ATTACK: {name: 'Fury Attack', type: Types.NORMAL, power: 15, accuracy: 85, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {multihit: 5}},
FURY_SWIPES: {name: 'Fury Swipes', type: Types.NORMAL, power: 18, accuracy: 80, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {multihit: 5}},
HEADBUTT: {name: 'Headbutt', type: Types.NORMAL, power: 70, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {flinchChance: 30}},
HIGH_JUMP_KICK: {name: 'High Jump Kick', type: Types.FIGHTING, power: 130, accuracy: 90, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', range: 2, params: {damageOnMiss: 1}},
HORN_ATTACK: {name: 'Horn Attack', type: Types.NORMAL, power: 65, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'PHYS', params: {}},
HYPER_FANG: {name: 'Hyper Fang', type: Types.NORMAL, power: 80, accuracy: 90, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {flinchChance: 10}},
ICE_PUNCH: {name: 'Ice Punch', type: Types.ICE, power: 75, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {freezeChance: 10}},
JUMP_KICK: {name: 'Jump Kick', type: Types.FIGHTING, power: 100, accuracy: 95, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', range: 2, params: {damageOnMiss: 1}},
KARATE_CHOP: {name: 'Karate Chop', type: Types.FIGHTING, power: 50, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'PHYS', params: {critBoost: true}},
LEECH_LIFE: {name: 'Leech Life', type: Types.BUG, power: 80, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {absorbHPPercentage: 50}},
LICK: {name: 'Lick', type: Types.GHOST, power: 30, accuracy: 100, effect: Effects.DAMAGE, pp: 30, damagetype: 'PHYS', params: {paralyzeChance: 30}},
LOW_KICK: {name: 'Low Kick', type: Types.FIGHTING, power: 50, accuracy: 90, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {flinchChance: 30}},
MEGA_KICK: {name: 'Mega Kick', type: Types.NORMAL, power: 120, accuracy: 75, effect: Effects.DAMAGE, pp: 5, damagetype: 'PHYS', params: {}},
MEGA_PUNCH: {name: 'Mega Punch', type: Types.NORMAL, power: 80, accuracy: 85, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {}},
PAY_DAY: {name: 'Pay Day', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {dropCoins: true}},
PECK: {name: 'Peck', type: Types.FLYING, power: 35, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS', params: {}},
PIN_MISSILE: {name: 'Pin Missile', type: Types.BUG, power: 25, accuracy: 95, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', range: 3, params: {multihit: 5}},
POISON_STING: {name: 'Poison Sting', type: Types.POISON, power: 15, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS', range: 2, params: {poisonChance: 30}},
POUND: {name: 'Pound', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS', params: {}},
QUICK_ATTACK: {name: 'Quick Attack', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 30, damagetype: 'PHYS', range: 2, params: {assault: true}},
RAGE: {name: 'Rage', type: Types.NORMAL, power: 20, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {rageTurns: 50, raiseAttackWhileRaging: true}},
RAZOR_LEAF: {name: 'Razor Leaf', type: Types.GRASS, power: 55, accuracy: 95, effect: Effects.DAMAGE, pp: 25, damagetype: 'PHYS', range: 3, params: {critBoost: true, splashRange: 2}},
ROCK_SLIDE: {name: 'Rock Slide', type: Types.ROCK, power: 75, accuracy: 90, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', range: 2, params: {}},
ROCK_THROW: {name: 'Rock Throw', type: Types.ROCK, power: 50, accuracy: 90, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', range: 3, params: {}},
ROLLING_KICK: {name: 'Rolling Kick', type: Types.FIGHTING, power: 60, accuracy: 85, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', range: 2, params: {flinchChance: 30}},
SCRATCH: {name: 'Scratch', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS', params: {}},
SEISMIC_TOSS: {name: 'Seismic Toss', type: Types.FIGHTING, power: 0, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: { fixedDamage: "Level"}},
SELF_DESTRUCT: {name: 'Self-Destruct', type: Types.NORMAL, power: 200, accuracy: 100, effect: Effects.DAMAGE, pp: 5, damagetype: 'PHYS', params: {suicide: true}},
SKULL_BASH: {name: 'Skull Bash', type: Types.NORMAL, power: 130, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: { buildUpTurns: 1 }},
SKY_ATTACK: {name: 'Sky Attack', type: Types.FLYING, power: 140, accuracy: 90, effect: Effects.DAMAGE, pp: 5, damagetype: 'PHYS', range: 3, params: { buildUpTurns: 1 }},
SLAM: {name: 'Slam', type: Types.NORMAL, power: 80, accuracy: 75, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {}},
SLASH: {name: 'Slash', type: Types.NORMAL, power: 70, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {critBoost: true}},
SPIKE_CANNON: {name: 'Spike Cannon', type: Types.NORMAL, power: 20, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', range: 3, params: {multihit: 5}},
STOMP: {name: 'Stomp', type: Types.NORMAL, power: 65, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {flinchChance: 30}},
STRENGTH: {name: 'Strength', type: Types.NORMAL, power: 80, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {}},
STRUGGLE: {name: 'Struggle', type: Types.NORMAL, power: 50, accuracy: 100, effect: Effects.DAMAGE, pp: 0, damagetype: 'PHYS', params: {recoil: 50}},
SUBMISSION: {name: 'Submission', type: Types.FIGHTING, power: 80, accuracy: 80, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {}},
SUPER_FANG: {name: 'Super Fang', type: Types.NORMAL, power: 0, accuracy: 90, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {fixedDamagePercentage: 50}},
TACKLE: {name: 'Tackle', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS', params: {}},
TAKE_DOWN: {name: 'Take Down', type: Types.NORMAL, power: 90, accuracy: 85, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {recoil: 25}},
THRASH: {name: 'Thrash', type: Types.NORMAL, power: 120, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {rageTurns: 3}},
THUNDER_PUNCH: {name: 'Thunder Punch', type: Types.ELECTRIC, power: 75, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {paralyzeChance: 10}},
TWINEEDLE: {name: 'Twineedle', type: Types.BUG, power: 25, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {multihit: 2, poisonChance: 20}},
VICE_GRIP: {name: 'Vice Grip', type: Types.NORMAL, power: 55, accuracy: 100, effect: Effects.DAMAGE, pp: 30, damagetype: 'PHYS', params: {}},
VINE_WHIP: {name: 'Vine Whip', type: Types.GRASS, power: 45, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'PHYS', params: {}},
WATERFALL: {name: 'Waterfall', type: Types.WATER, power: 80, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {}},
WING_ATTACK: {name: 'Wing Attack', type: Types.FLYING, power: 60, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS', params: {}},
WRAP: {name: 'Wrap', type: Types.NORMAL, power: 15, accuracy: 90, effect: Effects.DAMAGE, pp: 20, damagetype: 'PHYS', params: {multihit: 5, trap: true}},
ABSORB: {name: 'Absorb', type: Types.GRASS, power: 20, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'SPEC', params: {absorbHPPercentage: 50}},
ACID: {name: 'Acid', type: Types.POISON, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 30, damagetype: 'SPEC', range: 2, params: {lowerChance: 10, lowerStat: Stats.DEF, splashRange: 2}},
AURORA_BEAM: {name: 'Aurora Beam', type: Types.ICE, power: 65, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'SPEC', range: 5, params: {lowerChance: 10, lowerStat: Stats.ATK}},
BLIZZARD: {name: 'Blizzard', type: Types.ICE, power: 110, accuracy: 70, effect: Effects.DAMAGE, pp: 5, damagetype: 'SPEC', range: 5, params: {freezeChance: 10}},
BUBBLE: {name: 'Bubble', type: Types.WATER, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 30, damagetype: 'SPEC', range: 2, params: {lowerChance: 10, lowerStat: Stats.SPD, splashRange: 2}},
BUBBLE_BEAM: {name: 'Bubble Beam', type: Types.WATER, power: 65, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'SPEC', range: 4, params: {lowerChance: 10, lowerStat: Stats.SPD}},
CONFUSION: {name: 'Confusion', type: Types.PSYCHIC, power: 50, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'SPEC', params: {confuseChance: 10}},
DRAGON_RAGE: {name: 'Dragon Rage', type: Types.DRAGON, power: 0, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', range: 3, params: {fixedDamage: 40}},
DREAM_EATER: {name: 'Dream Eater', type: Types.PSYCHIC, power: 100, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', range: 3, params: {requireStatus: "SLEEP", absorbHPPercentage: 50}},
EMBER: {name: 'Ember', type: Types.FIRE, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'SPEC', range: 2, params: {burnChance: 10}},
FIRE_BLAST: {name: 'Fire Blast', type: Types.FIRE, power: 110, accuracy: 85, effect: Effects.DAMAGE, pp: 5, damagetype: 'SPEC', range: 4, params: {burnChance: 30}},
FIRE_SPIN: {name: 'Fire Spin', type: Types.FIRE, power: 35, accuracy: 85, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', range: 3, params: {multihit: 5, trap: true}},
FLAMETHROWER: {name: 'Flamethrower', type: Types.FIRE, power: 90, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', range: 3, params: {burnChance: 10}},
GUST: {name: 'Gust', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'SPEC', range: 2, params: {}},
HYDRO_PUMP: {name: 'Hydro Pump', type: Types.WATER, power: 110, accuracy: 80, effect: Effects.DAMAGE, pp: 5, damagetype: 'SPEC', range: 5, params: {}},
HYPER_BEAM: {name: 'Hyper Beam', type: Types.NORMAL, power: 150, accuracy: 90, effect: Effects.DAMAGE, pp: 5, damagetype: 'SPEC', range: 5, params: { recoverTurns: 1 }},
ICE_BEAM: {name: 'Ice Beam', type: Types.ICE, power: 90, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', range: 5, params: {freezeChance: 10}},
MEGA_DRAIN: {name: 'Mega Drain', type: Types.GRASS, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', range: 2, params: {absorbHPPercentage: 50}},
NIGHT_SHADE: {name: 'Night Shade', type: Types.GHOST, power: 0, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', params: {fixedDamage: "Level"}},
PETAL_DANCE: {name: 'Petal Dance', type: Types.GRASS, power: 120, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', params: {multihit: 3, afterHits: "CONFUSED"}},
PSYBEAM: {name: 'Psybeam', type: Types.PSYCHIC, power: 65, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'SPEC', range: 5, params: {confuseChance: 10}},
PSYCHIC: {name: 'Psychic', type: Types.PSYCHIC, power: 90, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', range: 2, params: {lowerChance: 33, lowerStat: Stats.SP_ATK}},
PSYWAVE: {name: 'Psywave', type: Types.PSYCHIC, power: 0, accuracy: 80, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', range: 2, params: {specialDamage: "psywave"}},
RAZOR_WIND: {name: 'Razor Wind', type: Types.NORMAL, power: 80, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', range: 2, params: {critBoost: true, buildUpTurns: 1}},
SLUDGE: {name: 'Sludge', type: Types.POISON, power: 65, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'SPEC', range: 2, params: {poisonChance: 30}},
SMOG: {name: 'Smog', type: Types.POISON, power: 30, accuracy: 70, effect: Effects.DAMAGE, pp: 20, damagetype: 'SPEC', range: 3, params: {poisonChance: 40, splashRange: 2}},
SOLAR_BEAM: {name: 'Solar Beam', type: Types.GRASS, power: 120, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', range: 5, params: {buildUpTurns: 1}},
SONIC_BOOM: {name: 'Sonic Boom', type: Types.NORMAL, power: 0, accuracy: 90, effect: Effects.DAMAGE, pp: 20, damagetype: 'SPEC', range: 2, params: {fixedDamage: 20}},
SURF: {name: 'Surf', type: Types.WATER, power: 90, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', params: {splashRange: 3}},
SWIFT: {name: 'Swift', type: Types.NORMAL, power: 60, accuracy: 100, effect: Effects.DAMAGE, pp: 20, damagetype: 'SPEC', params: {alwaysHit: true}},
THUNDER: {name: 'Thunder', type: Types.ELECTRIC, power: 110, accuracy: 70, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', range: 5, params: {paralyzeChance: 10}},
THUNDER_SHOCK: {name: 'Thunder Shock', type: Types.ELECTRIC, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 30, damagetype: 'SPEC', range: 2, params: {paralyzeChance: 10}},
THUNDERBOLT: {name: 'Thunderbolt', type: Types.ELECTRIC, power: 90, accuracy: 100, effect: Effects.DAMAGE, pp: 15, damagetype: 'SPEC', range: 4, params: {paralyzeChance: 10}},
TRI_ATTACK: {name: 'Tri Attack', type: Types.NORMAL, power: 80, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'SPEC', params: {}},
WATER_GUN: {name: 'Water Gun', type: Types.WATER, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'SPEC', params: {}},
DIG: {name: 'Dig', type: Types.GROUND, power: 80, accuracy: 100, effect: Effects.DAMAGE, pp: 10, damagetype: 'PHYS', params: {hideTurns: 1}},
FLY: {name: 'Fly', type: Types.FLYING, power: 90, accuracy: 95, effect: Effects.DAMAGE, pp: 15, damagetype: 'PHYS', params: {hideTurns: 1}},
DISABLE: {name: 'Disable', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.DISABLE_MOVE, pp: 20, damagetype: 'STAT', params: {}},
CONFUSE_RAY: {name: 'Confuse Ray', type: Types.GHOST, power: 0, accuracy: 100, effect: Effects.INFLICT_STATUS, pp: 10, damagetype: 'STAT', range: 5, params: {status: "CONFUSION"}},
GLARE: {name: 'Glare', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.INFLICT_STATUS, pp: 30, damagetype: 'STAT', range: 4, params: {status: "PARALYSIS"}},
HYPNOSIS: {name: 'Hypnosis', type: Types.PSYCHIC, power: 0, accuracy: 60, effect: Effects.INFLICT_STATUS, pp: 20, damagetype: 'STAT', range: 3, params: {status: "SLEEP"}},
LOVELY_KISS: {name: 'Lovely Kiss', type: Types.NORMAL, power: 0, accuracy: 75, effect: Effects.INFLICT_STATUS, pp: 10, damagetype: 'STAT', range: 1, params: {status: "SLEEP"}},
POISON_GAS: {name: 'Poison Gas', type: Types.POISON, power: 0, accuracy: 90, effect: Effects.INFLICT_STATUS, pp: 40, damagetype: 'STAT', range: 2, params: {status: "POISON"}},
POISON_POWDER: {name: 'Poison Powder', type: Types.POISON, power: 0, accuracy: 75, effect: Effects.INFLICT_STATUS, pp: 35, damagetype: 'STAT', range: 1, params: {status: "POISON"}},
SING: {name: 'Sing', type: Types.NORMAL, power: 0, accuracy: 55, effect: Effects.INFLICT_STATUS, pp: 15, damagetype: 'STAT', range: 5, params: {status: "SLEEP"}},
SLEEP_POWDER: {name: 'Sleep Powder', type: Types.GRASS, power: 0, accuracy: 75, effect: Effects.INFLICT_STATUS, pp: 15, damagetype: 'STAT', range: 1, params: {status: "SLEEP"}},
SPORE: {name: 'Spore', type: Types.GRASS, power: 0, accuracy: 100, effect: Effects.INFLICT_STATUS, pp: 15, damagetype: 'STAT', range: 1, params: {status: "SLEEP"}},
STUN_SPORE: {name: 'Stun Spore', type: Types.GRASS, power: 0, accuracy: 75, effect: Effects.INFLICT_STATUS, pp: 30, damagetype: 'STAT', range: 1, params: {status: "PARALYSIS"}},
SUPERSONIC: {name: 'Supersonic', type: Types.NORMAL, power: 0, accuracy: 55, effect: Effects.INFLICT_STATUS, pp: 20, damagetype: 'STAT', range: 3, params: {status: "CONFUSION"}},
THUNDER_WAVE: {name: 'Thunder Wave', type: Types.ELECTRIC, power: 0, accuracy: 90, effect: Effects.INFLICT_STATUS, pp: 20, damagetype: 'STAT', range: 3, params: {status: "PARALYSIS"}},
TOXIC: {name: 'Toxic', type: Types.POISON, power: 0, accuracy: 90, effect: Effects.INFLICT_STATUS, pp: 10, damagetype: 'STAT', range: 2, params: {status: "BAD_POISON"}},
LEECH_SEED: {name: 'Leech Seed', type: Types.GRASS, power: 0, accuracy: 90, effect: Effects.INFLICT_STATUS, pp: 10, damagetype: 'STAT', range: 2, params: {status: "SEEDED"}},
FISSURE: {name: 'Fissure', type: Types.GROUND, power: 0, accuracy: 0, effect: Effects.KO, pp: 5, damagetype: 'PHYS', params: {}},
GUILLOTINE: {name: 'Guillotine', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.KO, pp: 5, damagetype: 'PHYS', params: {}},
HORN_DRILL: {name: 'Horn Drill', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.KO, pp: 5, damagetype: 'PHYS', params: {}},
FLASH: {name: 'Flash', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 20, damagetype: 'STAT', range: 4, params: {stat: "ACC"}},
GROWL: {name: 'Growl', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 40, damagetype: 'STAT', range: 4, params: {stat: "ATK"}},
KINESIS: {name: 'Kinesis', type: Types.PSYCHIC, power: 0, accuracy: 80, effect: Effects.LOWER_STAT, pp: 15, damagetype: 'STAT', range: 3, params: {stat: "ACC"}},
LEER: {name: 'Leer', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 30, damagetype: 'STAT', range: 4, params: {stat: "DEF"}},
SAND_ATTACK: {name: 'Sand Attack', type: Types.GROUND, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 15, damagetype: 'STAT', range: 3, params: {stat: "ACC"}},
SCREECH: {name: 'Screech', type: Types.NORMAL, power: 0, accuracy: 85, effect: Effects.LOWER_STAT, pp: 40, damagetype: 'STAT', range: 4, params: {stat: "DEF", level: 2}},
SMOKESCREEN: {name: 'Smokescreen', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 20, damagetype: 'STAT', range: 3, params: {stat: "ACC"}},
STRING_SHOT: {name: 'String Shot', type: Types.BUG, power: 0, accuracy: 95, effect: Effects.LOWER_STAT, pp: 40, damagetype: 'STAT', range: 3, params: {stat: "SPD", level: 2}},
TAIL_WHIP: {name: 'Tail Whip', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 30, damagetype: 'STAT', range: 4, params: {stat: "DEF"}},
SPLASH: {name: 'Splash', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.NOTHING, pp: 40, damagetype: 'STAT', params: {}},
DOUBLE_TEAM: {name: 'Double Team', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 15, damagetype: 'SPEC', params: {stat: "EVA"}},
ACID_ARMOR: {name: 'Acid Armor', type: Types.POISON, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 20, damagetype: 'STAT', params: {stat: "DEF", level: 2}},
AGILITY: {name: 'Agility', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 30, damagetype: 'STAT', params: {stat: "SPD", level: 2}},
AMNESIA: {name: 'Amnesia', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 20, damagetype: 'STAT', params: {stat: "SP_DEF", level: 2}},
BARRIER: {name: 'Barrier', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 20, damagetype: 'STAT', params: {stat: "DEF", level: 2}},
DEFENSE_CURL: {name: 'Defense Curl', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 40, damagetype: 'STAT', params: {stat: "DEF"}},
FOCUS_ENERGY: {name: 'Focus Energy', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.SET_STATUS, pp: 30, damagetype: 'STAT', params: {status: "FOCUSED"}},
GROWTH: {name: 'Growth', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 40, damagetype: 'STAT', params: {stat: "ATK"}},
HARDEN: {name: 'Harden', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 30, damagetype: 'STAT', params: {stat: "DEF"}},
MEDITATE: {name: 'Meditate', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 40, damagetype: 'STAT', params: {stat: "ATK"}},
MINIMIZE: {name: 'Minimize', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 10, damagetype: 'STAT', params: {stat: "DEF", level: 2}},
SHARPEN: {name: 'Sharpen', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 30, damagetype: 'STAT', params: {stat: "ATK"}},
SWORDS_DANCE: {name: 'Swords Dance', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 20, damagetype: 'STAT', params: {stat: "DEF", level: 2}},
WITHDRAW: {name: 'Withdraw', type: Types.WATER, power: 0, accuracy: 0, effect: Effects.RAISE_STAT, pp: 40, damagetype: 'STAT', params: {stat: "DEF"}},
METRONOME: {name: 'Metronome', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RANDOM_MOVE, pp: 10, damagetype: 'STAT', params: {}},
RECOVER: {name: 'Recover', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RECOVER_HP, pp: 10, damagetype: 'STAT', params: {proportion: 50}},
SOFT_BOILED: {name: 'Soft-Boiled', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.RECOVER_HP, pp: 10, damagetype: 'STAT', params: {proportion: 50}},
HAZE: {name: 'Haze', type: Types.ICE, power: 0, accuracy: 0, effect: Effects.RESET_STATUS, pp: 30, damagetype: 'STAT', params: {}},
REST: {name: 'Rest', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.SET_FLAG, pp: 10, damagetype: 'STAT', params: {flag: "RESTING", turns: 2}},
BIDE: {name: 'Bide', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.SET_FLAG, pp: 10, damagetype: 'PHYS', params: {flag: "BIDE"}},
COUNTER: {name: 'Counter', type: Types.FIGHTING, power: 0, accuracy: 100, effect: Effects.SET_FLAG, pp: 20, damagetype: 'PHYS', params: {flag: "BIDE"}},
LIGHT_SCREEN: {name: 'Light Screen', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.SET_FLAG, pp: 30, damagetype: 'STAT', params: {flag: "PROTECTED_SPATK", turns: 5}},
MIST: {name: 'Mist', type: Types.ICE, power: 0, accuracy: 0, effect: Effects.SET_FLAG, pp: 30, damagetype: 'STAT', params: {flag: "STATUS_NULL", turns: 2}},
REFLECT: {name: 'Reflect', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.SET_FLAG, pp: 20, damagetype: 'STAT', params: {flag: "PROTECTED_ATK", turns: 5}},
TRANSFORM: {name: 'Transform', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.TRANSFORM, pp: 10, damagetype: 'STAT', params: {}},
TELEPORT: {name: 'Teleport', type: Types.PSYCHIC, power: 0, accuracy: 0, effect: Effects.WARP_AWAY, pp: 20, damagetype: 'STAT', params: {}},
ROAR: {name: 'Roar', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.WHIRLWIND, pp: 20, damagetype: 'STAT', params: {}},
WHIRLWIND: {name: 'Whirlwind', type: Types.NORMAL, power: 0, accuracy: 0, effect: Effects.WHIRLWIND, pp: 20, damagetype: 'STAT', params: {}}
}