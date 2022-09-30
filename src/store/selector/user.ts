import { selector } from "recoil";
import { token } from "../atoms/user";

export const userToken = selector({
  key: "userToken",
  get: ({ get }) => {
    const _token = get(token);
    const format = `selector ${_token}`;
    return format;
  },
});
