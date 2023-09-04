
function Background(){
    return(
        <header>
              <div id="background">
        <div><p id="look">Look at your fav Meals</p></div>
        <div><p id="within">Within a few clicks, find meals that are accessible near you</p></div>
        <div id="background-2">
            <div id="flex-1">
           <p id="delivery"> <i className="fa-solid fa-motorcycle"></i> Delivery</p>
            <p id="pickup"> <i className="fa-solid fa-lock"></i> Pickup</p>
        </div>
        <div id="youraddress">
            <i className="fa-solid fa-location-dot"  id="loc1"></i>
           <input type="text" placeholder="Enter your Address" size="30"/><button id="findfood"> <i className="fa-solid fa-magnifying-glass" id="findloc" ></i> Find Food</button>
        </div>
        
        </div>
         <div id="image1"><img src='/image/image1.png' /></div> 
</div> 
        </header>
    )
}
export default Background;