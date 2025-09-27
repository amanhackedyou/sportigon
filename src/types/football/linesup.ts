
export type IFootballPlayer = {
    id: number | null;
    name: string;
    number: number;
    position: string; // "Goalkeeper" | "Defender" | "Midfielder" | "Forward"
};

export type IFootballTeam = {
    id: number;
    name: string;
    logo: string;
    formation: string;          // e.g. "4-2-3-1"
    substitutes: IFootballPlayer[];
    initialLineup: IFootballPlayer[][];  // each inner array is a line: [ [GK], [DEF...], [MID...], ... ]
};

export type IFootballLineup = {
    homeTeam: IFootballTeam;
    awayTeam: IFootballTeam;
};
