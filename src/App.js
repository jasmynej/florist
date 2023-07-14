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
        <div className="grid grid-cols-3">
            <div className="text-center p-2">
                <h1 className="text-3xl">Quality and Craftsmanship</h1>
                <p>We take great pride in our meticulous attention to
                    detail and commitment to excellence. Each arrangement
                    is carefully handcrafted by our skilled team of floral designers,
                    who combine their artistic flair with a keen eye for color, texture,
                    and arrangement. We source the finest seasonal blooms, selecting only
                    the freshest flowers to ensure longevity and breathtaking beauty.</p>
            </div>
            <div className="text-center p-2 text-white" style={{backgroundColor:"#7B1E7A"}}>
                <h1 className="text-3xl">Personalized Service</h1>
                <p>At Bloom & Grow Florist, we understand that every customer
                    and occasion is unique. We offer personalized consultations
                    to understand your vision, preferences, and requirements.
                    Whether you have a specific theme in mind or need guidance
                    in choosing the perfect flowers for your event, our friendly
                    and knowledgeable staff is here to assist you every step of the way.</p>
            </div>
            <div className="text-center p-2">
                <h1 className="text-3xl">Community and Sustainability</h1>
                <p>We are committed to giving back to our community and embracing
                    sustainable practices. We actively support local growers and
                    eco-friendly initiatives, minimizing our carbon footprint while
                    ensuring the highest quality and freshness of our blooms.
                    With every purchase, you contribute to our shared commitment
                    to environmental responsibility and supporting local businesses.
                </p>
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
