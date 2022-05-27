import { Robot, Type } from "./types/Robot";

const createRoboto = (type: Type): Robot => {
  const newRoboto = new Robot(type);
  return newRoboto;
};

const Alfredo = createRoboto("Cleaner");
