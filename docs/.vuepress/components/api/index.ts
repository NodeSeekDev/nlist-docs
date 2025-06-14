export const apis: Record<string, string> = {
  cf: "https://api.nn.ci",
  cn: "https://api.xhofe.top",
  de: "http://api-my-api-5hw5ou-b810d8-80-75-218-107.traefik.me",
  NodeseekDev: "https://alist-api.voidval.com"
};

if (typeof location !== "undefined") {
  if (
    location.origin.startsWith("http://localhost") ||
    location.origin.startsWith("http://127.0.0.1")
  ) {
    apis.local = "http://localhost:3002";
  }
}

export const defaultApi = "NodeseekDev";
export const api = (path?: string) => {
  let _api = "";
  if (typeof localStorage === "undefined") {
    _api = apis[defaultApi];
  } else {
    _api = apis[localStorage.getItem("api_name") || defaultApi];
  }
  if (path) {
    return _api + path;
  }
  return _api;
};
