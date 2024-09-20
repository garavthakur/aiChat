

export default function Dashboard() {
    return (
    <>
  
      <header>
        <nav className="navbar navbar-expand-lg p-4 justify-content-md-end">
          <div className="container">
            <div className="header_col_1">
              <a className="navbar-brand" href="/">
                <img
                  src="/images/Ai-Bot-logo.png"
                  alt="Logo"
                  className="img-fluid"
                />
              </a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about_sec">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about_sec">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="header_col_3 d-flex justify-content-between p-0">
              <button className="btn btn-outline-dark text-light">
                Book Now
              </button>
            </div>
          </div>
        </nav>
      </header>
      <section id="banner_sec">
        <div className="container">
          <div className="row">
            <div className="overlay_text">
              <h1 className="text-light">Best AI Content Platform</h1>
              <p className="my-4 para_clr w-75 text-light">
                Your One-Stop Solution for Content Creation, Audio Generation,
                Image Crafting, & AI bot Development.
              </p>
              <div className="d-flex">
                <button className="btn btn-outline-dark text-light">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section service-section">
        <div className="container">
          <div className="service-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1"></div>
                  <div className="service-icon">
                    <img src="/images/ca-icon-1.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="title">Excellent Support</h3>
                    <p>
                      We&apos;re passionate about empowering creatives with the tools
                      they need to bring their vision to life that&apos;s why we&apos;ve
                      developed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1"></div>
                  <div className="service-icon">
                    <img src="/images/ca-icon-2.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="title">Reliable Expert</h3>
                    <p>
                      We keep on remodeling our schemes to bring more
                      improvement in our services so we could drag excellent
                      outcomes for our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1"></div>
                  <div className="service-icon">
                    <img src="/images/ca-icon-3.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="title">Unique Technology</h3>
                    <p>
                      We offer an easily accessible global communication network
                      facility to our clients to establish a captivating
                      environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1"></div>
                  <div className="service-icon">
                    <img src="/images/ca-icon-4.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="title">High Image Quality</h3>
                    <p>
                      We&apos;re passionate about empowering creatives with the tools
                      they need to bring their vision to life that&apos;s why we&apos;ve
                      developed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="powerful">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Powerful AI Features Built for Marketing</h2>
              <div className="powerful_info">
                <p>
                  We&apos;re passionate about empowering creatives with the tools
                  they need to bring their vision to life that&apos;s why we&apos;ve
                  developed.
                </p>
                <p>
                  Working globally with largest brands, We believe that safe. We
                  combine ideas and behaviours, and insights with that customers
                  love our services.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>Intelligent image
                    editing
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Customizable image
                    styles
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Unprecedented Image
                    Creation
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 exp_left text-center">
              <img
                src="/images/welcome-img.png"
                alt="powerful img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="working">
        <div className="container">
          <div className="row">
            <div className="head_sec text-center mb-5">
              <h2>How An AI Chatbot Works</h2>
            </div>
            <div className="working_graph d-flex justify-content-between align-items-center">
              <p>A bot recieves a query from user</p>

              <p>User query si analyzed</p>
              <p>User intent is identified</p>
              <p>A bot sends a reply</p>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container">
          <div className="row">
            <div className="head_sec text-center mb-5">
              <h2>
                Explore the power of AI Development tools Crafted with
                Brilliance, Style Quality and Creativity.
              </h2>
            </div>
            <div className="features_info">
              <ul>
                <li>
                  <h3>Generate Images</h3>
                  <p>
                    We are constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective.
                  </p>
                  <div>
                    <button className="btn btn-outline-dark">Read More</button>
                  </div>
                </li>
                <li>
                  <h3>Reimagine Any Image</h3>
                  <p>
                    We are constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective.
                  </p>
                  <div>
                    <button className="btn btn-outline-dark">Read More</button>
                  </div>
                </li>
                <li>
                  <h3>Generate Videos</h3>
                  <p>
                    We are constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective.
                  </p>
                  <div>
                    <button className="btn btn-outline-dark">Read More</button>
                  </div>
                </li>
                <li>
                  <h3>Remove Image Background</h3>
                  <p>
                    We are constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective.
                  </p>
                  <div>
                    <button className="btn btn-outline-dark">Read More</button>
                  </div>
                </li>
                <li>
                  <h3>Image Cleaning</h3>
                  <p>
                    We are constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective.
                  </p>
                  <div>
                    <button className="btn btn-outline-dark">Read More</button>
                  </div>
                </li>
                <li>
                  <h3>Generate Images</h3>
                  <p>
                    We are constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective.
                  </p>
                  <div>
                    <button className="btn btn-outline-dark">Read More</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 exp_left position-relative">
              <img
                src="/images/exp_img.png"
                alt="experience img"
                className="img-fluid"
              />
              <div className="stats-desc">
                <p className="stats_text">
                  <span>18+</span>
                  <br />
                  Years of Experience
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h2>
                We have mastery in all types of Artificial Intelligence services
                necessary for your business to outperform.
              </h2>
              <div className="progress_info">
                <div className="progress-inner">
                  <h6>Bulk of SMS</h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{width: "70%"}}
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="progress-inner">
                  <h6>Voice</h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{width: "85%"}}
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div className="progress-inner">
                  <h6>HLR Lookup</h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{width: "80%"}}
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div className="progress-inner">
                  <h6>Telecom Solution</h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{width: "70%"}}
                    >
                      70%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="register_sec">
        <div className="container">
          <div className="row text-center">
            <div className="padd">
              <h3 className="mb-4 text-light">
                Do you want fast, reliable & affordable communication channels
                and IT services for your business? Register us to book your
                slot.
              </h3>
              <form action="">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <button className="btn text-light theme_bg_clr" type="submit">
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <a className="navbar-brand" href="/">
                <img
                  src="/images/Ai-Bot-logo.png"
                  alt="Logo"
                  className="img-fluid"
                />
              </a>
              <nav className="navbar navbar-expand-sm my-md-4 my-sm-2 p-0">
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link text-light" href="/">
                        Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-light"
                        href="marina-and-harbour.php"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-light"
                        href="business-bay-and-downtown.php"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-light"
                        href="marina-and-harbour.php"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-light"
                        href="business-bay-and-downtown.php"
                      >
                        Sign In
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="d-flex align-items-center justify-content-center social_links">
                <a target="_blank" href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook me-3"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="copyright text-center mt-4">
                <p className="mb-0">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div></div>
    
  
    </>
  );
};
