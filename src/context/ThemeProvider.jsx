import { useState, createContext } from "react";

export const darkModeContext = createContext();

export const ThemeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(true);

    function toggleTheme() {
        setDarkMode(!darkMode);
    }

    if (darkMode) {
        document.body.classList.add("bg-cyan-500");
        document.body.classList.remove("bg-slate-800");
    } else {
        document.body.classList.add("bg-slate-800");
        document.body.classList.remove("bg-cyan-500");
    }

    return (
        <darkModeContext.Provider value={{ darkMode, toggleTheme }}>
            {props.children}
        </darkModeContext.Provider>
    );
};
