const HeaderComponent = () => {
    return (
      <header>
        <div className='header-logo'><img src='https://preview.colorlib.com/theme/glint/images/logo.png.webp' alt='LogoPage' /></div>
        <div className='header-menu'>
          <span>Menu</span>
          <i class="fa fa-align-justify header-menu-bar"></i>
          <div class='header-nav'>
              <div class='header-nav-about'>
                <h3>
                  Navigation
                </h3>
                <i class="fa fa-times"></i>
              </div>
              <ul class='header-nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Works</li>
                <li>Clients</li>
                <li>Contact</li>
              </ul>
              <p class='header-nav-content'>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a class='header-nav-content-a'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>            
              <ul class='header-nav-social'>
                <li><i class="fab fa-facebook-f"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-behance"></i></li>
                <li><i class="fab fa-dribbble"></i></li> 
              </ul>
          </div>
        </div>
      </header>
    );
  };
  
  export default HeaderComponent;
  