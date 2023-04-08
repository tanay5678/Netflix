import React from "react";
import Nav from "../componets/Nav";
import "./css_screen/profilescreen.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/User/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout } from "../features/User/userSlice";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profilescreen__body">
        <h1>Edit Profile</h1>
        <div className="profilescreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profilescreen__details">
            <h2>{user?.email}</h2>
            <button
              className="profilescreen__btn"
              onClick={() => signOut(auth).then(() => navigate("/"))}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
