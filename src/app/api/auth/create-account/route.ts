import { connectDB } from "@/libs/db";
import { UserModel } from "@/models/User";
import validator from 'validator';
import { NextRequest, NextResponse } from "next/server"
import { encryptPassword } from "@/utils/passwordEncryption";
import { generateJWToken } from "@/utils/jwtUtils";


interface SignupRequest {
    username: string;
    name: string,
    signupWith: string;
    email: string;
    phone: string;
    password: string;
}

interface validationResponse {
    isValid: boolean,
    errorMessage: string
};

const checkForValidation = (body: SignupRequest): validationResponse => {


    const { name, username, signupWith, email, phone, password } = body;

    if (!username || !signupWith || !password || !name) {
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

    if (username.trim().length < 4) {
        return {
            isValid: false,
            errorMessage: "Username has to contain atleast 4 charactors."
        }
    }

    if (password.trim().length < 6) {
        return {
            isValid: false,
            errorMessage: "Password cannot be smaller then 6 charactors."
        }
    }

    if (name.trim().length == 0) {
        return {
            isValid: false,
            errorMessage: "Name is required."
        }
    }

    return {
        isValid: true,
        errorMessage: ""
    };
}

export const POST = async (request: NextRequest) => {
    await connectDB();

    const body = await request.json() as SignupRequest;


    const validation = checkForValidation(body);

    if (!validation.isValid) {
        return NextResponse.json({
            status: "error",
            message: validation.errorMessage
        }, { status: 400 });
    }

    const hasAlreadyUserWithUsername = await UserModel.findOne({ username: body.username });
    const hasAlreadyUserWithEmailOrPhone = await UserModel.findOne(body.signupWith == "email" ? { email: body.email } : { phone: body.phone });

    if (hasAlreadyUserWithUsername) {
        return NextResponse.json({
            status: "error",
            message: "Username is already taken, please try a diffrent one."
        });
    }

    if (hasAlreadyUserWithEmailOrPhone) {
        return NextResponse.json({
            status: "error",
            message: `There's already an account with the same ${body.signupWith == "email" ? "Email" : "Phone"}, please try to login.`
        });
    }


    const encryptedPw = await encryptPassword(body.password);

    // let token = generateJWToken({
    //     username: body.username,
    // });

    const headersList = request.headers;
    const forwardedFor = headersList.get("x-forwarded-for");

    // Fallback to req.ip (only works in middleware or edge)
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "";

    // For Development - Fetch external IP if running locally
    // if (ip === "::1" || ip === "127.0.0.1") {
    //     const res = await fetch("https://api64.ipify.org?format=json");
    //     const data = await res.json();
    //     ip = data.ip; // Your public IP
    // }

    // ip = "191.96.31.132";

    // Fetch IP details from ipwhois.app
    // const response = await fetch(`https://ipwhois.app/json/${ip}`);
    // const ipData = await response.json();

    // let {
    //     continent,
    //     continent_code,
    //     country,
    //     country_code,
    //     country_flag,
    //     country_capital,
    //     country_phone,
    //     country_neighbours,
    //     region,
    //     city,
    //     latitude,
    //     longitude,
    //     asn,
    //     org,
    //     isp,
    //     timezone,
    //     timezone_name,
    //     timezone_dstOffset,
    //     timezone_gmtOffset,
    //     timezone_gmt,
    //     currency,
    //     currency_code,
    //     currency_symbol,
    //     currency_rates,
    //     currency_plural,
    // } = ipData;


    let user = null;
    try {
        user = await UserModel.create({
            username: body.username,
            password: encryptedPw,
            signupWith: body.signupWith,
            phone: body.phone,
            email: body.email,
            fullName: body.name
        });
    } catch (e) {
        console.log(e);

        return NextResponse.json({
            status: "error",
            message: "Internal Server Error, please try again."
        });
    }

    if (!user) {
        return NextResponse.json({
            status: "error",
            message: "Internal Server Error, please try again."
        });
    }

    const token = generateJWToken({
        userId: user._id.toString(),
        loginTime: Date.now()
    });


    user.loginTokens.push({
        ipAddress: ip,
        token,
    });

    await user.save();


    const res = NextResponse.json({
        status: "ok",
        message: "Account created successfully!"
    });

    res.cookies.set("token", token);

    return res;
}