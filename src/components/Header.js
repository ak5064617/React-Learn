const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XjeQOF8TgkWx36r-CuALOo_5epkqiGln7dRR5i2yKJjQuYbk2e00s4UafQ&s"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul className="">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };


 export default Header;