import DesktopNav from "./DesktopNav";

function DesktopLayout({children}){
    return(
        <div className="flex flex-col w-screen h-screen">
            <DesktopNav/>
            <main className="flex-auto w-screen overflow-y-auto">
                {children}
            </main>
            <footer className="text-center">
                <p>This Website is for demonstration purposes only. This is not a real company.</p>
            </footer>
        </div>
    )
}

export default DesktopLayout;