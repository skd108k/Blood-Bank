import React from "react";
import Form from "../../components/shared/form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner" style={bannerStyles}>
            <div className="image-overlay" style={overlayStyles}></div>
            <img
              src="./assets/images/banner2.jpg"
              alt="registerImage"
              style={imageStyles}
            />
          </div>
          <div className="col-md-4 form-container" style={formContainerStyles}>
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;

// Inline CSS styles
const bannerStyles = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
};

const imageStyles = {
  maxWidth: "800px",
  maxHeight: "600px",
  objectFit: "cover",
  zIndex: 0,
};

const formContainerStyles = {
  position: "relative",
  zIndex: 2,
};
