import React from 'react'
import '../Footer/footer.css'

const Footer = () => {
  return (
      <footer>
        <div class="container">
            <div class="footer-columns">
                <div class="footer-column">
                    <h3>Contact Us</h3>
                    <p>Address, Phone, Email</p>
                </div>
                <div class="footer-column">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>My Account</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Wish List</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter</p>
                    <input type="email" placeholder="Email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Fashion Store. All rights reserved.</p>
            </div>
        </div>
    </footer>

  )
}

export default Footer
