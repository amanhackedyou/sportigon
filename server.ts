// import { createServer } from "http";
// import * as Next from "next";
// import { Server, Socket } from "socket.io";

// const dev: boolean = process.env.NODE_ENV !== "production";
// const hostname: string = "localhost";
// const port: number = 3000;

// // when using middleware `hostname` and `port` must be provided below
// const app = (Next as any)({ dev, hostname, port });
// const handler = app.getRequestHandler();

// app.prepare().then(() => {
//     const httpServer = createServer((req, res) => {
//         handler(req, res);
//     });

//     console.log("Starting server...");

//     const io = new Server(httpServer);

//     io.on("connection", (socket: Socket) => {
//         console.log("A user connected:", socket.id);

//         socket.on("disconnect", () => {
//             console.log("A user disconnected:", socket.id);
//         });
//     });

//     httpServer
//         .once("error", (err: Error) => {
//             console.error(err);
//             process.exit(1);
//         })
//         .listen(port, () => {
//             console.log(`> Ready on http://${hostname}:${port}`);
//         });
// });


// // server.ts
// import { createServer } from "node:http";
// import type { IncomingMessage, ServerResponse } from "node:http";
// import { Server as IOServer, Socket } from "socket.io";
// import * as cookieParser from "cookie-parser";

// const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
// const port = Number(process.env.PORT || 3000);

// (async () => {
//     try {
//         console.log("Starting server...");

//         // dynamic import to handle both ESM and CJS shapes
//         const nextModule = await import("next");
//         // `nextModule` might be: { default: [Function], ... } or directly the function.
//         const createNextApp = (nextModule as any).default ?? nextModule;

//         const app = createNextApp({ dev, hostname, port });
//         const handler = app.getRequestHandler?.() ?? app.getRequestHandler; // defensive

//         // prepare the next app
//         app.use(cookieParser.default());
//         await app.prepare();

//         // create and run http server
//         const httpServer = createServer((req: IncomingMessage, res: ServerResponse) =>
//             (handler as any)(req, res)
//         );

//         const io = new IOServer(httpServer, {
//             cors: {
//                 origin: "*", // Adjust this in production to your client's origin
//                 methods: ["GET", "POST"],
//             },
//             cookie: true,
//         });

//         io.use(async (socket, next) => {
//             const cookie = socket.handshake.headers.cookie;
//             // Here you can parse and validate the cookie as needed
//             console.log("Socket handshake cookie:", cookie);
//             next();
//         })

//         io.on("connection", (socket: Socket) => {
//             console.log("socket connected:", socket.id);

//             socket.on("disconnect", () => {
//                 console.log("socket disconnected:", socket.id);
//             });
//         });

//         httpServer
//             .once("error", (err: Error) => {
//                 console.error("HTTP server error:", err);
//                 process.exit(1);
//             })
//             .listen(port, () => {
//                 console.log(`> Ready on http://${hostname}:${port}`);
//             });
//     } catch (err) {
//         console.error("Failed to start server:", err);
//         process.exit(1);
//     }
// })();



// server.ts
import express from "express";
import { createServer } from "node:http";
import { Server as IOServer } from "socket.io";
import cookieParser from "cookie-parser";
import next from "next";
// import { parseCookies } from "/utils/utils";
import { parseCookies } from "./src/utils/utils.js";
import { verifyJWToken } from "./src/utils/jwtUtils.js";
import { UserModel } from "./src/models/User.js";
import { connectDB } from "./src/libs/db.js";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = Number(process.env.PORT || 3000);

(async () => {
    try {
        console.log("Starting server...");

        const app = (next as any)({ dev, hostname, port });
        const handler = app.getRequestHandler();

        await app.prepare();

        // Use Express as the main server
        const expressApp = express();

        // Add cookie parser middleware
        expressApp.use(cookieParser());

        // Attach Next.js handler for all routes
        // expressApp.all("*", (req, res) => handler(req, res));
        expressApp.all(/.*/, (req, res) => handler(req, res));

        // Create Node server from Express
        const httpServer = createServer(expressApp);

        // Init socket.io
        const io = new IOServer(httpServer, {
            cors: {
                origin: "*", // TODO: restrict in production
                methods: ["GET", "POST"],
            },
            cookie: true,
        });

        // Example middleware for sockets
        io.use(async (socket, next) => {
            const cookie = socket.handshake.headers.cookie;
            const parsedCookies = parseCookies(cookie);
            if (!parsedCookies) {
                return next(new Error("No cookies found"));
            }

            const token = parsedCookies["token"];
            if (!token) {
                return next(new Error("Authentication error: No token"));
            }

            const tokenData = verifyJWToken(token);
            if (!tokenData) {
                return next(new Error("Authentication error: Invalid token"));
            }

            const userId = (tokenData as any).userId;
            if (!userId) {
                return next(new Error("Authentication error: No userId in token"));
            }

            try {
                // await connectDB(); // Ensure DB is connected
            } catch (err) { }
            const user = await UserModel.findById(userId);

            if (!user) {
                return next(new Error("Authentication error: User not found"));
            }

            (socket.request as any).user = user;
            next();
        });

        io.on("connection", (socket) => {
            console.log("socket connected:", socket.id);

            socket.on("disconnect", () => {
                console.log("socket disconnected:", socket.id);
            });
        });

        httpServer.listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
})();
