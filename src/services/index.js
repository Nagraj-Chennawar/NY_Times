import axios_instace from "../axios-instance";

class ApiService {
  constructor(callBack = () => {}) {
    this.callBack = callBack;
    this.api = axios_instace;
  }

  // GET request
  async get(url, params = {}) {
    try {
      const response = await this.api.get(url, { params });
      console.log("response", response);
      return { error: null, data: response.data };
    } catch (error) {
      this.callBack();
      return {
        error: "failed to get response",
        data: null,
      };
    }
  }

  // POST request
  async post(url, data) {
    try {
      const response = await this.api.post(url, data);
      return {
        error: null,
        data: response.data,
      };
    } catch (error) {
      this.callBack();
      return {
        error: "failed to get response",
        data: null,
      };
    }
  }
}

export default ApiService;
