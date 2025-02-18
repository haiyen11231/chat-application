import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";

import { auth } from "../../firebase";

const Login = () => {
  return (
    <section className="login container">
      <div className="login-section">
        <h2 className="login-title">Welcome to Unichat!</h2>

        <button
          className="login-btn login-google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined style={{ marginRight: "5px" }} />
          Sign in with Google
        </button>

        <button
          className="login-btn login-facebook"
          // onClick={() =>
          //   auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          // }
        >
          <FacebookOutlined style={{ marginRight: "5px" }} />
          Sign in with Facebook
        </button>
      </div>
    </section>
  );
};

export default Login;
