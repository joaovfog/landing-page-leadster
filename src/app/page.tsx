'use client'
import Header from "./pages/header/header"
import FirstSection from "./pages/first-section/first-section"
import SecondSection from "./pages/second-section/secont-section"
import ThirdSection from "./pages/third-section/third-section"
import Footer from "./pages/footer/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </main>
  )
}
