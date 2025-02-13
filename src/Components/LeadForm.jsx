import { useState } from "react"

export const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
    })
    const [errors, setErrors] = useState({})

    const countries = ["Russia", "Uzbekistan", "Kazakhstan", "Philippines", "Georgia", "Kyrgyzstan", "Egypt"]

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required"
        if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid phone number is required"
        if (!formData.country.trim()) newErrors.country = "Country selection is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            alert("Form submitted successfully!")
            // Handle the form submission logic (e.g., send to backend)
            setFormData({ name: "", email: "", phone: "", country: "" }) // Clear form after submission
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
    return (
        <section id="lead-form" className="w-full py-12 md:py-24 lg:py-32  flex flex-col items-center justify-center   ">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Start Your MBBS Journey Abroad
                </h2>
                <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.phone ? "border-red-500" : ""}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${errors.country ? "border-red-500" : ""}`}
                    >
                        <option value="">Preferred Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country.toLowerCase()}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                        Submit Application
                    </button>
                </form>
            </div>
        </section>
    )
}