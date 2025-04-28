// ProfileHeader.js

import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import React from "react";

function ProfileHeader(props) {
    const { auth, totalPosts, totalFollowers, totalFollowings } =
        usePage().props;

    return (
    <header>
        <div className="profile-header d-lg-flex justify-content-center ">
            <div className="col-lg-4 mb-2 mb-lg-0 d-flex align-items-center">
                {/* Profile Picture */}
                <img
                    src={auth.user_profile}
                    alt="Profile Picture"
                    className="profile-picture rounded-circle"
                    style={{ objectFit: 'cover', width: '100px', height: '100px' }}
                />
                <div className="flex-column text-start ms-3">
                    <h3 className="align-middle text-white">{auth.name}</h3>
                    <span className="text-muted">{auth.email}</span>
                </div>
            </div>

            {/* Profile Stats */}
            <div className="container d-flex justify-content-center gap-3 align-items-center">
            <div className="mb-4" style={{ width: "20%", transition: "all 0.8s ease", transform: "scale(1)", opacity: 1 }}>
             <div className="card shadow-sm border-0 rounded-4 text-white text-center" style={{
     background: "linear-gradient(135deg, #11998e, #38ef7d)",
      transition: "transform 0.5s, box-shadow 0.5s",
      cursor: "pointer"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    }}>
      <div className="card-body">
        <h4 className="card-title mb-2">Posts</h4>
        <h2 className="fw-bold">{totalPosts}</h2>
      </div>
    </div>
  </div>

  <div className="mb-4" style={{ width: "20%", transition: "all 0.8s ease", transform: "scale(1)", opacity: 1 }}>
    <div className="card shadow-sm border-0 rounded-4 text-white text-center" style={{
     background: "linear-gradient(135deg, #6a11cb, #2575fc",
      transition: "transform 0.5s, box-shadow 0.5s",
      cursor: "pointer"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    }}>
      <div className="card-body">
        <h4 className="card-title mb-2">Followers</h4>
        <h2 className="fw-bold">{totalFollowers}</h2>
      </div>
    </div>
  </div>

  <div className="mb-4" style={{ width: "20%", transition: "all 0.8s ease", transform: "scale(1)", opacity: 1 }}>
    <div className="card shadow-sm border-0 rounded-4 text-white text-center" style={{
      background: "linear-gradient(135deg, #ff6a00, #ee0979)",
      transition: "transform 0.5s, box-shadow 0.5s",
      cursor: "pointer"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    }}>
      <div className="card-body">
        <h4 className="card-title mb-2">Following</h4>
        <h2 className="fw-bold">{totalFollowings}</h2>
      </div>
    </div>
  </div>
</div>


                </div>
        

        {/* <div className="row mt-4 text-white">
            <h5>{auth.username}</h5>
            <h6 style={{ whiteSpace: "pre-line", lineHeight: 1.5 }}>
                {auth.bio}
            </h6>
        </div> */}
    </header>
);

        
}

export default ProfileHeader;
