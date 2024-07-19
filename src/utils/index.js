import { CONTROLLER } from "../config/end-points";
export const changePeriod = (period = 1) => {
  return CONTROLLER.MOST_POPULAR.replace(/{_period_}/, `${period}`);
};
