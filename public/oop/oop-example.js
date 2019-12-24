class Animal {
    constructor(voice) {
        this.voice = voice;
    }
    speak() {
        console.log(this.voice);
    }
}
class Cat extends Animal {
    constructor(name, color, voice) {
        super(voice);
        this.name = name;
        this.color = color;
    }
}
class Duck extends Animal {
    speak() {
        console.log(`Quack Quack!`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`Woof Woof`);
    }
}
/**
 * 
 * @param {Animal[]} animals 
 */
function speak(animals) {
    animals.forEach(animal => {
        animal instanceof Animal && animal.speak();
    });
}
speak([new Cat(`pisi`, `black`, `Meeeow`), new Duck(`Quack`), new Dog(`Woof`)]);