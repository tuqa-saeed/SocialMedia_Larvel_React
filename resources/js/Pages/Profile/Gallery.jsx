// PostGrid.js

import { usePage } from "@inertiajs/react";
import React from "react";

function Gallery() {
    const { posts } = usePage().props;
    return (
        <section className="gallery pt-4 mt-2">
            <div className="container">
                <div className="row">
                    {posts &&
                        posts.map((post) => {
                            return (
                                <div className=" col-12 col-md-4 mb-4" key={post.id}>
                                    <div className="image-card shadow-lg rounded-3 overflow-hidden">
                                        <img
                                            src={post.post_image}
                                            alt="Post Image"
                                            className="img-fluid rounded-3"
                                            style={{
                                                objectFit: 'cover',
                                                height: '250px',
                                                width: '100%',
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
    
}

export default Gallery;
