import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex   justify-center flex-wrap gap-9">
      {services.map((item) => (
        <ServiceCard key={item.label} {...item} />
      ))}

      <div className="flex justify-center  flex-wrap items-center gap-9  ">
        {services.map((item) => (
          <ServiceCard key={item.label} {...item} />
        ))}
        {services.map((item) => (
          <ServiceCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
