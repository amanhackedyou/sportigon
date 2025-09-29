import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true, index: true, lowercase: true },
    email: { type: String, required: false, lowercase: true, unique: true, sparse: true, trim: true }, // Email is optional for phone signups
    signupWith: { type: String, required: true, lowercase: true, enum: ["phone", "email"] },
    phone: { type: String, required: false, lowercase: true, unique: true, sparse: true, trim: true }, // Phone is optional for email signups
    password: { type: String, required: true }, // Hashed
    fullName: { type: String, trim: true, default: "" },
    profilePicture: { type: String, default: "" },
    coverPhoto: { type: String, default: "" },
    country: { type: String, default: "" }, // User's selected country
    currency: { type: String, default: "USD" }, // Based on country selection
    description: { type: String, default: "", trim: true },
    /** Security & Login Tracking */
    loginTokens: [
        {
            token: { type: String, required: true },
            ipAddress: { type: String, required: true, default: "" },
            // country: { type: String, default: "" },
            // currency: { type: String, default: "" },
            // device: { type: String, default: "Unknown" },
            // continent: { type: String, default: "" },
            // continent_code: { type: String, default: "" },
            // country_code: { type: String, default: "" },
            // country_capital: { type: String, default: "" },
            // country_phone: { type: String, default: "" },
            // country_neighbours: { type: String, default: "" },
            // region: { type: String, default: "" },
            // city: { type: String, default: "" },
            // latitude: { type: String, default: "" },
            // longitude: { type: String, default: "" },
            // asn: { type: String, default: "" },
            // org: { type: String, default: "" },
            // isp: { type: String, default: "" },
            // timezone: { type: String, default: "" },
            // timezone_name: { type: String, default: "" },
            // timezone_dstOffset: { type: String, default: "" },
            // timezone_gmtOffset: { type: String, default: "" },
            // timezone_gmt: { type: String, default: "" },
            // currency_code: { type: String, default: "" },
            // currency_symbol: { type: String, default: "" },
            // currency_rates: { type: String, default: "" },
            // currency_plural: { type: String, default: "" },
            socket_id: { type: String, default: "" },
            last_seen: { type: Date, default: Date.now },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    forgetPasswordToken: {
        token: {
            type: String,
            default: ''
        },
        generatedAt: { type: Date, default: Date.now }
    },
    /** Social Media & Connections */
    // followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    /** Sports Interests */
    favoriteSports: [{ type: String }],
    favoriteTeams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
    favoritePlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
    /** Notifications & Preferences */
    notificationSettings: {
        likes: { type: Boolean, default: true },
        comments: { type: Boolean, default: true },
        follows: { type: Boolean, default: true },
        messages: { type: Boolean, default: true },
        securityAlerts: { type: Boolean, default: true }, // For login attempts
    },
    /** Account Status */
    lastLogin: { type: Date },
    isVerified: { type: Boolean, default: false },
    isActivityStatusShowing: { type: Boolean, default: true },
    twoFactorAuthEnabled: { type: Boolean, default: false },
    accountType: { type: String, enum: ["personal", "business"], default: "personal" }, // personal or business account
    accountSuspensions: { type: Number, default: 0 }, // Number of times the account has been suspended
    accountStatus: { type: String, enum: ["Active", "Suspended", "Banned"], default: "Active" },
    statusReasons: {
        ban: { type: String, default: "You're account does not follows our guidlines and conditions, therefor we have banned your account." },
        suspend: { type: String, default: "We've noticed an suspeciace activity in your account, therefor we have temperary suspended your account. You can submit a apeal to get your account back." }
    },
    /** Interactions for ML/AI models */
    // likes: [{ type: mongoose.Schema.Types.ObjectId, unique: false }],
    // comments: [{ type: mongoose.Schema.Types.ObjectId, commentType: { type: String, enum: ["comment", "comment-reply", "reply-reply"] } }],
    // shares: [{ type: mongoose.Schema.Types.ObjectId }],
    // saves: [{ type: mongoose.Schema.Types.ObjectId }],
}, { timestamps: true });
// UserSchema.post("findOne", function (user: IUser, next) {
//     if (user.profilePicture?.trim() == "") {
//         user.profilePicture = userConfig.defaultProfilePicture;
//     }
//     next()
// });
export const UserModel = mongoose.models["User"] || mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map