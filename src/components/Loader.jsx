import spinner from "../assets/img/spinner.webp";

export const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center my-auto">
            <img src={spinner} alt="Loading..." className="w-24 mx-auto" />
            <p className="text-white text-xl text-center">
                No data to display... Try again in a few minutes...
            </p>
        </div>
    );
};
