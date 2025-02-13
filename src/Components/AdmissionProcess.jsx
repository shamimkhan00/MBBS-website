export const AdmissionProcess = () => {

    const steps = [
        { title: "Research", description: "Explore universities and programs" },
        { title: "Eligibility Check", description: "Ensure you meet the requirements" },
        { title: "Document Preparation", description: "Gather all necessary documents" },
        { title: "Application Submission", description: "Apply to your chosen universities" },
        { title: "Entrance Exam", description: "Take required entrance exams (if applicable)" },
        { title: "Visa Process", description: "Apply for a student visa" },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100  flex flex-col items-center justify-center   ">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Admission Process & Eligibility
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
                                    {index + 1}
                                </span>
                                <span>{step.title}</span>
                            </h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}