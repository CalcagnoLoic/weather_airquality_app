import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { Loader } from "./Loader";
import {
    WiHumidity,
    WiBarometer,
    WiWindDeg,
    WiStrongWind,
} from "react-icons/wi";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { IconContext } from "react-icons";

import { convertWindSpeed } from "../utils/functions/convertWindSpeed";
import { convertIntoWeatherIcon } from "../utils/functions/convertIntoWeatherIcon";
import { convertAQIIntoMessage } from "../utils/functions/convertAQIIntoMessage";
import { changeColorWithAQI } from "../utils/colors/changeColor";

import { darkModeContext } from "../context/ThemeProvider";
import { date, time } from "../utils/getDateHour";

export const AppContent = () => {
    const { darkMode } = useContext(darkModeContext);

    const { dataWeather, isLoading, isError } = useFetch(
        "https://api.airvisual.com/v2/nearest_city?key="
    );

    return (
        <>
            {isError && (
                <p className="text-white text-sm text-center p-5">
                    Try again in a few minutes...
                </p>
            )}
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-grow justify-center items-center px-10 rounded-md my-5">
                    <div
                        className={`relative p-8 rounded text-center bg-white shadow-2xl ${
                            darkMode ? "shadow-sky-950" : "shadow-slate-400"
                        }`}
                    >
                        <div className="flex flex-col w-full sm:flex-row gap-5 ">
                            <img
                                src={`${convertIntoWeatherIcon(
                                    dataWeather.data?.current.weather.ic
                                )}`}
                                alt="Weather icon"
                                className="basis-1/3 self-center w-1/2 sm:w-1/4"
                            />
                            <div className="basis-2/3 self-center">
                                <h1 className="text-2xl sm:text-3xl font-semibold break-words mb-3">
                                    {dataWeather.data?.city},{" "}
                                    {dataWeather.data?.state},{" "}
                                    {dataWeather.data?.country}{" "}
                                </h1>
                                <p className="italic sm:text-xl mb-4">
                                    {date}, {time}
                                </p>
                                <div className="flex gap-6 sm:text-xl justify-center">
                                    <p className="flex gap-1 ">
                                        <IconContext.Provider
                                            value={{ size: 26 }}
                                        >
                                            <LiaTemperatureLowSolid className="self-center" />
                                        </IconContext.Provider>
                                        {dataWeather.data?.current.weather.tp}
                                        °C
                                    </p>
                                    <p className="flex gap-1">
                                        <IconContext.Provider
                                            value={{ size: 26 }}
                                        >
                                            <WiHumidity className="self-center" />
                                        </IconContext.Provider>
                                        {dataWeather.data?.current.weather.hu}%
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-5 justify-around sm:text-xl mt-8">
                            <p className="flex gap-1 justify-center sm:justify-start">
                                <IconContext.Provider value={{ size: 26 }}>
                                    <WiStrongWind className="self-center" />
                                </IconContext.Provider>
                                {Math.round(
                                    dataWeather.data?.current.weather.ws * 3.6
                                )}{" "}
                                km/h
                            </p>
                            <p className="flex gap-1 justify-center sm:justify-start">
                                <IconContext.Provider value={{ size: 26 }}>
                                    <WiWindDeg className="self-center" />{" "}
                                </IconContext.Provider>
                                {convertWindSpeed(
                                    dataWeather.data?.current.weather.wd
                                )}
                            </p>
                            <p className="flex gap-1 justify-center sm:justify-start">
                                <IconContext.Provider value={{ size: 30 }}>
                                    <WiBarometer className="self-center" />
                                </IconContext.Provider>
                                {dataWeather.data?.current.weather.pr}&nbsp; HPa
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-5 mt-10">
                            <h2 className="text-2xl font-semibold">
                                Air Quality Index
                            </h2>
                            <p
                                className={`text-center text-xl border-2 p-3 ${changeColorWithAQI(
                                    dataWeather.data?.current.pollution.aqius
                                )} border-none font-semibold`}
                            >
                                {dataWeather.data?.current.pollution.aqius} -{" "}
                                {convertAQIIntoMessage(
                                    dataWeather.data?.current.pollution.aqius
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
