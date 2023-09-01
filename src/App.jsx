import { Header } from "./components/Header";
import { AppContent } from "./components/AppContent";
import { FooterApp } from "./components/FooterApp";

export const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <AppContent />

            <FooterApp />
        </div>
    );
};
