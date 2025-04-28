import React from "react";
import "../../../css/Auth/Login.css";
import { Link, useForm, usePage } from "@inertiajs/react";

const RegisterPage = () => {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        setError,
        clearErrors,
        reset,
    } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            clearErrors();
        }, 3000);
        post("/register");
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#101820', backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}>
            <div className="card col-md-5 p-5 rounded-4 shadow-2xl my-5" style={{ backgroundColor: '#282c34', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
                <h2 className="text-center text-light mb-4 fw-bold" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>Create New Account</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label text-light" style={{ fontWeight: '500' }}>
                            Full Name
                        </label>
                        <input
                            type="name"
                            className="form-control p-3 rounded-3 bg-transparent text-light border-0 shadow-sm"
                            id="name"
                            placeholder="Enter your name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            style={{ borderBottom: '2px solid #00b3b3' }}
                        />
                        <p className="text-danger">{errors.name}</p>
                    </div>
                    {/* username field */}
                    <div className="mb-4">
                        <label htmlFor="username" className="form-label text-light" style={{ fontWeight: '500' }}>
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control p-3 rounded-3 bg-transparent text-light border-0 shadow-sm"
                            id="username"
                            placeholder="Enter your username"
                            value={data.username}
                            onChange={(e) => setData("username", e.target.value)}
                            style={{ borderBottom: '2px solid #00b3b3' }}
                        />
                        <p className="text-danger">{errors.username}</p>
                    </div>
    
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
                        <p className="text-danger">{errors.email}</p>
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
                        <p className="text-danger">{errors.password}</p>
                    </div>
    
                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="form-label text-light" style={{ fontWeight: '500' }}>
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control p-3 rounded-3 bg-transparent text-light border-0 shadow-sm"
                            id="password_confirmation"
                            placeholder="Confirm your password"
                            value={data.password_confirmation}
                            onChange={(e) => setData("password_confirmation", e.target.value)}
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
                        Register
                    </button>
    
                    <p className="text-center mt-4 text-light" style={{ fontSize: '0.9rem' }}>
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary fw-semibold" style={{ textDecoration: 'underline' }}>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
    
};

export default RegisterPage;
