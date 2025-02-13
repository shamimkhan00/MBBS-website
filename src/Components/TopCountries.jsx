import React from "react";
import Flag from "react-world-flags";

export const TopCountries = () => {
  const countries = [
    { name: "Russia", code: "RU" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Philippines", code: "PH" },
    { name: "Georgia", code: "GE" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Egypt", code: "EG" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32
    
    flex flex-col items-center justify-center

    ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Top Countries for MBBS Abroad
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Flag code={country.code} style={{ width: "30px", height: "20px", marginRight: "8px" }} />
                <span>{country.name}</span>
              </h3>
              <p>Explore MBBS programs in {country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

