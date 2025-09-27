// export interface ApiResponse extends Array<Match> { }

export interface IFootballMatch {
    venue: Venue;
    statusCode?: number;
    referee: Referee;
    forecast: Forecast;
    events: EventItem[];
    predictions: Predictions;
    id: number;
    round: string;
    date: string; // ISO timestamp
    country: Country;
    state: State;
    awayTeam: TeamDetails;
    homeTeam: TeamDetails;
    league: League;
    statistics: TeamStatistics[];
    news: any[]; // keep as any[] if structure is unknown (empty in sample)

}

/* Venue, Referee, Forecast */
export interface Venue {
    city: string;
    name: string;
    country: string;
    capacity: string; // appears as string in sample
}

export interface Referee {
    name: string;
    nationality: string | null;
}

export interface Forecast {
    status: string;
    temperature: string; // e.g. "13.47°C"
}

/* Event items (match events: yellow card, substitution, goal...) */
export interface EventItem {
    team: SimpleTeam;
    time: string; // can be "90+6", "46", etc.
    type: string;
    assist: string | null;
    player: string;
    playerId: number | null;
    substituted: string | null;
    assistingPlayerId: number | null;
}

export interface SimpleTeam {
    id: number;
    logo: string;
    name: string;
}

/* Predictions (live + prematch) */
export interface Predictions {
    live: Prediction[];
    prematch: Prediction[];
}

export interface Prediction {
    type: string; // "live" | "prematch"
    modelType: string;
    description: string;
    generatedAt: string; // ISO timestamp
    probabilities: Probabilities;
}

export interface Probabilities {
    away: string; // percentages represented as strings in sample ("15.96%")
    draw: string;
    home: string;
}

/* Country, State, Score */
export interface Country {
    code: string;
    name: string;
    logo: string;
}

export interface State {
    clock: number;
    score: Score;
    description: string;
}

export interface Score {
    current: string; // e.g. "1 - 0"
    penalties: string | null;
}

/* Team details used for homeTeam / awayTeam */
export interface TeamDetails {
    id: number;
    logo: string;
    name: string;
    topPlayers: TopPlayer[];
    shots: Shot[];
}

export interface TopPlayer {
    name: string;
    position: string;
    statistics: PlayerStatistic[];
}

export interface PlayerStatistic {
    name: string;
    value: number;
}

export interface Shot {
    time: string; // e.g. "6'", "90 + 8'"
    outcome: string; // "Saved", "Missed", "Blocked", "Goal"
    goalTarget: string | null;
    playerName: string;
}

/* League */
export interface League {
    id: number;
    logo: string;
    name: string;
    season: number;
}

/* Team-wide statistics block */
export interface TeamStatistics {
    team: SimpleTeam;
    statistics: StatisticEntry[];
}

export interface StatisticEntry {
    value: number;
    displayName: string;
}