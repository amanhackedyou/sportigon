// src/libs/AxiosClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class AxiosClient {
    private client: AxiosInstance;

    constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
        this.client = axios.create({
            baseURL,
            headers: defaultHeaders,
            timeout: 10000,
        });
    }

    public get<T = any>(
        url: string,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> {
        return this.client.get<T>(url, config);
    }

    public post<T = any>(
        url: string,
        data?: any,
        headers: Record<string, string> = {}
    ): Promise<AxiosResponse<T>> {
        return this.client.post<T>(url, data, { headers });
    }

    public put<T = any>(
        url: string,
        data?: any,
        headers: Record<string, string> = {}
    ): Promise<AxiosResponse<T>> {
        return this.client.put<T>(url, data, { headers });
    }

    public patch<T = any>(
        url: string,
        data?: any,
        headers: Record<string, string> = {}
    ): Promise<AxiosResponse<T>> {
        return this.client.patch<T>(url, data, { headers });
    }

    public delete<T = any>(
        url: string,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> {
        return this.client.delete<T>(url, config);
    }
}
