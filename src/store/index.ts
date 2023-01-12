import { TodoState } from "./todo";
import { GoalsState } from "./goals";

const useStore = () => ({ GoalsState, TodoState });
export default useStore;
