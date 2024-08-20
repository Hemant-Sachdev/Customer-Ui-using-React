import React from 'react';
import CustomerCard from './CustomerCard';

const CustomerList = ({ customers }) => {
  return (
    <div>
      {customers.map((customer, index) => (
        <CustomerCard key={index} {...customer} />
      ))}
    </div>
  );
};

export default CustomerList;