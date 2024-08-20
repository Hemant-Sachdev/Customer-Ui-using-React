import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RiPencilLine } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";

const CustomerCard = ({ type, name, location, need, remarks }) => {
  return (
    <div className="mb-4 border border-1 border-secondary-subtle shadow-sm position-relative rounded-3">
      <div className="position-absolute top-0 translate-middle ms-5">
        <span
          className={`${
            type === "Rental" ? "rentalClass" : "buyerSellerClass"
          } ms-5 rounded-1 text-white px-3`}
        >
          {type}
        </span>
      </div>
      <div className="px-3 py-4">
        <div className="customer-card-flex">
          <div className="d-flex align-items-start border-end border-2 border-secondary-subtle">
            <div className="me-2">
              <div className="d-flex gap-2">
                <h6 className="mb-1">{name}</h6>
                <p className="text-danger hot-tag">🔥 Hot</p>
              </div>
              <p className="mb-0 text-muted small d-flex align-items-center">
                <CiLocationOn className="me-2 text-secondary" />
                {location}
              </p>
            </div>
          </div>

          <div className="customer-card-section border-end border-2 border-secondary-subtle pe-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-1 requirements">Need</h6>
              <RiPencilLine className="editPencilIcon" />
            </div>
            <p className="text-muted small">{need}</p>
          </div>

          <div className="customer-card-section">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-1 requirements">Remarks</h6>
              <RiPencilLine className="editPencilIcon" />
            </div>
            <p className="text-muted small">{remarks}</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between px-3 pb-3">
        <div className="d-flex align-items-center">
          <MdLocalPhone className="me-3 commonIcons" />
          <RiMessage2Fill className="me-3 commonIcons" />
          <FaEnvelope className="me-3 commonIcons" />
          <IoLogoWhatsapp className="me-3 text-success commonIcons" />
          <BsDownload className="me-3 commonIcons" />
        </div>
        <div className="d-flex align-items-center">
          <button className="btn border border-2 border-dark rounded-2 btn-sm me-2 text-dark fw-bold">
            View Past Deals
          </button>
          <button className="btn border border-2 border-dark rounded-2 btn-sm me-2 text-dark fw-bold">
            References
          </button>
          <button className="btn border border-2 border-dark rounded-2 btn-sm text-dark fw-bold">
            Edit Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
