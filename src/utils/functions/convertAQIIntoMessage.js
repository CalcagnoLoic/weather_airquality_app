export const convertAQIIntoMessage = (data) => {
    if (data < 50) {
        return "Good";
    } else if (51 < data < 100) {
        return "Moderate";
    } else if (101 < data < 150) {
        return "Unhealthy for sensitive groups";
    } else if (151 < data < 200) {
        return "Unhealthy";
    } else if (201 < data < 250) {
        return "Very unhealthy";
    } else {
        return "Hazardous";
    }
};
