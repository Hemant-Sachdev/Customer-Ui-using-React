import React from 'react';
import { GoFilter } from "react-icons/go";
import '../App.css';

const Header = ({ customers, setFilter, filter }) => {
    const allCount = customers.length;
    const buySellCount = customers.filter(customer => customer.type === "Buyer/Seller").length;
    const rentalCount = customers.filter(customer => customer.type === "Rental").length;

    return (
    <div className="d-flex justify-content-between mb-4">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a 
            className={`nav-link ${filter === 'All' ? 'custom-active' : 'text-secondary'}`} 
            href="#!" 
            onClick={() => setFilter('All')}
          >
            All ({allCount})
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${filter === 'Buyer/Seller' ? 'custom-active' : 'text-secondary'}`} 
            href="#!" 
            onClick={() => setFilter('Buyer/Seller')}
          >
            Buy / Sell ({buySellCount})
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${filter === 'Rental' ? 'custom-active' : 'text-secondary'}`} 
            href="#!" 
            onClick={() => setFilter('Rental')}
          >
            Rental ({rentalCount})
          </a>
        </li >
      </ul >
    <button className="btn editPencilIcon"><GoFilter /> Filter</button>
    </div >
  );
};

export default Header;