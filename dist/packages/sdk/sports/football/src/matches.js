import { footballClient } from "..";
export const getMatches = async (params) => {
    try {
        const response = await footballClient.get("/matches", { params });
        return response.data;
    }
    catch (error) {
        return {
            statusCode: 500,
            message: "Failed to fetch matches."
        };
    }
};
export const getMatchById = async (id) => {
    try {
        const response = await footballClient.get(`/matches/${id}`);
        return response.data;
    }
    catch (error) {
        return {
            statusCode: 500,
            message: "Failed to fetch match."
        };
    }
};
//# sourceMappingURL=matches.js.map