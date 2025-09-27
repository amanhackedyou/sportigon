import { UserModel } from "@/models/User";
import { verifyJWToken } from "@/utils/jwtUtils";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const isUserAutherized = async () => {
    // console.log(req);
    const cookies_ = await cookies();
    const tokenCookie = cookies_.get("token");

    if (!tokenCookie) return false;

    const token = tokenCookie.value;
    if (!token) return false;

    const tokenData = verifyJWToken(token);
    if (!tokenData || (typeof tokenData === "string")) return false;

    const userId = tokenData["userId"];

    if (!userId) return false;

    const isTokenAndUserExists = await findUserByIdAndToken(userId, token);

    return isTokenAndUserExists ? true : false
}


async function findUserByIdAndToken(userId: string, token: string) {
    try {
        const user = await UserModel.findOne({
            _id: userId,
            loginTokens: { $elemMatch: { token } }, // Ensure token exists in loginTokens array
        });

        return user; // Returns null if not found
    } catch (error) {
        return null;
    }
}




export async function getUserIdByCookie() {
    const cookies_ = await cookies();
    const tokenCookie = cookies_.get("token");

    if (!tokenCookie) return null;

    const token = tokenCookie.value;
    if (!token) return null;

    const tokenData = verifyJWToken(token);
    if (!tokenData || (typeof tokenData === "string")) return null;

    const userId = tokenData["userId"];

    return userId;
}


