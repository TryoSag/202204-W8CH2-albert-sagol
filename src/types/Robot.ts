export type Type = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  battery: number;
  type: Type;
  reset: () => void;
  work: () => void;
}

export class Robot implements IRobot {
  battery: number;
  name: string;
  timerId: NodeJS.Timer;

  constructor(public type: Type) {
    this.reset();
  }

  reset() {
    clearInterval(this.timerId);
    this.battery = 100;
    this.name = this.generateName();
    this.lowBattery();
  }

  work() {
    if (this.battery === 0) {
      return;
    }

    let message: string;

    switch (this.type) {
      case "Cleaner":
        message = "Larala larita, I clean my little house";
        break;

      case "Waiter":
        message = "Do you feel like a mini of fuet?";
        break;

      case "Developer":
        message = "JavaScript is cool - I develop with JavaScript -> I'm cool";
        break;

      default:
        message = "";
    }
    console.log(message);
  }

  generateName(): string {
    let name: string = "";
    const chars: string = "QWERTYUIOPÑLKJHGFDSAZXCVBNM";

    for (let i = 0; i < 4; i++) {
      if (i < 2) {
        name += chars.charAt(Math.floor(Math.random() * 28));
      } else {
        name += Math.floor(Math.random() * 10);
      }
    }
    return name;
  }

  lowBattery(): void {
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
