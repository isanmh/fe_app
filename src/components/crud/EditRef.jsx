import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Figure } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Api, Url } from "../../config/Api";
import Swal from "sweetalert2";

const EditRef = () => {
  const [preview, setPreview] = useState();
  const [previewName, setPreviewName] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState([]);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const res = await axios.get(`${Api}/${id}`);
    nameRef.current.value = res.data.data.name;
    emailRef.current.value = res.data.data.email;
    phoneRef.current.value = res.data.data.phone;
    setPreview(`${Url}/${res.data.data.image}`);
    setPreviewName(res.data.data.image);
  };

  const loadImage = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
    setPreviewName(img.name);
  };

  const updateContact = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("phone", phoneRef.current.value);
    try {
      await axios.put(`${Api}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        position: "center",
        title: "Data berhasil diupdate!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/services");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <>
      <Container className="mt-3">
        <h3>Form Edit Contact Member</h3>
        <hr />
        <div className="mt-3 d-lg-flex flex-lg-row justify-content-center d-sm-flex flex-sm-column">
          <Col className="col-lg-6">
            <form onSubmit={updateContact}>
              <div className="form-group my-3">
                <label>Full Name</label>
                <input className="form-control" type="text" ref={nameRef} />
                <div className="text-danger">
                  {errors.length > 0 && (
                    <div className="text-danger">
                      {errors.map((error) => (
                        <small key={error.path}>
                          {error.path === "name" ? error.msg : ""}{" "}
                        </small>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group my-3">
                <label>Email</label>
                <input className="form-control" type="email" ref={emailRef} />
                {errors.length > 0 && (
                  <div className="text-danger">
                    {errors.map((error) => (
                      <small key={error.path}>
                        {error.path === "email" ? error.msg : ""}{" "}
                      </small>
                    ))}
                  </div>
                )}
              </div>
              <div className="form-group my-3">
                <label>Phone</label>
                <input className="form-control" type="text" ref={phoneRef} />
                {errors.length > 0 && (
                  <div className="text-danger">
                    {errors.map((error) => (
                      <small key={error.path}>
                        {error.path === "phone" ? error.msg : ""}{" "}
                      </small>
                    ))}
                  </div>
                )}
              </div>
              <div className="form-group my-3">
                <label>Image</label>
                <input
                  className="form-control"
                  type="file"
                  onChange={loadImage}
                />
              </div>
              <button className="btn btn-primary mx-2" type="submit">
                Update Contact
              </button>
            </form>
          </Col>
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

export default EditRef;
