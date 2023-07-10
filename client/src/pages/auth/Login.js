import React from "react";
import Form from "../../components/shared/form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner" style={bannerStyles}>
            <div className="image-overlay" style={overlayStyles}></div>
            <img
              src="./assets/images/banner1.jpg"
              alt="loginImage"
              style={imageStyles}
            />
          </div>
          <div className="col-md-4 form-container" style={formContainerStyles}>
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

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
  maxWidth: "500px",
  maxHeight: "400px",
  objectFit: "cover",
  zIndex: 0,
};


const formContainerStyles = {
  position: "relative",
  zIndex: 2,
};
