"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
class Robot {
    constructor(type) {
        this.type = type;
        this.battery = 100;
        this.name = this.generateName();
        this.lowBattery();
    }
    reset() {
        this.battery = 100;
        this.name = this.generateName();
    }
    work() {
        if (this.battery > 0) {
            let message;
            switch (this.type) {
                case "Cleaner":
                    message = "Larala larita, I clean my little house";
                    break;
                case "Waiter":
                    message = "Do you feel like a mini of fuet?";
                    break;
                case "Developer":
                    message =
                        "JavaScript is cool - I develop with JavaScript -> I'm cool";
                    break;
                default:
                    message = "";
            }
            console.log(message);
        }
    }
    generateName() {
        let name = "";
        const chars = "QWERTYUIOPÑLKJHGFDSAZXCVBNM";
        for (let i = 0; i < 4; i++) {
            if (i < 2) {
                name += chars.charAt(Math.floor(Math.random() * 28));
            }
            else {
                name += Math.floor(Math.random() * 10);
            }
        }
        return name;
    }
    lowBattery() {
        this.timerId = setInterval(() => {
            this.battery--;
            if (this.battery === 10) {
                console.log("Low battery please charge");
            }
            if (this.battery === 0) {
                console.log("No battery the party it's over");
                clearInterval(this.timerId);
            }
        }, 1000);
    }
}
exports.Robot = Robot;
