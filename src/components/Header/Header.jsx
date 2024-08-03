import React from "react";
import "../Header/header.css";

const Header = () => {
  return (
    <>
      <section>
        <nav class="navbar">
          <div class="container">
            <div class="logo">
              <a href="#">Fashion Store</a>
            </div>
            <div class="category-dropdown">
              <button class="dropbtn">Categories</button>
              <div class="dropdown-content">
                <a href="#">Category 1</a>
                <a href="#">Category 2</a>
                <a href="#">Category 3</a>
              </div>
            </div>
            <div class="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <div class="user-links">
              <h3>Welcome!</h3>
              <a href="#">Sign In</a>
              <a href="#">Register</a>
            </div>
            <div class="cart">
              <a href="#">Cart (0)</a>
            </div>
          </div>
        </nav>
      </section>

      {/* mid header */}

      <section>
        <div class="mid_header">
          <h3>EN</h3>
          <h3>USD</h3>
          <h3>Contact (+94)37 1 234 567</h3>
        </div>
      </section>
    </>
  );
};

export default Header;
