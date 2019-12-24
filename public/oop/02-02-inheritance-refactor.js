var __extend = (this && this.__extend) || function (a, b) {
    a.prototype = !b ? Object.create(null) : Object.create(b.prototype);
    a.prototype.constructor = a;
};

const Hero = (function () {
    function Hero(name, level) {
        this.name = name;
        this.level = level;
    }
    Hero.prototype.greet = function () {
        return `${this.name} says hello.`;
    }
    return Hero;
})();

const Warrior = (function (_super) {
    __extend(Warrior, _super);
    function Warrior(name, level, weapon) {
        _super.call(this, name, level);
        this.weapon = weapon;
    }
    Warrior.prototype.attack = function () {
        return `${this.name} attacks with the ${this.weapon}.`;
    }
    return Warrior;
})(Hero);

const Healer = (function (_super) {
    __extend(Healer, _super);
    function Healer(name, level, spell) {
        _super.call(this, name, level);
        this.spell = spell;
    }
    Healer.prototype.heal = function () {
        return `${this.name} casts ${this.spell}.`;
    }
    return Healer;
})(Hero)



// Initialize individual character instances
const tank = new Warrior('Bjorn', 1, 'axe');
const healer = new Healer('Kanin', 1, 'cure');