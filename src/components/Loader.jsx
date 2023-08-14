import spinner from "../assets/img/spinner.webp";

export const Loader = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img src={spinner} alt="Loading..." className="w-24 mx-auto" />
            <p className="text-white text-xl text-center">
                No data to display... Try again in a few minutes...
            </p>
        </div>
    );
};
