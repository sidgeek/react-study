import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";

import { createStoreAction } from "../action";
import { StoreType } from "../store";

export type StoreSelector<T> = (state: StoreType) => T;

export const useStore = <T, D extends [any] | any[]>(
  selector: StoreSelector<T>,
  dependences?: D
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mapState = useCallback(selector, dependences || []);
  return useMappedState(mapState);
};

export const useDispatchStore = <P, T = string>(type: T) => {
  const dispatch = useDispatch();
  return React.useCallback(
    (payload: P) => {
      const action = createStoreAction<T>(type, payload);
      dispatch(action);
    },
    [dispatch, type]
  );
};
