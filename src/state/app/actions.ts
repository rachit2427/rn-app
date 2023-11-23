import { createAction } from '@src/utils/state';

export const setRandomSeedAction = createAction('@app/SET_RANDOM_SEED')();

export type AppActions = ReturnType<typeof setRandomSeedAction>;
