// lib/withAuth.ts
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { IUser, UserModel } from '@/models/User'
// import { verifyToken } from '@/utils/token'
import { NextResponse } from 'next/server'
import { connectDB } from './db'
import { verifyJWToken } from '@/utils/jwtUtils'


export function withAuth(handler: (user: IUser, req: Request, params?: any) => Promise<Response>) {
    return async function (req: Request, { params }: { params: { slug: string } }) {
        try {
            await connectDB();

            const cookieStore = await cookies();
            const token = cookieStore.get('token')?.value

            if (!token) {

                return NextResponse.json({ status: "error", message: 'Unauthorized: No token' }, { status: 401 })
            }

            // const decoded: any = await verifyToken(token);
            const decoded: any = verifyJWToken(token);

            const user: IUser | null = await UserModel.findById(decoded.userId)
            if (!user) {
                return NextResponse.json({ status: "error", message: 'User not found' }, { status: 401 })
            }

            let isValidToken = false;

            for (const loginToken of user.loginTokens) {
                const token_ = loginToken.token;
                if (token == token_) {
                    isValidToken = true;
                    break;
                }
            }

            if (!isValidToken) {
                const cookieStore = await cookies();
                cookieStore.delete('token'); // Clear the token cookie if it doesn't match
                return NextResponse.json({ status: "error", message: 'Unauthorized: invalid/expired token.' }, { status: 401 })
            }


            return await handler(user, req, params)
        } catch (err) {
            console.log('Error in withAuth:', err);

            return NextResponse.json({ status: "error", message: 'Something went wrong, please try again.' }, { status: 500 })
        }
    }
}
