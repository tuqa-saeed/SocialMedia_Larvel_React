import React from "react";
import Footer from "./Footer";
import "../../../css/app.css";
import { usePage } from "@inertiajs/react";


const app = ({ children }) => {
    const { auth, flash } = usePage().props;
    return (
        <div className=" bg-dark main-content">
            {flash?.success && (
                <div className="alert alert-success">{flash.success}</div>
            )}
            <div className="">{children}</div>
            {auth && <Footer />}
        </div>
    );
};

export default app;
