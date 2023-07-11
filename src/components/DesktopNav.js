import logo from "../images/flower-basket.png"
function DesktopNav(){
    return (
        <header id="desktop-nav" className="w-screen flex p-1">
            <div className="flex items-center w-full justify-between">
                <img src={logo} alt="bloom and grow logo" className="w-16"/>
                <div className="flex w-1/2 justify-between mr-1">
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Contact</p>
                </div>
            </div>
        </header>
    )
}

export default DesktopNav;