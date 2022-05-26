import { IRobot, Robot, Type } from "./types/Robot";

const createRoboto = (type: Type): IRobot => {
  const newRoboto = new Robot(type);
  return newRoboto;
};

const Alfredo = createRoboto("Cleaner");
