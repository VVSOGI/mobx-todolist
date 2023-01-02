import { todosState } from "./todos";
import { activeDeleteState } from "./activeDelete";

const useStore = () => ({ todosState, activeDeleteState });
export default useStore;
