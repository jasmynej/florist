import './App.css';
import DesktopLayout from "./components/DesktopLayout";

function App() {
  return (
    <DesktopLayout>
        <div className="w-full h-full flex items-center" id="home-header">
            <div className="bg-white w-1/2 m-2 p-2">
                <h1 className="text-6xl p-2" id="title">Bloom & Grow Florists</h1>
                <h2 className="italic p-2 text-2xl font-thin" id="slogan">Where Nature's Beauty Blossoms</h2>
            </div>
        </div>
        <div id="promos">
            promos
        </div>
    </DesktopLayout>
  );
}


export default App;
