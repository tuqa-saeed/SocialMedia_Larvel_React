import react from "react";
import "../../../css/Feed/PostFeed.css";
import { Link, router, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
// import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faWifi, faWifi3 } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const PostCards = (props) => {
    const { posts, followUser } = props;
    const { auth } = usePage().props;

    const handleLike = (postId, is_liked) => {
        router.post(
            "/like-post",
            { post_id: postId, like: is_liked },
            { preserveScroll: true }
        );
    };

    const handleComment = (postId) => {
        router.post(
            "/comment-post",
            { post_id: postId },
            { preserveScroll: true }
        );
    };
    

    return (
        <>
            {posts.map((post) => (
                <div className="d-flex justify-content-center mb-4" key={post.id}>
                    <div className="post card bg-dark text-white p-3" style={{ borderRadius: "16px", width: "100%", maxWidth: "600px" }}>
                    
                        {/* Header */}
                        <div className="post-header bg-dark d-flex align-items-center mb-3">
                            <img
                                src={post.user.user_profile}
                                alt="Profile"
                                height="40"
                                width="40"
                                className="rounded-circle me-2"
                                style={{ objectFit: "cover", border: "2px solid #fff" }}
                            />
                            <div className="d-flex flex-column">
                                <span className="fw-bold">{post.user.name}</span>
                                {post.user.id !== auth.id && (
                                    <span
                                        role="button"
                                        onClick={() =>
                                            followUser(
                                                post.user.id,
                                                !post.user.is_followed
                                            )
                                        }
                                        className={`badge mt-1 ${
                                            post.user.is_followed ? "bg-success" : "bg-info"
                                        }`}
                                        style={{ cursor: "pointer", fontSize: "0.8rem" }}
                                    >
                                        {post.user.is_followed ? "Following" : "Follow"}
                                    </span>
                                )}
                            </div>
                        </div>
                        
                        {/* Caption */}
                        <div className="post-caption">
                            <span>{post.caption}</span>
                        </div>
    
                        {/* Post Image */}
                        <div
                            className="post-image mb-3"
                            style={{
                                backgroundImage: `url(${post.post_image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "300px",
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={post.post_image}
                                alt="Post"
                                className="img-fluid d-none"
                            />
                        </div>
    
                        {/* Post Actions */}
                        <div className="post-actions d-flex align-items-center mb-2">
                            <h5
                                role="button"
                                className="me-3 d-flex align-items-center"
                                onClick={() => handleLike(post.id, !post.is_liked)}
                                style={{ cursor: "pointer" }}
                            >
                                <FontAwesomeIcon
                                    icon={post.is_liked ? faHeart : faHeartRegular}
                                    className="me-1"
                                />
                                {post.likes_count}
                            </h5>
                            <h5
    role="button"
    className="d-flex align-items-center"
    onClick={() => handleComment(post.id)}
    style={{ cursor: "pointer" }}
>
    <FontAwesomeIcon
        icon={faComment}
        className="me-1"
    />
    {/* You can replace post.likes_count with post.comments_count later */}
    {post.comments_count}
</h5>

                        </div>
    
                        
                    </div>
                </div>
            ))}
        </>
    );
    
};

export default PostCards;
