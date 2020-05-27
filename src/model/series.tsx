export interface Schedule {
    time: string;
    days: string[];
}

export interface Rating {
    average?: number;
}

export interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface Network {
    id: number;
    name: string;
    country: Country;
}

export interface Externals {
    tvrage?: number;
    thetvdb: number;
    imdb: string;
}

export interface Image {
    medium: string;
    original: string;
}

export interface Self {
    href: string;
}

export interface Previousepisode {
    href: string;
}

export interface Links {
    self: Self;
    previousepisode: Previousepisode;
}

export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel?: any;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
}

export interface Series {
    score: number;
    show: Show;
}