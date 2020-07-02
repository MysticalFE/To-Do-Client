import { fetchParam, Map } from "../typings";

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
const contentTypes = {
  "application/json": "json",
  "text/html": "text",
  "Blob/File": "blob",
  FormData: "formData",
  ArrayBuffer: "arrayBuffer",
};
//fetch返回的回调也是promise对象,判断返回的content-type
function dealResponse(response: Response) {
  const contentType = response.headers.get("content-type");
  let resType = "json"; //返回的数据流格式
  for (let key in contentTypes) {
    if ((contentType as string).indexOf(key) > -1) {
      resType = (contentTypes as Map)[key];
    }
  }
  return (response as Map)[resType]().then((data: unknown) => {
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(`${response.status}---${response.statusText}`);
    }
  });
}

//timeout处理
function promiseTimeout(time: number, callback: Promise<unknown>) {
  let timer: number = 0;
  let timeout_promise = new Promise((resolve, reject) => {
    timer = window.setTimeout(() => {
      reject("请求超时");
    }, time);
  });

  Promise.race([callback, timeout_promise]).then(() => {
    window.clearTimeout(timer);
  });
}

/**
 * timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间；
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已s；
 */
function Fetch(url: string, opt: fetchParam = {}): Promise<[]> {
  const requestHeaders: HeadersInit = new Headers();
  if (!opt) opt = {};
  if (!opt.timeout) opt.timeout = 10000;
  if (url && typeof url !== "string")
    return Promise.reject("type of url must be string");
  if (
    opt.method &&
    !methods.some((m) => m === (opt.method as string).toUpperCase())
  )
    return Promise.reject("method is not legal");
  if (opt.data) {
    const qsMethod = ["POST", "PUT"];
    //post 设置headers,body
    if (qsMethod.includes((opt.method as string).toUpperCase())) {
      if (opt.data instanceof FormData) {
        requestHeaders.set("Content-Type", "multipart/form-data;");
      } else if (opt.data instanceof Object) {
        opt.body = JSON.stringify(opt.data);
        requestHeaders.set("Content-Type", "application/json");
      } else {
        requestHeaders.set(
          "Content-Type",
          "application:/x-www-form-urlencoded:charset=UTF-8"
        );
      }
      opt.headers = requestHeaders;
    } else {
      const searchParam = url.indexOf("?") > -1 ? "" : "?";
      url +=
        searchParam +
        Object.keys(opt.data)
          .map((key) => `${key}=${encodeURIComponent(opt.data[key])}`)
          .join("&");
    }
    delete opt.data;
  }

  //fetch外封装一层promise
  return new Promise((resolve, reject) => {
    let baseParams = {
      method: "get",
      mode: "cors",
      credentials: "include",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    let reqParams = Object.assign({}, baseParams, opt);
    const fetch_promise = fetch(url, reqParams)
      .then(dealResponse)
      .then((data) => {
        if (data.code) {
          resolve(data.data);
        } else {
          reject("请求出错");
        }
      });
    //设置请求超时
    promiseTimeout(opt.timeout as number, fetch_promise);
  });
}

export default Fetch;
