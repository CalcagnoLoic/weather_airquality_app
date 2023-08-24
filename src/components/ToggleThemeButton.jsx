import { Switch } from "@mui/material";
import { useContext } from "react";
import { darkModeContext } from "../context/ThemeProvider";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const ToggleThemeButton = () => {
    const { darkMode, toggleTheme } = useContext(darkModeContext);

    return (
        <>
            {darkMode ? (
                ""
            ) : (
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                    <BsMoonStarsFill className="self-center" />
                </IconContext.Provider>
            )}
            <Switch defaultChecked color="default" onClick={toggleTheme} />
            {darkMode ? (
                <IconContext.Provider value={{ color: "yellow", size: "2em" }}>
                    <BsFillSunFill className="self-center" />
                </IconContext.Provider>
            ) : (
                ""
            )}
        </>
    );
};
