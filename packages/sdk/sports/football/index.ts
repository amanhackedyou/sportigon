import { AxiosClient } from "@/libs/AxiosClient";
import { SportsConfig } from "../config";

export const footballClient = new AxiosClient(
    SportsConfig.football.baseURL,
    SportsConfig.football.headers
);