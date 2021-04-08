import { request } from "./request";

export function homeMultipleData() {
  return request({
    url: "http://123.207.32.32:8000/home/multidata"
  });
}

export function homeGoodsData(type, page) {
  return request({
    url: "http://152.136.185.210:7878/api/m5/home/data",
    params: {
      type,
      page
    }
  });
}
