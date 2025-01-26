import React from 'react';

interface Service {
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Supply Chain Tracking',
      description: 'Effortlessly track the journey of your products from source to destination.',
    },
    {
      title: 'Supply Chain Transparency',
      description: 'Ensure transparency throughout the supply chain with a shared ledger.',
    },
    {
      title: 'Product Traceability',
      description: 'Trace the origin and history of products to maintain quality and authenticity.',
    },
    {
      title: 'Automated Transactions',
      description: 'Streamline supply chain processes with automated transactions using smart contracts.',
    },
    {
      title: 'Data Consistency and Security',
      description: 'Ensure data consistency and security through blockchain technology.',
    },
    {
      title: 'Standardized Status Tracking',
      description: 'Track the status of products or services in a unified platform.',
    },
    {
      title: 'Consumer Confidence',
      description: 'Enhance consumer trust with transparent supply chain tracking and verification.',
    },
    {
      title: 'Fundraising and Cryptocurrency Integration',
      description: 'Utilize blockchain for fundraising efforts and integrate cryptocurrency in supply chain processes.',
    },
  ];

  return (
    <div>
      <div className='w-4/5 mx-auto'>
        <h1 className="text-center text-2xl md:text-4xl lg:text-6xl text-white mb-8 text-slate-900 pt-10">
          Our App Features
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto pt-10 pb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
