import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <div style={{ backgroundColor:"#000066", width: "100%", height: "100%"}}>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <h1>L</h1>
          </label>
          <label className="logo">
            <Link to="/" style={{ color: "white" }}> Shop Now</Link></label>
          <ul>
            <li><Link className="active" to="/"> Home</Link></li>
            <li><Link to="/product" className="active">Product</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
            <li><Link to="/list" className="active">List</Link></li>
          </ul>
        </nav>
        <div style={{padding:"22px"}}>
          <h2 style={{ color: "white", fontSize: "30px" }}>What is a shopping cart?</h2><br />
          <p style={{ color: "white", fontSize: "20px" }}>Definition: A shopping cart on an online retailer's site is a piece of software that facilitates the purchase of a product or service. It accepts the customer's payment and organizes the distribution of that information to the merchant, payment processor and other parties.
          </p><br/>
          <h2 style={{ color: "white", fontSize: "30px" }}>Why shopping carts are important?</h2><br />
          <p style={{ color: "white", fontSize: "20px" }}>Shopping carts bridge the gap between shopping and buying, so having the best shopping cart software is extremely important on your website.
            It's likely that those just starting out in the market may be unfamiliar with the concept. Most people, especially those in the ecommerce industry, have likely made a purchase online at some point in their lives. That said, most consumers don't fully realize the need and capability that shopping carts have (besides leading a customer to checkout).

          </p><br/>
          <h2 style={{ color: "white", fontSize: "30px" }}>What options are there?</h2>
          <p style={{ color: "white", fontSize: "20px" }}>For those seriously considering the ecommerce platform route, it's important to know that there are two basic types of carts:
            Hosted shopping carts: A third-party firm "hosts" the solution and is responsible for server backups, maintenance and upgrades. The beauty of a hosted solution is that hosting comes free, which means it doesn't cost anything for the third party to keep your site functional on the Web. The main drawback with hosted solutions is that customers will be directed to another domain for payment processing.
            Licensed shopping carts: This type of solution allows business owners to build their own type of cart and customize it to their specific needs. There is much greater flexibility in changing features and functionality, as well as in adding third-party tools if need be. However, the upfront costs are often higher and require more hands-on expertise for troubleshooting issues and technical support.
            Hosted solutions are often recommended for those who are beginning their own venture because they require less technical expertise. That's not to say all new online retail store owners aren't adept in IT, but a hosted solution may free up time to focus on other aspects of operations. There are numerous providers of shopping cart software on the market today, and companies must first evaluate their individual needs before making a final decision on which solution is best for them.
          </p><br/>
        </div>

      </div>
      <div className='footerr'>
        <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}
    </div>
  )
}

export default About