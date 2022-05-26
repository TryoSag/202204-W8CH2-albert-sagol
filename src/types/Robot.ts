type Type = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  batteryLevel: number;
  type: Type;
  reset: () => void;
  work: () => void;
}
class Robot implements IRobot {
  batteryLevel;
  constructor(
    public name: string,
    protected type: Type,
    protected message: string
  ) {
    this.batteryLevel = 100;
  }
  reset() {}
  work() {
    console.log(this.message);
  }
}
export class Cleaner extends Robot {
  constructor(public name: string) {
    super(name, "Cleaner", "Larala larita, I clean my little house");
  }
}
export class Witer extends Robot {
  constructor(public name: string) {
    super(name, "Waiter", "Do you feel like a mini of fuet?");
  }
}
export class Developer extends Robot {
  constructor(public name: string) {
    super(
      name,
      "Developer",
      "JavaScript is cool - I develop with JavaScript -> I'm cool"
    );
  }
}
