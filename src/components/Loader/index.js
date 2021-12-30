import React from 'react';
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
    return (
        <div className="box relative dark:bg-skin-white flex flex-col items-center justify-center h-screen">
            <img width={100} className="overflow-hidden mb-5" src="/static/img/logo.png" alt="" />
            <BarLoader color={"#4ba0e8"} size={140} />
        </div>
    )
}

export default Loader
