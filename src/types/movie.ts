export interface Movie {
    plot:               string;
    genres:             string[];
    runtime:            NumMflixComments;
    cast:               string[];
    num_mflix_comments: NumMflixComments;
    poster:             string;
    title:              string;
    fullplot:           string;
    languages:          string[];
    released:           Released;
    directors:          string[];
    rated:              string;
    awards:             Awards;
    lastupdated:        Date|string;
    year:               NumMflixComments;
    imdb:               Imdb;
    countries:          string[];
    type:               string;
    tomatoes:           Tomatoes;
}

export interface ID {
    $oid: string;
}

export interface Awards {
    wins:        NumMflixComments;
    nominations: NumMflixComments;
    text:        string;
}

export interface NumMflixComments {
    $numberInt: string;
}

export interface Imdb {
    rating: Rating;
    votes:  NumMflixComments;
    id:     NumMflixComments;
}

export interface Rating {
    $numberDouble: string;
}

export interface Released {
    $date: DateClass;
}

export interface DateClass {
    $numberLong: string;
}

export interface Tomatoes {
    viewer:      Viewer;
    lastUpdated: Released;
}

export interface Viewer {
    rating:     Rating;
    numReviews: NumMflixComments;
    meter:      NumMflixComments;
}
