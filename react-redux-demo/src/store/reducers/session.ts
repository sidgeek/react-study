import { IStoreAction } from "../action";

type StateType = string;
export type SessionActionType = "SET-SESSION";

export const sessionReducer = (
  state: StateType = "",
  action: IStoreAction<SessionActionType>
): StateType => {
  switch (action.type) {
    case "SET-SESSION":
      return action.payload as StateType;
    default:
      return state;
  }
};
