export const createAction =
  <T extends string>(type: T) =>
  <P>() =>
  (payload?: P) => ({ type, payload });

export const getType = <T extends string>(
  action: ReturnType<ReturnType<typeof createAction<T>>>,
): T => action().type;
