import React, { useContext } from "react";
import { APICxt, FeedbackCxt, AuthContext } from "../../HOCs/ContextWrappers";
import { AuthTemplate } from "../../templates";

const LandingPage = () => {
  const { CoreAPI } = useContext(APICxt);
  const { spinnerPromise } = useContext(FeedbackCxt);
  const { setAuthentication } = useContext(AuthContext);

  const login = async (user) => {
    const data = await spinnerPromise(CoreAPI.Auth.login)(user)();
    setAuthentication(data);
  };

  const register = async (user) => {
    const data = await spinnerPromise(CoreAPI.Auth.register)(user)();
    setAuthentication(data);
  };

  return <AuthTemplate login={login} register={register} />;
};

export default LandingPage;
