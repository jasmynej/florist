import DesktopLayout from "../components/DesktopLayout";

function AboutPage(){
    return (
        <DesktopLayout activePage="about">
            <div className="w-screen text-center p-3">
                <p>Welcome to Bloom & Grow Florist, where we believe in the power of nature's beauty to brighten lives and create lasting memories. We are a boutique floral shop dedicated to providing exquisite floral arrangements for all occasions, curated with love and passion.</p>
            </div>
        </DesktopLayout>
    )
}

export default AboutPage;