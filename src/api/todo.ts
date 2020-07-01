import Fetch from "./fetch";
import { fetchParam } from "../typings";
const url = "/api/todo";

const dealParam = (params: fetchParam, method: string) => {
  return Object.assign(params, {
    method,
  });
};

export const $todo = {
  async getList() {
    return Fetch(`${url}`);
  },
  async add(params: fetchParam) {
    return Fetch(`${url}`, dealParam(params, "post"));
  },
  async update(params: fetchParam) {
    return Fetch(`${url}`, dealParam(params, "put"));
  },
  async delete(params: fetchParam) {
    return Fetch(`${url}`, dealParam(params, "delete"));
  },
};
