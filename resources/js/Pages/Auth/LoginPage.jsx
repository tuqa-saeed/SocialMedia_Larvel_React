import React from "react";
import "../../../css/Auth/Login.css";
import { Link, useForm, usePage } from "@inertiajs/react";

const LoginPage = () => {

    const { props } = usePage();
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    console.log(props.errors);

    const onSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#101820', backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}>
            <div className="card col-md-5 p-5 rounded-4 shadow-2xl" style={{ backgroundColor: '#282c34', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
                <h2 className="text-center text-light mb-4 fw-bold" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>Login to Tech Tips</h2>
                {Object.values(props.errors).map((value, index) => (
                    <div key={index} className="alert alert-danger alert-dismissible fade show" role="alert" style={{ backgroundColor: '#ff5c5c', borderRadius: '8px' }}>
                        <span>{value}</span>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                ))}
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label text-light" style={{ fontWeight: '500' }}>
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control p-3 rounded-3 bg-transparent text-light border-0 shadow-sm"
                            id="email"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            style={{ borderBottom: '2px solid #00b3b3' }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label text-light" style={{ fontWeight: '500' }}>
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control p-3 rounded-3 bg-transparent text-light border-0 shadow-sm"
                            id="password"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            style={{ borderBottom: '2px solid #00b3b3' }}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={onSubmit}
                        className="btn btn-lg w-100 py-3 rounded-4 text-dark fw-bold"
                        style={{
                            background: 'linear-gradient(135deg, #00b3b3 10%, #003366 90%)',
                            border: 'none',
                            boxShadow: '0 4px 10px rgba(0, 179, 179, 0.3)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Login
                    </button>
                    <p className="text-center mt-4 text-light" style={{ fontSize: '0.9rem' }}>
                        Don't have an account?{" "}
                        <Link href="/register" className="text-primary fw-semibold" style={{ textDecoration: 'underline' }}>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
    
};

export default LoginPage;
