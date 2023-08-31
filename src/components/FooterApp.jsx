import { useContext } from "react";
import { darkModeContext } from "../context/ThemeProvider";

export const FooterApp = () => {
    const { darkMode } = useContext(darkModeContext);

    return (
        <footer
            className={` ${
                darkMode
                    ? "bg-slate-100 border-slate-800"
                    : "bg-slate-600 border-slate-100"
            } " px-5 py-5  border-t-2 z-10 "`}
        >
            <p
                className={` ${
                    darkMode ? "text-slate-900" : "text-white"
                } " font-semibold text-center "`}
            >
                <span>
                    Made by{" "}
                    <a
                        href="https://github.com/CalcagnoLoic"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @calcagnoloic
                    </a>
                </span>
            </p>
        </footer>
    );
};
