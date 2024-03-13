import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <>
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{ justifyContent: "center" }}
                wrapperClass=""
                visible={true}
            />
        </>
    );
};

export default Loader;
