import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/Firebase";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productSlice";
import { useNavigate } from "react-router-dom";


export default function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [progress, setProgress] = useState(0);
  const changeHandlar = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
    navigate("/")
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `productImage/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const uid = Math.random().toString(36).slice(2);
          dispatch(addProduct({ ...state, image: downloadURL, id: uid }));
        });
      }
    );
  };

  return (
    <div
      className="container shadow d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-center">Add Product</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          onChange={changeHandlar}
          name="title"
          value={state.title}
          type="title"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Product Name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          onChange={changeHandlar}
          name="description"
          value={state.description}
          className="form-control"
          placeholder="Detail Product Here"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="d-flex align-items-center justify-content-between shadow p-3 my--3">
        <form onSubmit={formHandler}>
          <input type="file" className="input" />
          <h2>Uploading done {progress}%</h2>
          <button type="submit" class="btn btn-primary mt-3">
            Post Data
          </button>
        </form>
      </div>
    </div>
  );
}
