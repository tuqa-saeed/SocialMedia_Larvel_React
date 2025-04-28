import React, { useState } from "react";
import "./../../../css/Posts/createPost.css";
import { router } from "@inertiajs/react";

const CreatePost = () => {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(
        "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
    );

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        setImageUrl(URL.createObjectURL(selectedImage));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can add code here to handle image upload and post creation
        router.post("/new-post", { image: image, caption: caption });
        // Reset the form
        setCaption("");
        setImage(null);
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#101820', backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}>
            <div className="card col-md-6 p-5 rounded-4 shadow-lg" style={{ backgroundColor: '#282c34' }}>
                <div className="create-post-header text-center mb-4">
                    <h1 className="text-light fw-bold" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem' }}>Create Post</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="create-post-content">
                        <div className="create-post-image mb-4">
                            <div className="position-relative">
                                <img
                                    src={imageUrl || 'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg'}
                                    alt="Preview"
                                    className="img-fluid rounded-3 mb-3"
                                    style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
                                />
                                <label
                                    htmlFor="image"
                                    className="image-upload-label text-light border-bottom border-2 position-absolute"
                                    style={{
                                        bottom: '10px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#101820',
                                        padding: '10px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        fontWeight: '500',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    <input
                                        type="file"
                                        className="form-control d-none"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                    />
                                    Upload a photo
                                </label>
                            </div>
                        </div>
                        <div className="create-post-inputs mb-4">
                            <textarea
                                id="caption"
                                name="caption"
                                className="form-control p-3 bg-transparent text-light border-0 shadow-sm"
                                rows={7}
                                value={caption}
                                onChange={handleCaptionChange}
                                placeholder="Write a caption..."
                                required
                                style={{
                                    borderBottom: '2px solid #00b3b3',
                                    fontSize: '1.1rem',
                                    resize: 'none',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            />
                        </div>
                    </div>
                    <div className="create-post-footer text-center">
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
                            Share
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
};

export default CreatePost;
