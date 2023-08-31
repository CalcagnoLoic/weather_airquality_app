import { ToggleThemeButton } from "./ToggleThemeButton";
import { useContext } from "react";
import { darkModeContext } from "../context/ThemeProvider";

export const Header = () => {
    const { darkMode } = useContext(darkModeContext);

    return (
        <header
            className={` ${
                darkMode
                    ? "bg-slate-100 border-slate-800"
                    : "bg-slate-600 border-slate-100"
            } " flex flex-col justify-between items-center border-b-2 py-5 px-5"`}
        >
            <h1
                className={` ${
                    darkMode ? "text-slate-900" : "text-white"
                } " text-xl font-semibold "`}
            >
                Weather and Airquality app
            </h1>
            <div className="flex ">
                <ToggleThemeButton />
            </div>
        </header>
    );
};
