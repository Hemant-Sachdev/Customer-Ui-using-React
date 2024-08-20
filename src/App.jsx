import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CustomerList from './components/CustomerList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddCustomer from './components/AddCustomer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:5000/customers');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter(customer => {
    if (filter === 'All') return true;
    return customer.type === filter;
  });

  const addCustomer = async (newCustomer) => {
    try {
      const response = await fetch('http://localhost:5000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomer),
      });
      const data = await response.json();
      setCustomers([...customers, data]);
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <h3 className='fw-bold'>Customers</h3>
          <button
            className='btn btn-primary newCustClass'
            onClick={() => setShowModal(true)}
          >
            + Add New Customer
          </button>
        </div>
      </div>
      <div className="container">
        <Header customers={customers} setFilter={setFilter} filter={filter} />
        <CustomerList customers={filteredCustomers} />
      </div>
      <Footer />
      <AddCustomer
        showModal={showModal}
        setShowModal={setShowModal}
        addCustomer={addCustomer}
      />
    </>
  );
};

export default App;