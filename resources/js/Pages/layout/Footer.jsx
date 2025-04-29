// Footer.js

import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faFeed, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import React from "react";

function Footer() {
    return (
        <footer className="fixed-top">
            <div className="">
                <Link href="/" className=" btn bg-success text-white mx-2">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link
                    href="/new-post"
                    className=" btn bg-warning text-white mx-2"
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
                <Link
                    href="/profile"
                    className=" btn bg-secondary text-white mx-2"
                >
                    <FontAwesomeIcon icon={faUserCircle} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
