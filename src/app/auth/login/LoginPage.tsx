"use client";
import BigButton from "@/components/BigButton";
import LoadingPage from "@/components/LoadingPage";
import SvgImage from "@/components/SvgImage";
import { userConfig } from "@/config/user.config";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { HttpManager } from "@/libs/http_manager";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import validator from "validator";

const LoginPage = () => {
    const router = useRouter();
    const { showModal } = useModal();
    const { reloadUser } = useAuth();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const [isLogging, setIsLogging] = useState(false);


    const validateForm = () => {
        const isEmailValid = validator.isEmail(Email.trim());
        const isPasswordValid = Password.trim().length >= userConfig.minPasswordLength &&
            Password.trim().length <= userConfig.maxPasswordLength;
        return isEmailValid && isPasswordValid;
    }


    const handleLogin = async () => {
        setIsLogging(true);
        try {
            const response = await HttpManager.post('/api/auth/login', {
                email: Email.trim(),
                password: Password.trim(),
                signupWith: "email"
            });

            if (response.status === 'ok') {
                reloadUser();
                router.push('/')

            } else {

                showModal({
                    type: 'error',
                    title: 'Login Failed',
                    description: response.message || 'An error occurred during login. Please try again.',
                });
            }
        } catch (error) {
            showModal({
                type: 'error',
                title: 'Login Error',
                description: 'An unexpected error occurred. Please check your internet connection and try again.',
            });
        } finally {
            setIsLogging(false);
        }
    }

    return (
        <form onSubmit={e => e.preventDefault()} className={`flex-col h-screen w-full px-5 justify-center gap-2 flex`}>
            <button
                onClick={(e) => router.back()}
                className="bg-gray-100 border border-gray-300 rounded-full p-1 cursor-pointer hover:scale-125 transition absolute text-3xl top-5 right-5"
            >
                <IoCloseOutline />
            </button>

            <div className="w-full flex justify-center mb-8">
                <img className="w-1/2" src="/icons/logo_green.svg" alt="Logo" />
            </div>

            <h2 className="font-bold text-2xl mb-2  text-[#000000ac]">Login</h2>
            <input
                type="email"
                className="bg-gray-100 focus:bg-white rounded-md border border-gray-300 focus:border-[#007600] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <hr />
            <input
                type="text"
                min={userConfig.minPasswordLength}
                max={userConfig.maxPasswordLength}
                required
                pattern={`^[a-zA-Z0-9_]{${userConfig.minPasswordLength},${userConfig.maxPasswordLength}}$`}
                title={`Password must be between ${userConfig.minPasswordLength} and ${userConfig.maxPasswordLength} characters long and can only contain letters, numbers, and underscores.`}
                className=" bg-gray-100 focus:bg-white rounded-md border border-gray-300 focus:border-[#007600] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p className="w-full text-sm mb-2 leading-none text-[#0041c2] font-semibold- cursor-pointer hover:underline">
                Forgot password?
            </p>

            {/* <button className="flex items-center mt-2 text-lg gap-2 bg-[#007600] bg-[#648EFC]- text-white font-bold px-4 py-2 rounded-full justify-center cursor-pointer">
                Login
            </button> */}

            <BigButton
                onClick={handleLogin}
                text="Login"
                isActive={validateForm()}
                isProcessing={isLogging}
            />

            <p className="text-black text-xs mt-2">
                By logging in, you agree to our{" "}
                <span className="text-[#0D98BA]">User Terms</span> and{" "}
                <span className="text-[#0D98BA]">Privacy Policy</span>, including{" "}
                <span className="text-[#0D98BA]">Cookie Use</span>.
            </p>

            <p className="w-full text-base mb-2 leading-none text-black mt-3 cursor-pointer">
                Don&#39;t have an account?{" "}
                <Link href="/auth/signup" className="text-[#0041c2] underline font-medium">Sign up</Link>
            </p>
        </form>
    );
};

export default LoginPage;