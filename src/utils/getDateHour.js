let today = new Date();
export let date =
    today.getDate() + "/0" + (today.getMonth() + 1) + "/" + today.getFullYear();

export let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
