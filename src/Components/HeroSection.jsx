import { HeadLine } from "./HeadLine"

export const HeroSection = () => {
    return (
        <section className="w-full 
        
        styleHeroSection
        ">
            
            <HeadLine></HeadLine>

            <div className="flex flex-col items-center justify-center
            
            py-12 md:py-24 lg:py-32 xl:py-48 

            ">

                <div className="container px-4 md:px-6">

                    <div className="flex flex-col items-center space-y-4 text-center">

                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white  relative">
                                Study MBBS Abroad
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl relative">
                                Pursue your dream of becoming a doctor with world-class medical education in top international universities.
                            </p>
                        </div>
                        <a
                            href="#lead-form"
                            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-gray-100 relative"
                        >
                            Apply Now for MBBS Abroad
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}