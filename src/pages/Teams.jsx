import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Card } from "react-bootstrap";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      console.log(res.data.data);
      setTeams(res.data.data);
    });
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {teams.map((item) => {
          return (
            <div key={item.id} className="col-md-4 mb-3">
              <Fade delay={item.id * 10}>
                <Card>
                  <Card.Img variant="top" src={item.avatar} />
                  <Card.Body>
                    <Card.Title>{item.first_name}</Card.Title>
                    <Card.Text>{item.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
