import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="mt-8 w-4/5 mx-auto">
        <h2 className="text-xl font-semibold mb-4">What is the supply chain?</h2>
        <ol className="list-decimal ml-6">
          <li>Supply chain is a path that products or services take from the producer to the consumer, involving multiple components and organizations.</li>
          <li>The components of the supply chain include producers, middlemen, shippers, warehouses, wholesalers, retailers, and consumers.</li>
          <li>The traditional supply chain involves multiple intermediaries, leading to increased prices at each level.</li>
          <li>Blockchain technology can be applied to supply chains to track and trace the entire process, ensuring transparency and simplifying the exchange of data and information.</li>
          <li>Certified Origins Italia is an example of a company using a complex supply chain to provide high-quality and traceable food products, such as premium olive oil.</li>
          <li>Natural disasters can disrupt supply chains, making it difficult for relief agencies to deliver goods and services to victims.</li>
          <li>Hurricane Dorian is mentioned as an example of a disaster that threatened supply chains needed for recovery efforts.</li>
          <li>Blockchain technology has the potential to help address obstacles in traditional supply chain implementations in the context of disaster recovery.</li>
        </ol>
  
        <h2 className="text-xl font-semibold mb-4">Supply chain challenges and blockchain solutions</h2>
        <ol className="list-decimal ml-6">
          <li>Lack of transparency: In traditional supply chains, data is often siloed within each organization, limiting visibility for other participants. Blockchain provides a transparent and shared ledger where every transaction and movement of products or services is recorded. All participants can view the data, ensuring transparency throughout the supply chain.</li>
          <li>Lack of traceability: Without transparent data, tracing the origin and journey of a product becomes difficult. Blockchain enables end-to-end traceability by recording every transaction and movement on the decentralized ledger. Participants can track a product's current location and trace its entire history back to the original producer.</li>
          <li>Time lag: Physical transfers in the supply chain often encounter delays, causing discrepancies between the timing of product movements and data updates. With blockchain and smart contracts, transactions can be automated, reducing human interaction and processing time. This enables real-time updates and eliminates the need to wait for data processing during specific work hours.</li>
          <li>Data inconsistency and loss: Data inconsistencies and loss can occur when transferring data between different organizations and systems. By using blockchain, all participants enter and access data through the smart contract interface, ensuring consistency throughout the supply chain. Data is securely stored on the blockchain, reducing the risk of loss or tampering.</li>
          <li>Non-standard and unavailable status tracking: Traditional supply chains often lack a standardized approach for tracking the status of products or services. Blockchain addresses this by providing a unified and accessible platform. Participants can query the blockchain to obtain real-time information about the location and status of a product, regardless of which organization or step in the supply chain they are involved with.</li>
        </ol>

        <h2 className="text-xl font-semibold mb-4">Blockchain solution examples</h2>
        <ol className="list-decimal ml-6">
          <li>
            Certified Origins Italia:
            <ul className="list-disc ml-6">
              <li>Producer of high-quality extra-virgin olive oil.</li>
              <li>Challenges in the olive oil industry with fraud and authenticity.</li>
              <li>Implemented blockchain solution with Oracle to boost consumer confidence.</li>
              <li>Customers can use a mobile app to trace every bottle of olive oil back to its origin.</li>
            </ul>
          </li>
          <li>
            Disaster Recovery Example:
            <ul className="list-disc ml-6">
              <li>PO8, a Bahama-based blockchain company, raising crypto for Hurricane Dorian relief.</li>
              <li>PO8 is a blockchain ecosystem for marine archeology and treasure hunting.</li>
              <li>Investors can buy PO8 tokens to fund recovery efforts.</li>
              <li>Found artifacts are auctioned off, and buyers can use PO8 tokens for purchases.</li>
            </ul>
          </li>
          <li>
            Addressing Supply Chain Issues with Blockchain:
            <ul className="list-disc ml-6">
              <li>Blockchain provides solutions to challenges in supply chain management.</li>
              <li>Certified Origins Italia's blockchain implementation enhances consumer trust.</li>
              <li>PO8's blockchain approach enables fundraising and artifact purchases using cryptocurrency.</li>
            </ul>
          </li>
          <li>
            Introduction to Cryptocurrency Tokens:
            <ul className="list-disc ml-6">
              <li>Explanation of PO8 tokens as a form of cryptocurrency.</li>
              <li>Tokens can be used to invest in PO8 and purchase artifacts in the auction.</li>
              <li>Ethereum mentioned as the blockchain platform used to create tokens.</li>
            </ul>
          </li>
        </ol>
      </section>
  </div>
  );
};

export default About;
