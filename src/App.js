import './App.css';
import DesktopLayout from "./components/DesktopLayout";

function App() {
  return (
    <DesktopLayout activePage="home">
        <div className="w-full h-full flex items-center" id="home-header">
            <div className="bg-white w-1/2 m-2 p-2">
                <h1 className="text-6xl p-2" id="title">Bloom & Grow Florists</h1>
                <h2 className="italic p-2 text-2xl font-thin" id="slogan">Where Nature's Beauty Blossoms</h2>
            </div>
        </div>
        <div id="mailing-list" className="h-1/2 flex items-center justify-center flex-col">
            <h1 className="text-5xl text-center p-1">Get 15% Off Your Next Order When you Sign Up for Updates</h1>
            <form className="m-3 w-2/3 flex items-center justify-center gap-2">
                <input type="text" className="w-2/3 p-2 rounded"/>
                <button className="p-2 text-white rounded" id="sign-up">Sign Up</button>
            </form>
        </div>
    </DesktopLayout>
  );
}


export default App;
