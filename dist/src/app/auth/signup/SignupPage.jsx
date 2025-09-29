"use client";
import BigButton from "@/components/BigButton";
import { userConfig } from "@/config/user.config";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { HttpManager } from "@/libs/http_manager";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import validator from "validator";
const SignupPage = () => {
    const router = useRouter();
    const { showModal } = useModal();
    const { reloadUser } = useAuth();
    const [username, setUsername] = useState("amanyadav");
    const [displayName, setDisplayName] = useState("Aman Yadav");
    const [email, setEmail] = useState("amanyadav@example.com");
    const [password, setPassword] = useState("AmanPayal");
    const [confirmPassword, setConfirmPassword] = useState("AmanPayal");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const validateForm = () => {
        if (!username.trim() || !displayName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            return false;
        }
        if (username.trim().length < userConfig.minUsernameLength ||
            username.trim().length > userConfig.maxUsernameLength) {
            return false;
        }
        if (displayName.trim().length === 0) {
            return false;
        }
        if (!validator.isEmail(email.trim())) {
            return false;
        }
        if (password.trim().length < userConfig.minPasswordLength ||
            password.trim().length > userConfig.maxPasswordLength) {
            return false;
        }
        if (password !== confirmPassword) {
            return false;
        }
        return true;
    };
    const handleLogin = async () => {
        setIsSubmitting(true);
        try {
            const response = await HttpManager.post('/api/auth/create-account', {
                name: displayName.trim(),
                username: username.trim(),
                email: email.trim(),
                password: password.trim(),
                signupWith: "email"
            });
            if (response.status === 'ok') {
                reloadUser();
                router.push('/');
            }
            else {
                showModal({
                    type: 'error',
                    title: 'Signup Failed',
                    description: response.message || 'An error occurred during login. Please try again.',
                });
            }
        }
        catch (error) {
            showModal({
                type: 'error',
                title: 'Signup Failed',
                description: 'An unexpected error occurred. Please check your internet connection and try again.',
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (<form onSubmit={e => e.preventDefault()} className={`flex-col h-screen w-full px-5 justify-center gap-2 flex`}>
            <button onClick={(e) => router.back()} className="bg-gray-100 border border-gray-300 rounded-full p-1 cursor-pointer hover:scale-125 transition absolute text-3xl top-5 right-5">
                <IoCloseOutline />
            </button>

            {/* <h1 className="w-full text-[#007600] text-4xl text-center mb-5 font-semibold">
    Sportigon
  </h1> */}

            <div className="w-full flex justify-center mb-8">
                <img className="w-1/2" src="/icons/logo_green.svg" alt="Logo"/>
            </div>

            <h2 className="font-bold text-2xl mb-2 text-[#000000ac]">Sign up</h2>

            <input type="text" className="bg-gray-100 focus:bg-white rounded-md border border-gray-300 focus:border-[#007600] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required pattern={`^[a-zA-Z0-9_]{${userConfig.minUsernameLength},${userConfig.maxUsernameLength}}$`} title={`Username must be between ${userConfig.minUsernameLength} and ${userConfig.maxUsernameLength} characters long and can only contain letters, numbers, and underscores.`}/>
            <input type="text" className="bg-gray-100 focus:bg-white rounded-md border border-gray-300 focus:border-[#007600] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Display name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required/>
            <input type="email" className="bg-gray-100 focus:bg-white rounded-md border border-gray-300 focus:border-[#007600] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            {/* <p className="text-right w-full text-sm my-1 leading-none text-[#0041c2] font-semibold- cursor-pointer hover:underline">
    Use phone instead?
  </p> */}

            <hr />
            <input type="password" className="bg-gray-100 focus:bg-white rounded-md border border-gray-300 focus:border-[#007600] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Password" value={password} required minLength={userConfig.minPasswordLength} maxLength={userConfig.maxPasswordLength} pattern={`^[a-zA-Z0-9_]{${userConfig.minPasswordLength},${userConfig.maxPasswordLength}}$`} title={`Password must be between ${userConfig.minPasswordLength} and ${userConfig.maxPasswordLength} characters long and can only contain letters, numbers, and underscores.`} onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" className="bg-gray-100 focus:bg-white rounded-md border border-gray-300 focus:border-[#007600] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Confirm Password" value={confirmPassword} required minLength={userConfig.minPasswordLength} maxLength={userConfig.maxPasswordLength} pattern={`^[a-zA-Z0-9_]{${userConfig.minPasswordLength},${userConfig.maxPasswordLength}}$`} title={`Password must be between ${userConfig.minPasswordLength} and ${userConfig.maxPasswordLength} characters long and can only contain letters, numbers, and underscores.`} onChange={(e) => setConfirmPassword(e.target.value)}/>

            {/* <button className="flex items-center mt-2 text-lg gap-2 bg-[#007600] text-white font-bold px-4 py-2 rounded-full justify-center cursor-pointer">
            Finish
        </button> */}

            <BigButton onClick={() => {
            handleLogin();
        }} text="Sign up" isActive={validateForm()} isProcessing={isSubmitting} // Replace with actual processing state if needed
    />

            <div className="text-xs mt-4">
                <p className="text-black text-xs mt-2">
                    By signing up, you agree to our{" "}
                    <span className="text-[#0D98BA]">User Terms</span> and{" "}
                    <span className="text-[#0D98BA]">Privacy Policy</span>, including{" "}
                    <span className="text-[#0D98BA]">Cookie Use</span>.
                </p>
            </div>

            <div className=" text-black">
                Have an account already?{" "}
                <Link href="/auth/login" className="text-[#0041c2] cursor-pointer font-medium underline">
                    Log in
                </Link>
            </div>
        </form>);
};
export default SignupPage;
//# sourceMappingURL=SignupPage.jsx.map