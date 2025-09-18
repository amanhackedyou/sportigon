import { Schema, model, Document, models } from "mongoose";

interface ITeam {
    id: number;
    logo: string;
    name: string;
    topPlayers?: any[]; // can refine later
    shots?: any[];
}

interface IStatistic {
    displayName: string;
    value: number;
}

interface IMatchStatistic {
    team: ITeam;
    statistics: IStatistic[];
}

interface IEvent {
    team: ITeam;
    time: string;
    type: string;
    assist?: string | null;
    player?: string | null;
    substituted?: string | null;
}

interface IPrediction {
    type: string; // "live" | "prematch"
    modelType: string;
    description: string;
    generatedAt: string;
    probabilities: {
        away: string;
        draw: string;
        home: string;
    };
}

export interface IFMatch extends Document {
    id: number;
    round: string;
    date: string;
    venue: {
        city: string;
        name: string;
        country: string;
        capacity: string;
    };
    referee: {
        name: string;
        nationality: string;
    };
    forecast: {
        status: string;
        temperature: string;
    };
    events: IEvent[];
    predictions: {
        live: IPrediction[];
        prematch: IPrediction[];
    };
    country: {
        code: string;
        name: string;
        logo: string;
    };
    state: {
        clock: number;
        score: {
            current: string;
            penalties: string | null;
        };
        description: string;
    };
    awayTeam: ITeam;
    homeTeam: ITeam;
    league: {
        id: number;
        logo: string;
        name: string;
        season: number;
    };
    statistics: IMatchStatistic[];
    news: any[];
    updatedAt: Date;
    createdAt: Date;
}

const TeamSchema = new Schema<ITeam>({
    id: Number,
    logo: String,
    name: String,
    topPlayers: { type: [Schema.Types.Mixed], default: [] },
    shots: { type: [Schema.Types.Mixed], default: [] },
});

const StatisticSchema = new Schema<IStatistic>({
    displayName: String,
    value: Number,
});

const MatchStatisticSchema = new Schema<IMatchStatistic>({
    team: TeamSchema,
    statistics: [StatisticSchema],
});

const EventSchema = new Schema<IEvent>({
    team: TeamSchema,
    time: String,
    type: String,
    assist: { type: String, default: null },
    player: { type: String, default: null },
    substituted: { type: String, default: null },
});

const PredictionSchema = new Schema<IPrediction>({
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

const FootballMatchSchema = new Schema<IFMatch>(
    {
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
    },
    { timestamps: true }
);

export const FootballMatchModel = models["Football-Match"] || model<IFMatch>("Football-Match", FootballMatchSchema);
