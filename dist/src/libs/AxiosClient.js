// src/libs/AxiosClient.ts
import axios from "axios";
export class AxiosClient {
    client;
    constructor(baseURL, defaultHeaders = {}) {
        this.client = axios.create({
            baseURL,
            headers: defaultHeaders,
            timeout: 10000,
        });
    }
    get(url, config = {}) {
        return this.client.get(url, config);
    }
    post(url, data, headers = {}) {
        return this.client.post(url, data, { headers });
    }
    put(url, data, headers = {}) {
        return this.client.put(url, data, { headers });
    }
    patch(url, data, headers = {}) {
        return this.client.patch(url, data, { headers });
    }
    delete(url, config = {}) {
        return this.client.delete(url, config);
    }
}
//# sourceMappingURL=AxiosClient.js.map