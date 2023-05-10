import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Service() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-4">
        <p className="mt-4 text-xl font-bold text-[#FF3811]">Service</p>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="mb-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which <br /> don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
}
