export const convertWindSpeed = (data) => {
    let value = Math.floor(data / 22.5 + 0.5);
    let arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
    ];

    return arr[value % 16];
};
