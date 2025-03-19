import React from "react";
import { useState } from "react";
import { Col, Container, Figure } from "react-bootstrap";

const Create = () => {
  const [preview, setPreview] = useState();
  const [previewName, setPreviewName] = useState("");
  const [image, setImage] = useState("");

  const loadImage = (e) => {
    console.log(e.target.files[0]);
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
    setPreviewName(img.name);
  };

  return (
    <>
      <Container className="mt-3">
        <h3>Form Add Contacts Members</h3>
        <hr />
        <div className="mt-3 d-lg-flex flex-lg-row justify-content-center d-sm-flex flex-sm-column">
          <Col className="col-lg-6">
            <form action="">
              <div className="form-group my-3">
                <label>Full Name</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group my-3">
                <label>Email</label>
                <input className="form-control" type="email" />
              </div>
              <div className="form-group my-3">
                <label>Phone</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group my-3">
                <label>Image</label>
                <input
                  className="form-control"
                  type="file"
                  onChange={loadImage}
                />
              </div>
            </form>
          </Col>
          {/* tampilkan image */}
          {/* {preview ? true : false} */}
          {/* {preview && true} */}
          {preview && (
            <Col className="col-lg-5">
              <Figure>
                <Figure.Image
                  width="100%"
                  style={{ height: 300 }}
                  alt={previewName}
                  src={preview}
                  className="img-thumbnail"
                ></Figure.Image>
                <Figure.Caption>{previewName}</Figure.Caption>
              </Figure>
            </Col>
          )}
        </div>
      </Container>
    </>
  );
};

export default Create;
