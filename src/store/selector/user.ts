import { selector } from "recoil";
import { token } from "../atoms/user";

export const userToken = selector({
  key: "userToken",
  get: ({ get }) => {
    const items = get(token);
    const format = `selector ${items}`;
    return format;
  },
});
