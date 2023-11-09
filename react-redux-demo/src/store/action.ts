export interface IStoreAction<T> {
  type: T;
  payload: any;
}

export const createStoreAction = <T>(
  type: T,
  payload: any
): IStoreAction<T> => {
  return {
    type,
    payload
  };
};
