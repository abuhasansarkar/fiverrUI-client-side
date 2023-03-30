import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  // Profile Dropdown
  const [open, setOpen] = useState(false);
  // Stivky Navbar
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 10 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  // Active User
  const currentUser = {
    _id: 1,
    userName: "AbuHasan",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link">
            <span className="logo-text">
              fiverr<span className="dot">.</span>
            </span>
          </Link>
        </div>
        <div className="links">
          <Link to="/" className="link">
            <span>Fiverr Business</span>
          </Link>
          <Link to="/" className="link">
            <span>English</span>
          </Link>

          <Link to="/" className="link">
            <span>Sign in</span>
          </Link>
          {currentUser?.isSeller && (
            <Link to="/" className="link">
              <span>Become a Seller</span>
            </Link>
          )}
          {currentUser && (
            <Link to="/" className="link">
              <button>Join</button>
            </Link>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <Link>
                <img src="../../../public/img/abuhasan.jpg" alt="userPic" />
              </Link>
              <Link className="link">
                <span>{currentUser?.userName}</span>
              </Link>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link">
                        <span>Gigs</span>
                      </Link>
                      <Link className="link">
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  )}
                  <Link className="link">
                    <span>Orders</span>
                  </Link>
                  <Link className="link">
                    <span>Messages</span>
                  </Link>
                  <Link className="link">
                    <span>LogOut</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="container">
            <div className="manu">
              <Link to="/" className="link">
                <span>Graphics & Design</span>
              </Link>
              <Link to="/" className="link">
                <span>Digital Marketing</span>
              </Link>
              <Link to="/" className="link">
                <span>Writing & Translation</span>
              </Link>
              <Link to="/" className="link">
                <span>Video & Animation</span>
              </Link>
              <Link to="/" className="link">
                <span>Music & Audio</span>
              </Link>
              <Link to="/" className="link">
                <span>Programming & Tech</span>
              </Link>
              <Link to="/" className="link">
                <span>Photography</span>
              </Link>
              <Link to="/" className="link">
                <span>Business</span>
              </Link>
              <Link to="/" className="link">
                <span>AI Services</span>
              </Link>
            </div>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
