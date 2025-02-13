import { FaGraduationCap } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';


export const WhyStudyAbroad = () => {
    const benefits = [
        {
            title: "World-Class Education",
            description: "Access to top-tier medical programs and facilities",
            icon: FaGraduationCap,
        },
        {
            title: "Global Exposure",
            description: "Gain international experience and cultural competence",
            icon: FaGlobeAmericas,
        },
        {
            title: "Cost-Effective",
            description: "Affordable tuition fees compared to many Western countries",
            icon: FaDollarSign,
        },
        {
            title: "Career Opportunities",
            description: "Enhance your prospects in the global healthcare industry",
            icon: FaUsers,
        },
    ]
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100
        
        flex flex-col items-center justify-center

        ">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Why Study MBBS Abroad?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2 flex items-center">
                                <benefit.icon className="w-6 h-6 mr-2" />
                                <span>{benefit.title}</span>
                            </h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}