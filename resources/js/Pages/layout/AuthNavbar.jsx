import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import React from "react";

export default function AuthNavbar({ auth }) {
    return (
        <header className="">
            {}
            <div className="">
                
                <div className="row align-items-center justify-content-between">
                    <div className="col">
                        <h4 className="text-light text-center mb-0">
                            Tech Tips
                        </h4>
                    </div>
                    <div role="button" className="col-auto">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-white py-0 px-3"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src={auth.user_profile}
                                        alt=""
                                        srcSet=""
                                        height="30"
                                        width="30"
                                        className="rounded-circle"
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                                <ul
                                    className="dropdown-menu login-dropdown"
                                    aria-labelledby="navbarDropdown"
                                    style={{ left: "unset", right: 0 }}
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="/edit-profile"
                                        >
                                            Edit Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="logout"
                                            method="post"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
