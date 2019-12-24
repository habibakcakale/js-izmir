// Initialize constructor functions
class Hero {
    #private;
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    greet() {
        return `${this.name} says hello.`;
    }
    static compare(hero1, hero2) {
        return hero1.level - hero2.level;
    }
}
class Warrior extends Hero {
    _weapon;
    constructor(name, level, weapon) {
        super(name, level);
        this._weapon = weapon;
    }
    attack() {
        return `${this.name} attacks with the ${this.weapon}.`;
    }
    get weapon() { return this._weapon; }
    set weapon(value) { this._weapon = value }
}
class Healer extends Hero {
    constructor(name, level, spell) {
        super(name, level);
        this.spell = spell;
    }
    heal() {
        return `${this.name} casts ${this.spell}.`;
    }
}



// Initialize individual character instances
const tank = new Warrior('Bjorn', 1, 'axe');
const healer = new Healer('Kanin', 1, 'cure');