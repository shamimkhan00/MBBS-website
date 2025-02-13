import './App.css'
import { HeroSection } from './Components/HeroSection'
import { WhyStudyAbroad } from './Components/WhyStudyAbroad'
import { TopCountries } from './Components/TopCountries'
import { AdmissionProcess } from './Components/AdmissionProcess'
import { LeadForm } from './Components/LeadForm'
import { HeadLine } from './Components/HeadLine'

function App() {

  

  return (
    <>
      <div className="">
        {/* <HeadLine></HeadLine> */}
        <HeroSection></HeroSection>
        <WhyStudyAbroad></WhyStudyAbroad>
        <TopCountries></TopCountries>
        <AdmissionProcess></AdmissionProcess>
        <LeadForm></LeadForm>
      </div>
    </>
  )
}

export default App
