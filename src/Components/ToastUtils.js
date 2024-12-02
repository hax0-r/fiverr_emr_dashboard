import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastUtils = (message, type = "info") => {
    toast(message, {
        type: type,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};
