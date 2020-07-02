import Fetch from "./fetch";
const url = "/api/todo";

const dealParam = (params: any, method: string) => {
  return Object.assign({ data: params }, { method });
};

export const $todo = {
  async getList() {
    return Fetch(`${url}`);
  },
  async add(params: any) {
    return Fetch(`${url}`, dealParam(params, "post"));
  },
  async update(params: any) {
    return Fetch(`${url}`, dealParam(params, "put"));
  },
  async delete(params: any) {
    return Fetch(`${url}`, dealParam(params, "delete"));
  },
  async query(params: any) {
    return Fetch(`${url}/query`, dealParam(params, "post"));
  },
};
