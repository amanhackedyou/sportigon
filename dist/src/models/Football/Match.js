import { Schema, model, models } from "mongoose";
const TeamSchema = new Schema({
    id: Number,
    logo: String,
    name: String,
    topPlayers: { type: [Schema.Types.Mixed], default: [] },
    shots: { type: [Schema.Types.Mixed], default: [] },
});
const StatisticSchema = new Schema({
    displayName: String,
    value: Number,
});
const MatchStatisticSchema = new Schema({
    team: TeamSchema,
    statistics: [StatisticSchema],
});
const EventSchema = new Schema({
    team: TeamSchema,
    time: String,
    type: String,
    assist: { type: String, default: null },
    player: { type: String, default: null },
    substituted: { type: String, default: null },
});
const PredictionSchema = new Schema({
    type: String,
    modelType: String,
    description: String,
    generatedAt: String,
    probabilities: {
        away: String,
        draw: String,
        home: String,
    },
});
const FootballMatchSchema = new Schema({
    id: { type: Number, required: true, unique: true, index: true },
    round: String,
    date: String,
    venue: {
        city: String,
        name: String,
        country: String,
        capacity: String,
    },
    referee: {
        name: String,
        nationality: String,
    },
    forecast: {
        status: String,
        temperature: String,
    },
    events: [EventSchema],
    predictions: {
        live: [PredictionSchema],
        prematch: [PredictionSchema],
    },
    country: {
        code: String,
        name: String,
        logo: String,
    },
    state: {
        clock: Number,
        score: {
            current: String,
            penalties: { type: String, default: null },
        },
        description: String,
    },
    awayTeam: TeamSchema,
    homeTeam: TeamSchema,
    league: {
        id: Number,
        logo: String,
        name: String,
        season: Number,
    },
    statistics: [MatchStatisticSchema],
    news: { type: [], default: [] },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });
export const FootballMatchModel = models["Football-Match"] || model("Football-Match", FootballMatchSchema);
//# sourceMappingURL=Match.js.map