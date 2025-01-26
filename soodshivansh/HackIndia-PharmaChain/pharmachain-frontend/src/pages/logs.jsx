import React from 'react';

const transactions = [
  {
    id: 1,
    from: '0x3A885338d3e5F022A087079Ff249cCFB6250e5Be',
    to: '0x3A885338d3e5F022A087079Ff249cCFB6250e5Be',
    amount: '100.0',
    date: '2024-10-01',
    status: 'Completed',
  },
  {
    id: 2,
    from: '0x3A885338d3e5F022A087079Ff249cCFB6250e5Be',
    to: '0x3A885338d3e5F022A087079Ff249cCFB6250e5Be',
    amount: '50.5',
    date: '2024-10-02',
    status: 'Completed',
  },
  {
    id: 3,
    from: '0x3A885338d3e5F022A087079Ff249cCFB6250e5Be',
    to: '0x3A885338d3e5F022A087079Ff249cCFB6250e5Be',
    amount: '75.25',
    date: '2024-10-03',
    status: 'Pending',
  },
];

const logs = () => {
  return (
    <div className="bg-gray-800">
    <div className="container mx-auto my-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Transaction Logs</h1>
      <table className="min-w-full bg-gray-700 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Transaction ID</th>
            <th className="py-2 px-4 text-left">From</th>
            <th className="py-2 px-4 text-left">To</th>
            <th className="py-2 px-4 text-left">Amount</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b border-gray-600 hover:bg-gray-600">
              <td className="py-2 px-4">{transaction.id}</td>
              <td className="py-2 px-4">{transaction.from}</td>
              <td className="py-2 px-4">{transaction.to}</td>
              <td className="py-2 px-4">{transaction.amount} ETH</td>
              <td className="py-2 px-4">{transaction.date}</td>
              <td className="py-2 px-4">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default logs;
