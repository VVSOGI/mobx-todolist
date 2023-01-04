import { TodoState } from "./todo";
import { todosState } from "./todos";

const useStore = () => ({ todosState, TodoState });
export default useStore;
