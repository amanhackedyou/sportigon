import { connectDB } from "@/libs/db";
import { UserModel } from "@/models/User";
import { generateJWToken } from "@/utils/jwtUtils";
import { verifyPassword } from "@/utils/passwordEncryption";
import { NextRequest, NextResponse } from "next/server"
import validator from 'validator';


interface LoginRequest {
    signupWith: string;
    email: string;
    phone: string;
    password: string;
}

interface validationResponse {
    isValid: boolean,
    errorMessage: string
};



const checkForValidation = (body: LoginRequest): validationResponse => {


    const { signupWith, email, phone, password } = body;

    if (!signupWith || !password) {
        return {
            isValid: false,
            errorMessage: "Missing params, please provide all the details."
        }
    }

    if (signupWith === "email" && !validator.isEmail(email)) {
        return {
            isValid: false,
            errorMessage: "Invalid email, please enter a valid email."
        }
    }

    if (signupWith === "phone" && phone.length < 7) {
        return {
            isValid: false,
            errorMessage: "Invalid phone number, please enter a valid phone number."
        }
    }

    if (password.trim().length < 6) {
        return {
            isValid: false,
            errorMessage: "Password cannot be smaller then 6 charactors."
        }
    }

    return {
        isValid: true,
        errorMessage: ""
    };
}


export const POST = async (request: NextRequest) => {
    await connectDB();


    const body = await request.json() as LoginRequest;


    const validation = checkForValidation(body);

    if (!validation.isValid) {
        return NextResponse.json({
            status: "error",
            message: validation.errorMessage
        }, { status: 400 });
    }


    const user = await UserModel.findOne(body.signupWith == "email" ? { email: body.email } : { phone: body.phone });

    if (!user) {
        return NextResponse.json({
            status: "error",
            // message: `Account doesn't exist with the provided ${body.signupWith == "email" ? "Email" : "Phone"}, please provide valid details.`
            message: `We couldn’t find an account associated with this ${body.signupWith == "email" ? "email" : "phone"}. Please ensure the details are correct and try again.`
        });
    }

    const isPasswordCorrect = await verifyPassword(body.password, user["password"]);

    if (!isPasswordCorrect) {
        return NextResponse.json({
            status: "error",
            message: "Incorrect password. Please double-check and try again."
        }, {
            status: 401
        });
    }

    const headersList = request.headers;
    const forwardedFor = headersList.get("x-forwarded-for");

    // Fallback to req.ip (only works in middleware or edge)
    let ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "Unknown";

    // For Development - Fetch external IP if running locally
    if (ip === "::1" || ip === "127.0.0.1") {
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        ip = data.ip; // Your public IP
    }

    // ip = "191.96.31.132";

    // Fetch IP details from ipwhois.app
    const response = await fetch(`https://ipwhois.app/json/${ip}`);
    const ipData = await response.json();

    const {
        continent,
        continent_code,
        country,
        country_code,
        country_flag,
        country_capital,
        country_phone,
        country_neighbours,
        region,
        city,
        latitude,
        longitude,
        asn,
        org,
        isp,
        timezone,
        timezone_name,
        timezone_dstOffset,
        timezone_gmtOffset,
        timezone_gmt,
        currency,
        currency_code,
        currency_symbol,
        currency_rates,
        currency_plural,
    } = ipData;


    const token = generateJWToken({
        userId: user._id.toString(),
        loginTime: Date.now()
    });


    user.loginTokens.push({
        ipAddress: ip,
        token,
        continent,
        continent_code,
        country,
        country_code,
        country_flag,
        country_capital,
        country_phone,
        country_neighbours,
        region,
        city,
        latitude,
        longitude,
        asn,
        org,
        isp,
        timezone,
        timezone_name,
        timezone_dstOffset,
        timezone_gmtOffset,
        timezone_gmt,
        currency,
        currency_code,
        currency_symbol,
        currency_rates,
        currency_plural,
    });

    user.lastLogin = Date.now();

    await user.save();

    const res = NextResponse.json({
        status: "ok",
        message: "Logged in successfully!"
    });

    res.cookies.set("token", token);

    return res;
}