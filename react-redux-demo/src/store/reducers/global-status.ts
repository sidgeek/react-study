import { IStoreAction } from "../action";
import { produce } from "immer";

export const enum GlobalActionType {
  UPDATE_COUNT = "UPDATE-COUNT",
  UPDATE_COUNT2 = "UPDATE-COUNT2",
  UPDATE_COUNT2_VALUE = "UPDATE_COUNT2_VALUE",
  UPDATE_COUNT2_STATUS = "UPDATE_COUNT2_STATUS",
}

export interface IComplicatedCount {
  value: number;
  status: {
    isValid: boolean;
    name: string;
  };
}
export interface IGlobalStatus {
  count: number;
  count2: IComplicatedCount;
}

const initStatus: IGlobalStatus = {
  count: 0,
  count2: {
    value: 100,
    status: {
      isValid: false,
      name: "test",
    },
  },
};

export const globalStatusReducer = produce(
  (
    draft: IGlobalStatus = initStatus,
    action: IStoreAction<GlobalActionType>
  ): IGlobalStatus => {
    switch (action.type) {
      case GlobalActionType.UPDATE_COUNT: {
        draft.count = action.payload;
        break;
      }

      case GlobalActionType.UPDATE_COUNT2: {
        draft.count2 = action.payload;
        break;
      }

      case GlobalActionType.UPDATE_COUNT2_VALUE: {
        draft.count2.value = action.payload;
        break;
      }

      case GlobalActionType.UPDATE_COUNT2_STATUS: {
        draft.count2.status.isValid = action.payload;
        break;
      }
    }

    return draft;
  }, initStatus
);
