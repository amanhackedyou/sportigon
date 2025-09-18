import { footballClient } from "..";

export const getCountries = async (name = "") => {
    try {
        const response = await footballClient.get(`/countries?name=${name}`);
        return response.data;
    } catch (error) {
        return {
            statusCode: 500,
            message: "Failed to fetch countries."
        }
    }
}