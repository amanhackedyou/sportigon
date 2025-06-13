export type Predictions = {
    drawings: number;
    hentai: number;
    neutral: number;
    porn: number;
    sexy: number;
};

export enum ImageCategory {
    SAFE = "safe",
    SEXUAL = "sexual",
    ADULT = "adult",
    PORN = "pornographic",
}

export function classifyImage(predictions: Predictions): ImageCategory {
    const { porn, sexy, hentai } = predictions;

    if (porn > 0.8 || (porn > 0.6 && sexy > 0.2)) {
        return ImageCategory.PORN;
    }

    if (hentai > 0.5 || (sexy > 0.3 && porn > 0.4)) {
        return ImageCategory.ADULT;
    }

    if (sexy > 0.2 || hentai > 0.2) {
        return ImageCategory.SEXUAL;
    }

    return ImageCategory.SAFE;
}

// Example usage:
// const img1: Predictions = {
//     drawings: 0.028,
//     hentai: 0.024,
//     neutral: 0.038,
//     porn: 0.885,
//     sexy: 0.023,
// };

// const img2: Predictions = {
//     drawings: 0.016,
//     hentai: 0.020,
//     neutral: 0.011,
//     porn: 0.927,
//     sexy: 0.023,
// };

// const img3: Predictions = {
//     drawings: 0.062,
//     hentai: 0.056,
//     neutral: 0.155,
//     porn: 0.698,
//     sexy: 0.025,
// };

// console.log(classifyImage(img1)); // Should return 'pornographic'
// console.log(classifyImage(img2)); // Should return 'pornographic'
// console.log(classifyImage(img3)); // Should return 'adult'
