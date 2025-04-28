import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function EditProfile(props) {
    const { user } = props;

    const {
        data,
        setData,
        post,
        processing,
        errors,
        setError,
        reset,
        clearErrors,
        hasErrors,
    } = useForm({
        name: user.name,
        email: user.email,
        username: user.username,
        bio: user.bio,
    });

    const [imageUrl, setImageUrl] = useState(user.user_profile);
    const [isValidImage, setIsValidImage] = useState(true);

    const onChangeProfileImage = (e) => {
        const selectedImage = e.target.files[0];
        // check if image is valid
        if (!selectedImage.type.startsWith("image/")) {
            setError("profile", "Please select an image file");
            return;
        }
        setData("profile", selectedImage);
        setImageUrl(URL.createObjectURL(selectedImage));
    };

    const onChangeUsername = (e) => {
        // validate only letter and number and underscore allowed
        const regex = /^[a-z0-9_]*$/;

        // Test the input value against the regex
        if (!regex.test(e.target.value)) {
            setError(
                "username",
                "Please enter small letters, underscores, and numbers only."
            );
            setIsValidImage(false);
        } else {
            setIsValidImage(true);
            clearErrors("username");
        }

        setData("username", e.target.value);
    };

    const handleEditProfileForm = (e) => {
        e.preventDefault();
        if (isValidImage) {
            post("/edit-profile");
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#101820', backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}>
            <div className="card col-md-6 p-5 rounded-4 shadow-lg" style={{ backgroundColor: '#282c34' }}>
                <div className="card-body">
                    {/* form with inputs: name, email, username, profile picture */}
                    <form onSubmit={handleEditProfileForm}>
                        <div className="row">
                            <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
                                <div>
                                    <img
                                        src={imageUrl || 'https://via.placeholder.com/100'}
                                        alt="profile"
                                        className="rounded-pill mb-3"
                                        style={{
                                            objectFit: 'cover',
                                            height: '100px',
                                            width: '100px',
                                        }}
                                    />
                                </div>
                                <div className="ms-3">
                                    <label
                                        htmlFor="profile"
                                        className="btn btn-success text-light fw-bold"
                                        style={{
                                            cursor: 'pointer',
                                            borderRadius: '10px',
                                            padding: '10px 20px',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                    >
                                        Change Avatar
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control d-none"
                                        id="profile"
                                        name="profile"
                                        onChange={onChangeProfileImage}
                                    />
                                </div>
                            </div>
    
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label text-light">Name</label>
                                <input
                                    type="text"
                                    className="form-control bg-transparent text-light border-0 shadow-sm"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    style={{
                                        borderBottom: '2px solid #00b3b3',
                                        fontSize: '1.1rem',
                                        fontFamily: 'Arial, sans-serif',
                                    }}
                                />
                                {errors.name && <span className="text-danger">{errors.name}</span>}
                            </div>
    
                            <div className="col-md-6 mb-3">
                                <label htmlFor="username" className="form-label text-light">Username</label>
                                <input
                                    type="text"
                                    className="form-control bg-transparent text-light border-0 shadow-sm"
                                    id="username"
                                    name="username"
                                    value={data.username}
                                    onChange={onChangeUsername}
                                    style={{
                                        borderBottom: '2px solid #00b3b3',
                                        fontSize: '1.1rem',
                                    }}
                                />
                                {errors.username && <span className="text-danger">{errors.username}</span>}
                            </div>
    
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label text-light">Email</label>
                                <input
                                    type="email"
                                    className="form-control bg-transparent text-light border-0 shadow-sm"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    style={{
                                        borderBottom: '2px solid #00b3b3',
                                        fontSize: '1.1rem',
                                    }}
                                />
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                            </div>
    
                            <div className="col-md-12 mb-3">
                                <label htmlFor="bio" className="form-label text-light">Bio</label>
                                <textarea
                                    name="bio"
                                    id="bio"
                                    cols="5"
                                    rows="5"
                                    value={data.bio}
                                    onChange={(e) => {
                                        setData("bio", e.target.value);
                                        clearErrors("bio");
                                    }}
                                    placeholder="Write something about yourself..."
                                    className="form-control bg-transparent text-light border-0 shadow-sm"
                                    style={{
                                        borderBottom: '2px solid #00b3b3',
                                        fontSize: '1.1rem',
                                        resize: 'none',
                                    }}
                                />
                                {errors.bio && <span className="text-danger">{errors.bio}</span>}
                            </div>
                        </div>
    
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-success w-50 py-3 rounded-4 fw-bold"
                                style={{
                                    background: 'linear-gradient(135deg, #00b3b3 10%, #003366 90%)',
                                    border: 'none',
                                    boxShadow: '0 4px 10px rgba(0, 179, 179, 0.3)',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Save
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            <Link href="/profile" className="btn btn-secondary ms-2 py-3 rounded-4">
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}
