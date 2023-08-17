export const convertIntoWeatherIcon = (data) => {
    switch (data) {
        case "01d":
            return "/img/clear_day.png";
            break;
        case "01n":
            return "/img/clear_night.png";
            break;
        case "02d":
            return "/img/few_cloud_day.png";
            break;
        case "02n":
            return "/img/few_cloud_night.png";
            break;
        case "03d":
            return "/img/scattered_cloud.png";
            break;
        case "04d":
            return "/img/broken_cloud.png";
            break;
        case "09d":
            return "/img/shower_rain.png";
            break;
        case "10d":
            return "/img/rain_day.png";
            break;
        case "10n":
            return "/img/rain_night.png";
            break;
        case "11d":
            return "/img/thunderstorm.png";
            break;
        case "13d":
            return "/img/snow.png";
            break;
        default:
            return "/img/mist.png";
    }
};
