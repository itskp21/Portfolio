"use client";

import { BentoGrid, CertificationBentoGridItem } from "@/components/ui/BentoGrid";

const certifications = [
  {
    name: "PyTorch For Deep Learning Bootcamp",
    image: "/assets/pytorch for deep learning bootcamp.jpg",
    url: "https://www.udemy.com/certificate/UC-f667ca50-5f34-4a3c-9bbe-d290249ba11d/",
  },
  {
    name: "Machine Learning by Andrew Ng",
    image: "/assets/Machine_Learning_Specialization.jpeg",
    url: "https://www.coursera.org/account/accomplishments/specialization/WUSKDU3WBE6Q",
  },
  {
    name: "Neural Network and Deep Learning",
    image: "/assets/Neural_Network_and_Deep_Learning.jpeg",
    url: "https://www.coursera.org/account/accomplishments/verify/UYQW6ZMKQKPA",
  },
  {
    name: "Convolutional Neural Network",
    image: "/assets/Convolutional Neural Network.jpeg",
    url: "https://www.coursera.org/account/accomplishments/certificate/4VCV742SA79M",
  },
  {
    name: "Improving Deep Neural Networks",
    image: "/assets/Improving HyperParameters_page-0001.jpg",
    url: "https://www.coursera.org/account/accomplishments/certificate/6B58XWEQFQLL",
  },
];

const CertificationList = () => {
  return (
    <section id="certification" className="py-20 w-full scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          My <span className="text-gradient">Certifications</span>
        </h2>

        <BentoGrid>
          {certifications.map((cert, index) => (
            <CertificationBentoGridItem key={index} {...cert} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default CertificationList;
