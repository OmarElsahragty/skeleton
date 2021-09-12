import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import { Spinner } from "../../../components/Atoms";

import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

export const FeedbackCxt = React.createContext(null);

const FeedbackProvider = (props) => {
  const [isLoading, setLoading] = useState(false);

  const showAlertPopup = (type, msg) => {
    toast[type](msg);
  };

  function spinnerPromise(executionFunction) {
    return (...args) =>
      async (successMsg = "", showErr = true) => {
        setLoading(true);
        const { err, data } = await executionFunction(...args);
        setLoading(false);
        if (successMsg && !err) {
          toast.success(successMsg);
        }
        if (err && showErr) {
          toast.error(err);
        }
        return data;
      };
  }

  return (
    <FeedbackCxt.Provider
      value={{
        setLoading,
        showAlertPopup,
        spinnerPromise,
      }}
    >
      <ToastContainer
        transition={cssTransition({
          enter: "animate__animated animate__bounceIn",
          exit: "animate__animated animate__bounceOut",
        })}
        limit={3}
        position="bottom-center"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss
      />
      {isLoading && (
        <div className="defaultLoading">
          <Spinner loading={isLoading} />
        </div>
      )}
      {props.children}
    </FeedbackCxt.Provider>
  );
};

FeedbackProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeedbackProvider;
