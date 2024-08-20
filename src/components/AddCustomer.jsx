import React, { useState } from "react";

const AddCustomer = ({ showModal, setShowModal, addCustomer }) => {
  const [customer, setCustomer] = useState({
    type: "Buyer/Seller",
    name: "",
    location: "",
    need: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(customer);
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="conatiner modal-content">
        <div className="bg-white addingCustomer p-4 rounded-3">
          <h5 className="fw-bold">Add New Customer</h5>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="requirements">Property Type</label>
              <div className="radio-buttons">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Buyer/Seller"
                    checked={customer.type === "Buyer/Seller"}
                    onChange={handleChange}
                  />
                  Buyer / Seller
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Tenant"
                    checked={customer.type === "Tenant"}
                    onChange={handleChange}
                  />
                  Tenant
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Rental"
                    checked={customer.type === "Rental"}
                    onChange={handleChange}
                  />
                  Rental
                </label>
              </div>
            </div>
            <div className="form-group d-flex gap-2">
              <div>
                <label className="requirements">Name</label>
                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  placeholder="Write Here"
                  onChange={handleChange}
                  required
                  className="rounded-2 ps-2 border border-secondary"
                />
              </div>
              <div>
                <label className="requirements">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  placeholder="Write Here"
                  onChange={handleChange}
                  required
                  className="rounded-2 ps-2 border border-secondary"
                />
              </div>
              <div>
                <label className="requirements">Phone No.</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Write Here"
                  onChange={handleChange}
                  required
                  className="rounded-2 ps-2 border border-secondary"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="requirements">Property Address</label>
              <input
                type="text"
                name="location"
                value={customer.location}
                placeholder="Write Here"
                onChange={handleChange}
                required
                className="w-100 rounded-2 ps-2 border border-secondary"
              />
            </div>
            <div className="form-group">
              <label className="requirements">Need</label>
              <input
                type="text"
                name="need"
                value={customer.need}
                placeholder="Write Here"
                onChange={handleChange}
                required
                className="w-100 rounded-2 ps-2 border border-secondary"
              />
            </div>
            <div className="form-group">
              <label className="requirements">Remarks</label>
              <input
                type="text"
                name="remarks"
                value={customer.remarks}
                placeholder="Write Here"
                onChange={handleChange}
                required
                className="w-100 rounded-2 ps-2 border border-secondary"
              />
            </div>
            <div className="form-group">
              <label className="requirements">References</label>
              <input
                type="text"
                name="remarks"
                value={customer.remarks}
                onChange={handleChange}
                required
                className="w-100"
              />
            </div>
            <div className="form-group d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn border border-2 border-dark"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Customer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;