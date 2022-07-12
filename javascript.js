var races = [
	'Aarakocra: Dexterity +2, Wisdom +1, Medium, Walk 25, Fly 50 (no medium or heavy armor), Common, Aarakocra, Auran, <a href = "http://dnd5e.wikidot.com/aarakocra" target="_blank">Link</a>',
	'Aasimar: Charisma +2, Medium, Walk 30, Common, Celestial, Resistant to necrotic & radiant damage. Light cantrip. <a href = "http://dnd5e.wikidot.com/aasimar" target="_blank">Link</a>',
	'Bugbear: Strength +2, Dexterity +1, Medium, Walk 30, Darkvision 60, Powerful Build, Common, Goblin, Proficient in Stealth, Surprise Attack.<a href = "http://dnd5e.wikidot.com/bugbear" target="_blank">Link</a>',
	'Centaur: Strength +2, Wisdom +1, Medium, Walk 40, Charge, Hooves as weapon, Equine build, Survival, Hybrid Nature, Common, Sylvan, <a href = "http://dnd5e.wikidot.com/centaur" target="_blank">Link</a> ',
	'Changeling: Charisma +2,Any Ability +1, Walk 30, Medium 2 Skills of Choice from Deception, Insight, Intimidation, Persuasion, Change Appearance, Common, 2 other languages, <a href = "http://dnd5e.wikidot.com/changeling" target="_blank">Link</a> ',
	'Dragonborn: Strength +,2 Charisma +1, Medium, Walk 30,	Breath Weapon, Common, Draconic Damage resistance of dragon ancestor type, <a href = "http://dnd5e.wikidot.com/dragonborn" target="_blank">Link</a>',
	'Dwarf: Constitution +2, Medium, Walk 25, Darkvision 60, Common, Dwarvish Advantage and resistance against Poison damage',
	'Elf: Dexterity +2, Medium,	Walk 30, Darkvision 60, Common, Elvish, Proficient with Perception',
	'Firbolg: Wisdom +2, Strength +1, Medium, Walk 30, Detect Magic or disguise self 1/r. and Powerful Build. Common, Elvish, Giant, Limited communication with beasts and plants. <a href = "http://dnd5e.wikidot.com/firbolg" target="_blank">Link</a>',
	'Genasi: Constitution +2, Medium, Walk 30, Common, Primordial, <a href = "http://dnd5e.wikidot.com/genasi" target="_blank">Link</a>',
	'Gith: Intelligence +1, Medium,	Walk 30, Common, Gith, <a href = "http://dnd5e.wikidot.com/gith" target="_blank">Link</a>',
	'Gnome: Intelligence +2, Small,	Walk 25, Common, Gnomish, Advantage on all saves against magic, <a href = "http://dnd5e.wikidot.com/gnome" target="_blank">Link</a>',
	'Goblin: Dexterity +2, Constitution +1, Small,	Walk 30, Darkvision 60, Common, Goblin Proficient in Stealth, Surprise Attack. <a href = "http://dnd5e.wikidot.com/goblin" target="_blank">Link</a>',
	'Goliath: Strength +2, Constitution +1, Medium,	Walk 30	Powerful Build Common, Giant Shrug off some damage, proficiency in Athletics, <a href = "http://dnd5e.wikidot.com/goliath" target="_blank">Link</a>',
	'Grung: Dexterity +2, Constitution +1, Small, Poison Immunity, Poisonous Skin, Standing Leap, Secrete Poison, Water Dependency, Common, Grung, <a href = "http://dnd5e.wikidot.com/grung" target="_blank">Link</a>',
	'Half-Elf: Charisma +2, 2 abilities of Choice +1, Medium	Walk 30, Darkvision 60, Common, Elvish, 1 Language of choice, Proficiency with 2 skills of choice, PH 39',
	'Half-Orc: Strength +2, Constitution +1, Medium,	Walk 30, Darkvision 60, Common, Orc, Proficiency in Intimidation, Relentless Endurance, Savage Attacks, <a href = "http://dnd5e.wikidot.com/half-orc" target="_blank">Link</a>',
	'Halfling: Dexterity +2, Small,	Walk 25, Common, Halfling Reroll 1s, PHB 28',
	'Hobgoblin: Constitution +2, Intelligence +1, Medium, Walk 30, Darkvision 60, Common, Goblin, Proficient with 2 martial weapons and light armor, VOLO 119',
	'Human: All Abilities +1, Medium, Walk 30, Common, 1 Language of choice	PHB 31',
	'Human: Two Abilities +1, Medium, Walk 30, Choose a feat and Choose a skill to gain proficiency with, Common, 1 Language of choice, PHB 31',
	'Kalashtar: Wisdom +2, Charisma +1, Medium, Walk 30, Dual Mind, Mental Discipline, Mind Link, Psychic Glamour, Severed from Dreams, 1 Language of choice, Common, Quori, <a href = "http://dnd5e.wikidot.com/kalashtar" target="_blank">Link</a> ',
	'Kenku: Dexterity +2, Wisdom +1, Strength -2, Medium, Walk 30, Common, Auran, Speak only using Mimicry, Proficiency in 2 of: Acrobatics, Deception, Stealth, Sleight of Hand, <a href = "http://dnd5e.wikidot.com/kenku" target="_blank">Link</a>',
	'Kobold: Dexterity +2, Medium, Walk 30, Darkvision 60, Common, Draconic, Pack Tactics, Sunlight Sensitivity, <a href = "http://dnd5e.wikidot.com/kobold" target="_blank">Link</a>',
	'Leonin: Constitution +2, Strength +1, Medium, Walk 35, Darkvision, Claws as weapons, Hunters Instincts, Daunting Roar, Common, Leonin, <a href = "http://dnd5e.wikidot.com/leonin" target="_blank">Link</a> ',
	'Lizardfolk: Constitution +2, Wisdom +1 Medium	Walk 30, Swim 30, Bite and Hold breath, Common, Draconic, Proficiency in 2 of: Animal Handling, Nature, Perception, Stealth, Survival, <a href = "http://dnd5e.wikidot.com/lizardfolk" target="_blank">Link</a>',
	'Loxodon: Constitution +2, Wisdom +1, Medium, Powerful Build, Walk 30, Loxodon Serenity, Natural Armor, Trunk, Keen Smell, Common, Loxodon, <a href = "http://dnd5ed.wikidot.com/loxodon" target="_blank">Link</a> ',
	'Minotaur: Strength +2, Constitution +1, Walk 30, Horns as weapon, Goring Rush, Hammering Horns, Menacing, Hybrid Nature, Common, Minotaur, <a href = "http://dnd5e.wikidot.com/minotaur" target="_blank">Link</a>',
	'Orc: Strength +2, Constitution +1, Intelligence -2, Medium	Walk 30, Darkvision 60 and Powerful Build, Common, Orc, Proficient in Intimidation, <a href = "http://dnd5e.wikidot.com/orc" target="_blank">Link</a>',
	'Satyr: Charisma +2, Dexterity +1, Walk 35, Fey, Ram as Weapon, Magical Resistance, Mirthful Leaps, Reveler, Common, Sylvan, <a href = "https://www.skullsplitterdice.com/blogs/dnd/satyr-5e" target="_blank">Link</a> ',
	'Shifter: Dexterity +1, Medium, Walk 30, Darkvision, Keen senses (prof in Perception), Shifting, Common, Quori, Any 1 Language, <a href = "http://dnd5e.wikidot.com/shifter" target="_blank">Link</a> ',
	'Simic Hybrid: Constitution +2, Any +1, Medium, Walk 30, Darkvision, Animal Enhancements your choice of Nimble Climber, Underwater Adaptation, Manta Glide, Common, Elven or Vedalken, <a href = "http://dnd5e.wikidot.com/simic-hybrid" target="_blank">Link</a>',
	'Tabaxi: Dexterity +2, Charisma +1, Medium	Walk 30, Climb 20, Darkvision 60 and Claws, Common, 1 Language of choice, Proficiency in Perception and Stealth, <a href = "http://dnd5e.wikidot.com/tabaxi" target="_blank">Link</a>',
	'Tiefling: Charisma +2, Medium	Walk 30, Darkvision 60, Common, Infernal, <a href = "http://dnd5e.wikidot.com/tiefling" target="_blank">Link</a>',
	'Tortle: Strength +2, Wisdom +1, Medium, Walk 30, Claws as weapon, Hold Breath, Natural Armor, Shell Defense, Survival, Common, Aquan, <a href = "http://dnd5e.wikidot.com/tortle" target="_blank">Link</a> ',
	'Triton: Strength +1, Constitution +1, Charisma +1, Medium	Walk 30, Swim 30, Amphibious, Common, Primordial VOLO 117',
	'Vedalken: Intelligence +2, Wisdom +1, Medium, Walk 30, Vedalken Cunning, Aether Lore, Common, Vedalken, <a href = "http://dnd5e.wikidot.com/vedalken-kaladesh" target="_blank">Link</a> ',
	'Warforged: Constitution +2, Any +1, Medium, Walk 30, Constructed Resilience, Sentrys Rest, Integrated Protection, Any 1 skill and tool of Choice, Common, Any 1 Language, <a href = "http://dnd5e.wikidot.com/warforged" target="_blank">Link</a> ',
	'Yuan-Ti Pureblood: Charisma +2, Intelligence +1, Medium, Walk 30, Darkvision 60, Poison immunity, and Magic Resistance, Common, Abyssal, Draconic, Poison spray and animal friendship (snakes only) cantrips, suggestion 1/lr, <a href = "http://dnd5e.wikidot.com/yuan-ti" target="_blank">Link</a>',
 ]
var Aasimar = [
	'Protector:	Wisdom +1, Flying 30 when Radiant Soul Transform to sprout wings for 1 minute and Deal extra radiant damage equal to level',
	'Scourge: Constitution +1, Transform to unleash searing light to damage yourself for 1 minute and all around you 1/2 level, and Deal extra radiant damage equal to level',
	'Fallen: Strength +2, Transform to frighten those around you and Deal extra necrotic damage equal to level',
]
var Dwarf = [
	'Gray Dwarf: (Druergar) Strength +1, Darkvision 120 and Sunlight Sensitivity Undercommon, Duergar Resilience, Enlarge, invisibility once per long rest',
	'Hill Dwarf: Wisdom +1,  Dwarven Toughness. Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
	'Mountain Dwarf: Strength +1,  Dwarven Armor Training. You have proficiency with light and medium armor.',
]
var Elf = [
	'Drow: (Dark Elf) Charisma +1, Darkvision 120 and Sunlight Sensitivity',
	'Eladrin: Charisma +1, Seasonally changing personality traits and flaws, 30ft teleportation 1 / rest with seasonal effect MTOF 61',
	'High Elf: Intelligence +1, 1 language of choice	',
	'Sea Elf: Constitution +1, Swimming 30 Amphibian Aquan Proficiency with spear, trident, light crossbow, and net.',
	'Shadar-kai: Constitution +1, Cantrip of choice from chill touch, spare the dying, or thaumaturgy. Teleport 15 ft 1/rest. MTOF 62',
	'Wood Elf: Wisdom +1, Walking 35, Hide behind anything natural PHB 24',	
]
var Genasi = [
	'Air Genasi: Dexterity +1, Levitation once per long rest',
	'Earth Genasi: Strength +1, Pass without trace once per long rest',
	'Fire Genasi: Intelligence +1, Darkvision 60 and Fire Resistance Produce flame, burning hands once per long rest',
	'Water Genasi: Wisdom +1, Swim 30, Acid Resistance and Amphibious Shape water cantrip, create or destroy water once per long rest',
]
var Gith = [
	'Githyanki: Strength +2, 1 language of choice Proficient in 1 skill or tool of choice, proficient in light and medium armor. Mage hand cantrip. Jump and misty step once per long rest',
	'Githzerai: Wisdom +2, +1 to AC in light armor or unarmored with no shield. Mage hand cantrip. shield and detect thoughts once per long rest',
]
var Gnome = [
	'Forest Gnome: Dexterity +1, minor illusion cantrip, speak with animals PHB 37',
	'Rock Gnome: Constitution +1, Expertise on artificer like History checks, Tinkers tools, can craft a tiny device PHB 37',
	'Deep Gnome (Svirfneblin): Dexterity +1, Darkvision 120, Undercommon, Advantage on Stealth in rocky terrain, SCAG 115',
]
var Halfling = [
	'Ghostwise Halfling: Wisdom +1, Telepathy, SCAG 110',
	'Lightfoot Halfling: Charisma +1, Hide behind Medium or larger creatures, PHB 28',
	'Stout Halfling: Constitution +1, Advantage and resistance against Poison damage, PHB 28',
]
var HalfElf = [
	'Half-Drow: Choice of Drow Magic or the elf trait Keen Senses in place of Skill Versatility, SCAG 116',
	'Aquatic Half-Elf: Swim 30, Choice of elf trait Keen Senses in place of Skill Versatility, SCAG 116',
	'High Half-Elf: Choice of High Elf’s Elf Weapon Training or Cantrip, or the elf trait Keen Senses in place of Skill Versatility, SCAG 116',
	'Wood Half-Elf: Choice of Wood Elf’s Elf Weapon Training, Fleet of Foot, or Mask of the Wild; or the elf trait Keen Senses in place of Skill Versatility, SCAG 116',
]
var Shifter = [
	'Beasthide: Constitution +2, Athletics, Shifting Feature',
	'Longtooth: Strength +2, Intimidation, Fierce, Shifting Feature',
	'Swiftstride: Dexterity +1, Charisma +1, Acrobatics, Move 35, Shifting Feature',
	'Wildhunt: Wisdom +2, Survival, Mark the Scent, Shifting Feature',
]





var classes = [
	'Artificer: <a href = "http://dnd5e.wikidot.com/artificer" target="_blank">LINK</a>',
	'Barbarian: <a href = "http://dnd5e.wikidot.com/barbarian" target="_blank">LINK</a> ',
	'Bard: <a href = "http://dnd5e.wikidot.com/bard" target="_blank">LINK</a> ',
	'Blood Hunter: <a href = "http://dnd5e.wikidot.com/blood-hunter" target="_blank">LINK</a> ',
	'Cleric: <a href = "http://dnd5e.wikidot.com/cleric" target="_blank">LINK</a> ',
	'Druid: <a href = "http://dnd5e.wikidot.com/druid" target="_blank">LINK</a> ',
	'Fighter: <a href = "http://dnd5e.wikidot.com/fighter" target="_blank">LINK</a> ',
	'Gunslinger: <a href = "https://www.dndbeyond.com/subclasses/gunslinger" target="_blank">LINK</a> ',
	'Monk: <a href = "http://dnd5e.wikidot.com/monk" target="_blank">LINK</a> ',
	'Paladin: <a href = "http://dnd5e.wikidot.com/paladin" target="_blank">LINK</a> ',
	'Ranger: <a href = "http://dnd5e.wikidot.com/ranger" target="_blank">LINK</a> ',
	'Rogue: <a href = "http://dnd5e.wikidot.com/rogue" target="_blank">LINK</a> ',
	'Sorcerer: <a href = "http://dnd5e.wikidot.com/sorcerer" target="_blank">LINK</a> ',
	'Warlock: <a href = "http://dnd5e.wikidot.com/warlock" target="_blank">LINK</a> ',
	'Wizard: <a href = "http://dnd5e.wikidot.com/wizard" target="_blank">LINK</a> ',
	'Rune Scribe: <a href = "http://dnd5e.wikidot.com/rune-scribe" target="_blank">LINK</a> ',
]

var backgrounds = [
	'Acolyte: Any Languages x2,	PHB	127, Insight (WIS), Religion (INT)',
	'Anthropologist: Any Languages x2, ToA 191, Insight (WIS), Religion (INT)',
	'Archaeologist: Any Languages x1	ToA	192	Choose 1: cartographers tools, navigators tools	History (INT), Survival (WIS)',
	'Charlatan: Languages None	PHB	128	Disguise kit, forgery kit	Deception (CHA), sleight of hand (DEX)',
	'City Watch: Any Languages x2	SCAG	145	None	Athletics (STR), insight (WIS)',
	'Clan Crafter: Any Languages x1	SCAG	145	Artisans tools x1	History (INT), insight (WIS)',
	'Cloistered Scholar: Any x2 Languages	SCAG	146	None	History (INT), and choose 1: arcana (INT), nature (INT), religion (INT)',
	'Courtier: Any Languages x2, SCAG 146, Insight (WIS), persuasion (CHA)',
	'Criminal: Languages None	PHB	129	Gaming set x1, thieves tools	Deception (CHA), stealth (DEX)',
	'Entertainer: Languages None	PHB	130	Disguise kit, musical instrument x1	Acrobatics (DEX), performance (CHA)',
	'Faceless: deception, intimidate, disguise kit, 1 language',
	'Faction Agent: Any Languages x2	SCAG	147	None	Insight (WIS), and choose 1: special (See page)',
	'Far Traveler: Any Languages x1, SCAG 148, Choose 1: musical instrument x1, gaming set x1,	Insight (WIS), perception (WIS)',
	'Folk Hero: Languages None	PHB	131	Artisans tools x1, vehicles (land)	Animal handling (WIS), survival (WIS)',
	'Gladiator: Languages None	PHB	130	Disguise kit, unusual weapon x1	Acrobatics (DEX), performance (CHA)',
	'Guild Artisan: Any Languages x1, PHB 132, Artisans tools x1, Insight (WIS), persuasion (CHA)',
	'Guild Merchant: Any Languages x1, PHB	132, Navigators tools,	Insight (WIS), persuasion (CHA)',
	'Haunted One: Exotic Languages x1	CoS	209	None	Choose 2: Arcana (INT), investigation (INT), religion (INT), survival (WIS)',
	'House Agent: Investigation, Persuasion, two tool proficiencies from list ',
	'Hermit: Any Languages x1	PHB	134	Herbalism kit	Medicine (WIS), religion (INT)',
	'Inheritor: Languages None	SCAG	150	Gaming set x1, musical instrument x1	Survival (WIS), and choose 1: arcana (INT), history (INT), religion (INT)',
	'Investigator: Any Languages x2	SCAG	145	None	Insight (WIS), investigation (INT)',
	'Knight: Any Languages x1	PHB	135	Gaming set x1	History (INT), persuasion (CHA)',
	'Knight of the Order: Any Languages x1	SCAG	151	Choose 1: gaming set x1, musical instrument x1	Persuasion (CHA), and choose 1: special (See page)',
	'Marine: athletics, survival, tool proficiency land and water vehicle, ',
	'Mercenary Veteran: Languages None	SCAG	152	Gaming set x1, vehicles (land)	Athletics (STR), persuasion (CHA)',
	'Noble: Any Languages x1	PHB	135	Gaming set x1	History (INT), persuasion (CHA)',
	'Outlander: Any Languages x1	PHB	136	Musical instrument x1	Athletics (STR), survival (WIS)',
	'Pirate: Languages None	PHB	139	Navigators tools, vehicles (water)	Athletics (STR), perception (WIS)',
	'Sage: Any Languages x2	PHB	137	None	Arcana (INT), history (INT)',
	'Sailor: Languages None	PHB	139	Navigators tools, vehicles (water)	Athletics (STR), perception (WIS)',
	'Soldier: Languages None, PHB	140, Gaming set x1, vehicles (land), Athletics (STR), intimidation (CHA)',
	'Spy: Languages None	PHB	129	Gaming set x1, thieves tools	Deception (CHA), stealth (DEX)',
	'Urban Bounty Hunter: Languages None	SCAG	153	Choose 2: gaming set x1,musical instrument x1 , thieves tools	Choose 2: deception (CHA), insight (WIS), persuasion (CHA), stealth (DEX)',
	'Urchin: Languages None, PHB 141, Disguise kit, thieves tools, Sleight of hand (DEX), stealth (DEX)',
	'Uthgardt Tribe Member: Any Languages x1	SCAG	153	Choose 1: artisans tools x1, musical instrument x1	Athletics (STR), survival (WIS)',
	'Waterdhavian Noble: Any Languages x1	SCAG	154	Choose 1: gaming set x1, musical instrument x1	History (INT), persuasion (CHA)',
]

var randomImage = new Array();

randomImage[0] = "pic/aarakocra.jpg";
randomImage[1] = "pic/aasimar.jpg";
randomImage[2] = "pic/bugbear.jpg";
randomImage[3] = "pic/centaur.jpg";
randomImage[4] = "pic/changeling.jpg";
randomImage[5] = "pic/dragonborn.jpg";
randomImage[6] = "pic/dwarf.jpg";
randomImage[7] = "pic/elf.jpg";
randomImage[8] = "pic/firbolg.jpg";
randomImage[9] = "pic/genasi.jpg";
randomImage[10] = "pic/gith.jpg";
randomImage[11] = "pic/gnome.jpg";
randomImage[12] = "pic/goblin.jpg";
randomImage[13] = "pic/goliath.jpg";
randomImage[14] = "pic/grung.jpg";
randomImage[15] = "pic/half-elf.jpg";
randomImage[16] = "pic/half-orc.jpg";
randomImage[17] = "pic/halfling.jpg";
randomImage[18] = "pic/hobgoblin.jpg";
randomImage[19] = "pic/human.jpg";
randomImage[20] = "pic/human2.jpg";
randomImage[21] = "pic/kalashtar.jpg";
randomImage[22] = "pic/kenku.jpg";
randomImage[23] = "pic/kobold.jpg";
randomImage[24] = "pic/leonin.jpg";
randomImage[25] = "pic/lizardfolk.jpg";
randomImage[26] = "pic/loxodon.jpg";
randomImage[27] = "pic/minotaur.jpg";
randomImage[28] = "pic/orc.jpg";
randomImage[29] = "pic/satyr.jpg";
randomImage[30] = "pic/shifter.jpg";
randomImage[31] = "pic/simic.jpg";
randomImage[32] = "pic/tabaxi.jpg";
randomImage[33] = "pic/tiefling.jpg";
randomImage[34] = "pic/tortle.jpg";
randomImage[35] = "pic/triton.jpg";
randomImage[36] = "pic/vedalken.jpg";
randomImage[37] = "pic/warforged.jpg";
randomImage[38] = "pic/yuan-ti.jpg";

	
  
 
 
 
 function newRace() {
	var randomNumber = Math.floor(Math.random() * (races.length));
	document.getElementById('subRaceDisplay').innerHTML = "";
	document.getElementById('raceDisplay').innerHTML = races[randomNumber];
	document.getElementById('imageDisplay').innerHTML = ('<img src="'+randomImage[randomNumber]+'" />');
	if ([randomNumber] == 1) {
			var randomNumber = Math.floor(Math.random() * (Aasimar.length));
			document.getElementById('subRaceDisplay').innerHTML = Aasimar[randomNumber]};
	if ([randomNumber] == 6) {
			var randomNumber = Math.floor(Math.random() * (Dwarf.length));
			document.getElementById('subRaceDisplay').innerHTML = Dwarf[randomNumber]};
	if ([randomNumber] == 7) {
			var randomNumber = Math.floor(Math.random() * (Elf.length));
			document.getElementById('subRaceDisplay').innerHTML = Elf[randomNumber]};
	if ([randomNumber] == 9) {
			var randomNumber = Math.floor(Math.random() * (Genasi.length));
			document.getElementById('subRaceDisplay').innerHTML = Genasi[randomNumber]};
	if ([randomNumber] == 10) {
			var randomNumber = Math.floor(Math.random() * (Gith.length));
			document.getElementById('subRaceDisplay').innerHTML = Gith[randomNumber]};
	if ([randomNumber] == 11) {
			var randomNumber = Math.floor(Math.random() * (Gnome.length));
			document.getElementById('subRaceDisplay').innerHTML = Gnome[randomNumber]};
	if ([randomNumber] == 17) {
			var randomNumber = Math.floor(Math.random() * (Halfling.length));
			document.getElementById('subRaceDisplay').innerHTML = Halfling[randomNumber]};
	if ([randomNumber] == 15) {
			var randomNumber = Math.floor(Math.random() * (HalfElf.length));
			document.getElementById('subRaceDisplay').innerHTML = HalfElf[randomNumber]};
	if ([randomNumber] == 34) {
			var randomNumber = Math.floor(Math.random() * (Shifter.length));
			document.getElementById('subRaceDisplay').innerHTML = Shifter[randomNumber]};
 }
 function newClass() {
	var randomNumber = Math.floor(Math.random() * (classes.length));
	document.getElementById('classDisplay').innerHTML = classes[randomNumber];
 }
 function newBackground() {
	var randomNumber = Math.floor(Math.random() * (backgrounds.length));
	document.getElementById('backgroundDisplay').innerHTML = backgrounds[randomNumber];
 }
