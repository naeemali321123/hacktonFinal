import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { auth, db, storage } from "../../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref } from "firebase/storage";
import { login } from "../../store/authSlice";
import { async } from "@firebase/util";

export default function Register() {
  const navigate = useNavigate();

  const [state, setState] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("file ", state);
  };

  const handleSubmit = async (e) => {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPass,
      mobile,
      country,
      city,
      countryState,
      zipcode,
      profilePic,
      turmAndCondition,
    } = state;

    if (
      !firstName &&
      !lastName &&
      !userName &&
      !email &&
      !password &&
      !confirmPass &&
      !mobile &&
      !country &&
      !city &&
      !countryState &&
      !zipcode &&
      !profilePic &&
      !turmAndCondition
    ) {
      setError("Fill The All Input Feilds");
    } else {
      e.preventDefault();
      setIsProcessing(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const fullName = (user.displayName = `${firstName} ${lastName}`);
          user.phoneNumber = state.mobile;
          user.photoURL = addPhotOnfireStorage(state.profilePic);
          console.log("userCredential", user);
          toast.success("Account Created");
          setState((prev) => ({ ...prev, uid: user.uid, fullName }));
          addDocOnFirebase(state);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode, errorMessage);
        })
        .finally(() => {
          setIsProcessing(false);
        });
    }
  };
  const addPhotOnfireStorage = () => {
    const mountainsRef = ref(storage, "mountains.jpg");

    // Create a reference to 'images/mountains.jpg'
    const mountainImagesRef = ref(storage, "images/mountains.jpg");

    // While the file names are the same, the references point to different files
    // mountainsRef.name === mountainImagesRef.name;           // true
    // mountainsRef.fullPath === mountainImagesRef.fullPath;   // false
  };
  const addDocOnFirebase = async (state) => {
    // const  uid = Math.random().tostring(36).slice(2);
    console.log("addDocOnFierbase123", state);
    try {
      await setDoc(doc(db, "users", "Two"), state);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="container mt-5 d-flex m-auto justify-content-center align-items-center">
      <div className="m-2 p-3 shadow col-md-6">
        <div className="row text-center">
          <h1> Register your Account</h1>
        </div>
        <div className="row">
          <fodrm className="row g-3" method="post">
            <div className="col-12">
              <label for="validationServer01" className="form-label">
                First name
              </label>
              <input
                type="text"
                value={state.firsName}
                className="form-control"
                id="validationServer01"
                onChange={handleChange}
                name="firstName"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
              <label for="validationServer02" className="form-label">
                Last name
              </label>
              <input
                onChange={handleChange}
                name="lastName"
                value={state.lastName}
                type="text"
                className="form-control"
                id="validationServer02"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
              <label for="validationServerUsername" className="form-label">
                User Name
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend3">
                  @
                </span>
                <input
                  onChange={handleChange}
                  name="userName"
                  value={state.userName}
                  type="text"
                  className="form-control"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please choose a username.
                </div>
              </div>
              <div className="col-12">
                <label for="validationServer03" className="form-label">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  value={state.email}
                  type="email"
                  className="form-control"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                />
                <div
                  id="validationServer03Feedback"
                  className="invalid-feedback"
                >
                  Please provide a valid city.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer03" className="form-label">
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                value={state.password}
                type="password"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a Password.
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer03" className="form-label">
                Confirm Passport
              </label>
              <input
                onChange={handleChange}
                name="confirmPass"
                value={state.confirmPass}
                type="password"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a confirm password
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer03" className="form-label">
                Mobile
              </label>
              <input
                onChange={handleChange}
                name="mobile"
                value={state.mobile}
                type="number"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid Mobile #.
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer03" className="form-label">
                Country
              </label>
              <input
                onChange={handleChange}
                name="country"
                value={state.country}
                type="text"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid Country.
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer03" className="form-label">
                City
              </label>
              <input
                onChange={handleChange}
                name="city"
                value={state.city}
                type="text"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer04" className="form-label">
                State
              </label>
              <select
                className="form-select"
                name="countryState"
                value={state.countryState}
                id="validationServer04"
                aria-describedby="validationServer04Feedback"
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Punjab</option>
              </select>
              <div id="validationServer04Feedback" className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer05" className="form-label">
                Zip
              </label>
              <input
                onChange={handleChange}
                name="zipcode"
                value={state.zipcode}
                type="number"
                className="form-control"
                id="validationServer05"
                aria-describedby="validationServer05Feedback"
                required
              />
              <div id="validationServer05Feedback" className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12">
              <label for="validationServer05" className="form-label">
                Profile Picture
              </label>
              <input
                onChange={handleChange}
                name="profilePic"
                type="file"
                value={state.profilePic}
                className="form-control"
                id="validationServer05"
                aria-describedby="validationServer05Feedback"
                required
              />
              <div id="validationServer05Feedback" className="invalid-feedback">
                Please provide a Passport Size Pic.
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-check">
                <input
                  onChange={handleChange}
                  name="turmAndCondition"
                  className="form-check-input is-invalid"
                  type="checkbox"
                  value={state.turmAndCondition}
                  id="invalidCheck3"
                  aria-describedby="invalidCheck3Feedback"
                  required
                />
                <label className="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div id="invalidCheck3Feedback" className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {!isProcessing ? (
                <button
                  onClick={handleSubmit}
                  className="btn w-100 btn-success"
                  type="submit"
                >
                  Register
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="btn w-100 btn-success"
                  type="submit"
                >
                  <div className="spinner-border spinner-border-sm"></div>
                </button>
              )}
              <ToastContainer />
            </div>
          </fodrm>
        </div>
        <div className="col-12 my-3 fw-bold">
          <span className="fw-bold text-danger">{error}</span>
        </div>
        <div className="col-12 my-3 fw-bold">
          <Link to="/login">Login Account if you have Registered Account</Link>
        </div>
      </div>
    </div>
  );
}
