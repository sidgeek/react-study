import { SessionActionType } from "../reducers/session";
import { useDispatchStore, useStore } from "./use-store";

export const useSession = () => {
  return useStore(state => state.session);
};

export const useDispatchSetSession = () =>
  useDispatchStore<string, SessionActionType>("SET-SESSION");
