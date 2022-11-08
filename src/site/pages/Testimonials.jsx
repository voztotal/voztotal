import React from "react";
import testimonials from "../../data/testimonials.json";
import Card from "react-bootstrap/Card";
import "../../css/pages/testimonials.css";

export const Testimonials = () => {
  return (
    <div className="section-separation container">
      <h1 className="heading__primary ">Testimonios</h1>
      <section className="testimonials__cardContainer">
        {testimonials.map((data) => (
          <Card style={{ width: "400px" }} className=" testimonial__card mb-4 mt-4" key={data.id}>
            <Card.Img
              style={{ width: "200px", margin: "0 auto" }}
              variant="top"
              src={data.logo}
            />
            <Card.Body>
              <Card.Title className="cardContainer__name">
                {data.name}
              </Card.Title>
              <Card.Title className="cardContainer__name">
                <small className="name">{data.role}</small>
              </Card.Title>
              <Card.Text className="cardContainer__description" style={{ width: "100%" }}>
                "{data.testimonio}"{" "}
              </Card.Text>
              <strong className="cardContainer__text cardContainer__text-center">
                {data.company}
              </strong>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};
