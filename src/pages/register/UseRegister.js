import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { auth, db } from "../../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function UseRegister() {
    const dispatch = useDispatch();
    const [state, setState] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);
  
    const handleChange = (e) => {
      setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = async (e) => {
      const { firstName, lastName, email, password } = state;
      e.preventDefault();
      setIsProcessing(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user.displayName = `${firstName} ${lastName}`;
          toast.success("Account Created");
          setState((prev) => ({ ...prev, uid: user.uid }));
          addDocOnFirebase();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode, errorMessage);
        })
        .finally(() => {
          setIsProcessing(false);
        });
  
      const addDocOnFirebase = async () => {
        try {
          await setDoc(doc(db, "users", state.uid));
          toast.success("Data successfully set in firestore");
        } catch (error) {
          toast.error(error)
        }
      };
    };
  
  return {
    dispatch,
    isProcessing,
    handleChange,
    handleSubmit,
    state,
  }
}
