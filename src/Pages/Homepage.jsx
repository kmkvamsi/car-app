import React from "react";
import sec1img from "../imgs/sec1img.png";
import Navbar from "../componens/Navbar";
import Card1 from "../componens/card1";
import div2img from "../imgs/div2img.png";
import sec3img from "../imgs/sec3img.png";

const Homepage = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${sec1img})` }}
        className="Homepage"
      >
        
        <div className="homediv1">
          <button>Book A Car</button>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1>How it works</h1>
        </div>

        <div>
          <div
            style={{ backgroundImage: `URL(${div2img})` }}
            className="howitworks"
          >
            <div className="howitworkscards">
              {" "}
              <Card1
                top={<ion-icon name="location"></ion-icon>}
                bottom={"choose your location"}
                end={
                  "Lorem sit am olore nemo a, volup ero fugit mollitia, sequi nam"
                }
              />{" "}
            </div>
            <div className="howitworkscards">
              {" "}
              <Card1
                top={<ion-icon name="calendar"></ion-icon>}
                bottom={"Pick A Date"}
                end={
                  "Lorem sit am olore nemo a, volup ero fugit mollitia, sequi nam"
                }
              />{" "}
            </div>
            <div className="howitworkscards">
              {" "}
              <Card1
                top={<ion-icon name="car"></ion-icon>}
                bottom={"Book Your Ride"}
                end={
                  "Lorem sit am olore nemo a, volup ero fugit mollitia, sequi nam"
                }
              />{" "}
            </div>
          </div>
        </div>

        <div className="ourservices">
          <div>
            <img src={sec3img} alt="" />
          </div>
          <div className="">
            <div>
              {" "}
              <h1>Best Services</h1>
            </div>
            <div>
              {" "}
              <h2>Feel The Best Experience Along With Our Rental Deals</h2>{" "}
            </div>
            <div>
              <div className="sec3divchilds">
                <div className="logos">
                  <ion-icon name="pricetag"></ion-icon>{" "}
                </div>
                <div
                  style={{
                    paddingTop: "1.2rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                >
                  <div className="logosheadings">Deals For Every Budget</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat quam atque nulla praesentium ad tenetur, ipsa eos,
                  </div>
                </div>
              </div>
              <div className="sec3divchilds">
                <div className="logos">
                  <ion-icon name="pricetag"></ion-icon>{" "}
                </div>
                <div
                  style={{
                    paddingTop: "1.2rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                >
                  <div className="logosheadings">Deals For Every Budget</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat quam atque nulla praesentium ad tenetur, ipsa eos,
                  </div>
                </div>
              </div>

              <div className="sec3divchilds">
                <div className="logos">
                  <ion-icon name="pricetag"></ion-icon>{" "}
                </div>
                <div
                  style={{
                    paddingTop: "1.2rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                >
                  <div className="logosheadings">Deals For Every Budget</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat quam atque nulla praesentium ad tenetur, ipsa eos,
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
