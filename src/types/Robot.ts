type Type = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  type: Type;
  batteryLevel: number;
  reset: () => void;
  work: () => void;
}

class Robot implements IRobot {
  batteryLevel;
  constructor(public name: string, public type: Type, private message: string) {
    this.batteryLevel = 100;
  }
  reset() {}
  work() {
    console.log(this.message);
  }
}
export default Robot;
