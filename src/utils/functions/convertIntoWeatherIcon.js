export const convertIntoWeatherIcon = (data) => {
    switch (data) {
        case "01d":
            return "src/assets/img/clear_day.png";
            break;
        case "01n":
            return "src/assets/img/clear_night.png";
            break;
        case "02d":
            return "src/assets/img/few_cloud_day.png";
            break;
        case "02n":
            return "src/assets/img/few_cloud_night.png";
            break;
        case "03d":
            return "src/assets/img/scattered_cloud.png";
            break;
        case "04d":
            return "src/assets/img/broken_cloud.png";
            break;
        case "09d":
            return "src/assets/img/shower_rain.png";
            break;
        case "10d":
            return "src/assets/img/rain_day.png";
            break;
        case "10n":
            return "src/assets/img/rain_night.png";
            break;
        case "11d":
            return "src/assets/img/thunderstorm.png";
            break;
        case "13d":
            return "src/assets/img/snow.png";
            break;
        default:
            return "src/assets/img/mist.png";
    }
};
