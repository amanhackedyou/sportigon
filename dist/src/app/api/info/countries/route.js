import { NextResponse } from "next/server";
import { getCountries } from "../../../../../packages/sdk/sports/football/src/countries";
export const GET = async (req, res) => {
    try {
        const { searchParams } = req.nextUrl;
        const name = searchParams.get("name") || "";
        const countries = await getCountries(name);
        return NextResponse.json(countries);
    }
    catch (error) {
        return NextResponse.json({ status: "error", msg: "Failed to fetch countries" });
    }
};
//# sourceMappingURL=route.js.map