import React, { useCallback, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { GuestInfo } from "../index";
import { locations, stays } from "../../context";
import "./Navbar.css";
import img from "../../triangleLogo.png";

const Navbar = ({ sethostelsInCity, setAvalible }) => {
  const [display, setDisplay] = useState({
    toggle: false,
    show: false,
    selectedCity: "",
  });
  
  const [guests, setGuests] = useState({ adults: 0, children: 0 });

  const handleIncrement = (type) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: prevGuests[type] + 1,
    }));
  };

  const handleDecrement = (type) => {
    if (guests[type] > 0) {
      setGuests((prevGuests) => ({
        ...prevGuests,
        [type]: prevGuests[type] - 1,
      }));
    }
  };

  const totalGuests = guests.adults + guests.children;

  const handleClick = () => {
    setDisplay({ toggle: true, show: false, selectedCity: "" });
  };

  const handleLocationClick = (city) => {
    setDisplay({ toggle: true, show: false, selectedCity: city });
  };

  const getCities = useCallback(
    (stays, target) => {
      const Cities = stays.filter((stay) => stay.city === target);
      setDisplay({ toggle: false, show: true });
      sethostelsInCity(Cities);
      setAvalible(true);
    },
    [display.selectedCity]
  );

  return (
    <>
      {display.toggle ? (
        <div
          className={
            display.show
              ? "app__navbar_overlay-disable"
              : "app__navbar_overlay slide-bottom"
          }
        >
          <div className="app__navbar-container">
            <div className="app__navbar-container_location">
              <input
                type="text"
                placeholder="Location"
                value={display.selectedCity}
                onChange={() => {}}
              />
            </div>
            <div className="app__navbar-container_guest">
              <input
                type="text"
                placeholder="Add Guests"
                value={`${totalGuests} Add Guests`}
                onChange={() => {}}
                readOnly
              />
            </div>
            <div className="app__navbar-container_logo">
              <button onClick={() => getCities(stays, display.selectedCity)}>
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="dropdown">
            <div className="locations">
              {locations.map((location, index) => (
                <div className="location" key={index}>
                  <HiLocationMarker className="location_img" />
                  <button onClick={() => handleLocationClick(location.city)}>
                    {location.city}
                  </button>
                  <span>{location.country}</span>
                </div>
              ))}
            </div>
            <div className="guest_info">
              <GuestInfo
                title={"Adults"}
                age={"Age 13 or Above"}
                number={guests.adults}
                onIncrement={() => handleIncrement("adults")}
                onDecrement={() => handleDecrement("adults")}
              />
              <GuestInfo
                title={"Children"}
                age={"Ages 2-12"}
                number={guests.children}
                onIncrement={() => handleIncrement("children")}
                onDecrement={() => handleDecrement("children")}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="app__navbar">
          <div className="app__navbar-logo">
            <div className="app__navbar-logo_img">
              <img src={img} alt="logo" />
            </div>
            <p>windbnb</p>
          </div>
          <div className="app__navbar-search">
            <div className="app__navbar-search_location">
              <input
                type="text"
                placeholder="Location"
                value={display.selectedCity}
                onChange={() => {}}
                onClick={() => handleClick()}
              />
            </div>
            <div className="app__navbar-search_guest">
              <input
                type="text"
                placeholder="Add Guests"
                value={`${totalGuests} Guest`}
                onChange={() => {}}
                onClick={handleClick}
              />
            </div>
            <div className="app__navbar-search-logo">
              <button onClick={handleClick}>
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* {display && (
        <div className="app__navbar">
          <div className="app__navbar-logo">
            <div className="app__navbar-logo_img">
              <img src={img} alt="logo" />
            </div>
            <p>windbnb</p>
          </div>
          <div className="app__navbar-search">
            <div className="app__navbar-search_location">
              <input
                type="text"
                placeholder="Location"
                value={selectedCity}
                disabled={toggle}
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <div className="app__navbar-search_guest">
              <input
                type="text"
                placeholder="Add Guests"
                disabled={toggle}
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <div className="app__navbar-search-logo">
              <button onClick={() => setToggle(!toggle)}>
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};
export default Navbar;
