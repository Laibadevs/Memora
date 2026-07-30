import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import AskMemora from '../components/AskMemora'
import ProjectOverview from '../components/ProjectOverview'
import AIMeetingMode from '../components/AIMeetingMode'
import CTASection from '../components/CTASection'
import Pricing from '../components/Pricing'
import Docs from '../components/Docs'
// import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-base text-memora-white font-body overflow-hidden">
            <Navbar />
            <main>
                <HeroSection />
                <HowItWorks />
                <AskMemora />
                <ProjectOverview />
                <AIMeetingMode />
                <Pricing />
                <Docs />
                <CTASection />
                {/* <FAQSection />       */}
            </main>
            <Footer />
        </div>
    )
}
