import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../auth/authContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const { user } = auth;
   
    if (user) {
      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();

    auth.login({ username: event.target.username.value, password: event.target.password.value });
  };

  return (
    <div className="login">
      <div className="ui grid centered">
        <form onSubmit={handleLogin}>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input type="text" name="username" placeholder="Username" />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="required field">
              <div className="ui icon input">
                <input type="password" name="password" placeholder="Password" />
                <i className="lock icon" />
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon" />
              </div>
            </div>
            {auth.error && (
              <div className="ui pointing red basic label">{auth.error}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
