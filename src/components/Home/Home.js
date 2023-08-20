import { BsFillStarFill } from "react-icons/bs";
import { stays } from "../../context";
import { useState } from "react";
import "./Home.css";

const Home = ({ hostelsInCity, avalible, show }) => {
  return (
    <div>
      <div className="app__home section__padding">
        {/* Title section */}
        <div className="app__home-title">
          <h1>Stays in Finland</h1>
          {avalible ? (
            hostelsInCity.length > 12 ? (
              <p>12+ stays</p>
            ) : (
              <p>{hostelsInCity.length}</p>
            )
          ) : stays.length > 12 ? (
            <p>12+ stays</p>
          ) : (
            <p>{stays.length}</p>
          )}
        </div>
      </div>

      {avalible ? (
        <div className="room section__padding">
          {hostelsInCity.map(
            ({ photo, beds, type, rating, title, superHost }) => (
              <div
                className="app__home-rooms"
                key={new Date().getTime().toString() + title}
              >
                <div className="app__home-rooms_img">
                  <img src={photo} alt="room img" />
                </div>

                <div className="app__home-content">
                  <div className="app__home-content_features">
                    <div
                      className={
                        superHost ? "app__home_feature-hospitality" : "disable"
                      }
                    >
                      {superHost && <p>Super host</p>}
                    </div>

                    <div className="app__home-content_features-type">
                      <p>{type}</p>
                      {beds && <p>{beds} beds</p>}
                    </div>

                    <div className="app__home-content_features-rating">
                      <BsFillStarFill className="star" />
                      <p>{rating}</p>
                    </div>
                  </div>

                  <div className="app__home-content_title">
                    <h1>{title}</h1>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="room section__padding">
          {stays.map(({ photo, beds, type, rating, title, superHost }) => (
            <div
              className="app__home-rooms"
              key={new Date().getTime().toString() + title}
            >
              <div className="app__home-rooms_img">
                <img src={photo} alt="room img" />
              </div>

              <div className="app__home-content">
                <div className="app__home-content_features">
                  <div
                    className={
                      superHost ? "app__home_feature-hospitality" : "disable"
                    }
                  >
                    {superHost && <p>Super host</p>}
                  </div>

                  <div className="app__home-content_features-type">
                    <p>{type}</p>
                    {beds && <p>{beds} beds</p>}
                  </div>

                  <div className="app__home-content_features-rating">
                    <BsFillStarFill className="star" />
                    <p>{rating}</p>
                  </div>
                </div>

                <div className="app__home-content_title">
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
