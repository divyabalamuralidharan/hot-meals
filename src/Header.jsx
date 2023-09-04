function Header(){
    return(
        <header>
              <div className="demo">
        <div className="landing">
            <p id="hotmeals">Hot Meals</p>
            </div>
            <div>
            <p id="address"><strong> Deliver to: <i className="fa-solid fa-location-dot" id="loc"></i> </strong>Current Location <strong> Ashok Nagar, Chennai-600013</strong> </p>
        </div>
        <div id="login">
            <i className="fa-solid fa-magnifying-glass" id="sea" ></i><input type="text" placeholder="Search food" size="8" /> <button id="but"><i className="fa-solid fa-user"></i> Login</button>
        </div>
        
    </div> 
        </header>
    )
}

export default Header;