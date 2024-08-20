import React from "react";
import { FaTh } from "react-icons/fa";
import "./Navbar.css";
import { GoDotFill } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { PiUserCircleFill } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow d-flex justify-content-between w-100 z-1">
      <a className="navbar-brand editPencilIcon ms-3" href="#!">
        <h4>LOGO</h4>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <div className="navbar-nav mx-auto">
          <a className="nav-link" href="#!">
            <LuLayoutDashboard className="me-2" />
            Dashboard
          </a>
          <a className="nav-link" href="#!">
            <MdOutlineHomeWork className="me-2" />
            My Inventory
          </a>
          <a className="nav-link" href="#!">
            <FaTh className="me-2" />
            Leads
          </a>
          <a className="nav-link" href="#!">
            <FaRegUser className="me-2" />
            Customers
          </a>
          <a className="nav-link" href="#!">
            <AiOutlineTeam className="me-2" />
            My Team
          </a>
        </div>
      </div>

      <div className="d-flex align-items-center me-3">
        <a className="nav-link position-relative me-4" href="#!">
          <BsBell className="fs-3" />
          <span className="position-absolute top-0 start-100 translate-middle text-danger">
            <GoDotFill />
          </span>
        </a>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex align-items-center"
            href="#!"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <PiUserCircleFill className="text-success fs-1" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;