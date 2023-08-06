import { getItem, setItem } from "./local-storage";

const uniqueId = () => (Math.random() + 1).toString(36).substring(7);

export { getItem, setItem, uniqueId };
