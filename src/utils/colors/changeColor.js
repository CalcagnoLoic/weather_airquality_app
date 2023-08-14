export const changeColorWithAQI = (data) => {
    let colors;
    if (data < 50) {
        colors = "bg-green-300 text-green-800";
        return colors;
    } else if (51 < data < 100) {
        colors = "bg-yellow-300 text-yellow-800";
        return colors;
    } else if (101 < data < 150) {
        colors = "bg-orange-300 text-orange-800";
        return colors;
    } else if (151 < data < 200) {
        colors = "bg-rose-300 text-rose-800";
        return colors;
    } else if (201 < data < 250) {
        colors = "bg-rose-500 text-rose-100";
        return colors;
    } else {
        colors = "bg-rose-800 text-rose-100";
        return colors;
    }
};
