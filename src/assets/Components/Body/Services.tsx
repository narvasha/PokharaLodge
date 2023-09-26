import { Image, SimpleGrid, Text, Title } from "@mantine/core";
import manHall from "../../Images/hotel.jpg";
import classes from "./Services.module.css";
import pool from "../../Images/pool.png";
import mountain from "../../Images/mountain.png";
import garden1 from "../../Images/garden.png";
import parking1 from "../../Images/parking.png";
import breakfast1 from "../../Images/breakfast.png";
import parking from "../../Images/parking.jpg";
import breakfast from "../../Images/breakfasttable.jpg";
import garden from "../../Images/Garden.jpg";
import view from "../../Images/view.jpg";
import { useEffect, useState } from "react";
import agoda from "../../Images/agoda.jpg";
import tripadvisor from "../../Images/tripadvisor.png";
import hostelworld from "../../Images/hostelworld.jpg";
import bookingcom from "../../Images/bookingcom.jpg";
export default function BestServices() {
  const [activeService, setActiveService] = useState(0);
  const services = [
    { name: " Mountain View", image: mountain },
    { name: "Garden", image: garden1 },
    { name: "Breakfast", image: breakfast1 },
    { name: "Parking", image: parking1 },
  ];
  const images = [view, garden, breakfast, parking];
  const handleIconClick = (index: any) => {
    setActiveService(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prevActiveService) =>
        prevActiveService === services.length - 1 ? 0 : prevActiveService + 1
      ),
        1000;
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        padding: "50px 50px 50px 50px",
        paddingRight: "30px",
        backgroundColor: "#F5F3F0",
      }}
    >
      <Title className={classes.title}>The best places to stay</Title>
      <Text className={classes.text}>
      You have a range of choices when it comes to making reservations,
        including platforms like TripAdvisor, Booking.com, Agoda, and
        Hostelworld.The lodge has received multiple awards, including
        TripAdvisor’s Travelers Choice Awards and Certificates of Excellence in
        several consecutive years.We have received the Travelers Choice Award in
        2017 and 2018, along with the Certificate of Excellence from 2013 to
        2023.
      </Text>

      <div style={{ position: "relative" }}>
        <SimpleGrid style={{ position: "absolute", top: "20%", zIndex: 1 }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                cursor: "pointer",
                transition: "ease",
              }}
              onClick={() => handleIconClick(index)}
            >
              <div className={classes.inner}>
                <Image src={service.image} className={classes.icon} />
              </div>
              <div
                className={classes.inner2}
                style={{ display: index === activeService ? "block" : "none" }}
              >
                <div>
                  <div style={{ display: "flex" }}>
                    <Image src={service.image} className={classes.icon} />
                    <div className={classes.detail}>
                      <Title className={classes.innerText}>
                        {service.name}
                      </Title>
                      <Text className={classes.innerParagraph}>
                        Enjoying the best, clear mountain views from our roof
                        top.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>

        <div
          style={{
            display: "flex",
            paddingLeft: "30px",
            width: "100%",
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              width: "75%",
              display: "flex",
              position: "relative",
              margin: "20px",
            }}
          >
            <Image
              src={images[activeService]}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <div className={classes.overlay}>
              <h4 className={classes.figCaption}>
                {services[activeService].name}
              </h4>
            </div>
          </div>

          <SimpleGrid p={"20px 0px 20px 20px"} w={"25%"}>
            <div className={classes.swimmingPool}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <a href="#">
                  {" "}
                  <Image src={tripadvisor} />
                  <Text className={classes.word}>Book Now</Text>{" "}
                </a>
              </div>
            </div>
            <div className={classes.meetingRooms}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                {/* <Text className={classes.count}>3</Text>
                <Text className={classes.word}>Meeting Rooms</Text> */}
                <a  href="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                }}>
                  {" "}
                  <Image
                    src={agoda}
                    style={{width:"50%"}}
                  />
                  <Text className={classes.word}>Book Now</Text>{" "}
                </a>
              </div>
            </div>
            <div className={classes.spa}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: " center",
                  padding: "20px",
                }}
              >
                {/* <Text className={classes.count}>18</Text>
                <Text className={classes.word}>Spa</Text> */}
                <a href="#" style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "center",
                    }}>
                  {" "}
                  <Image src={bookingcom} style={{width:"50%"}}
                  />
                  <Text className={classes.word}>Book Now</Text>{" "}
                </a>
              </div>
            </div>
            <div className={classes.restaurants}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                {/* <Text className={classes.count}>2</Text>
                <Text className={classes.word}>Restaurants</Text> */}
                <a href="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                }}>
                  {" "}
                  <Image src={hostelworld} style={{width:"50%"}} />
                  <Text className={classes.word}>Book Now</Text>{" "}
                </a>
              </div>
            </div>
          </SimpleGrid>
        </div>
      </div>
      
    </div>
  );
}
