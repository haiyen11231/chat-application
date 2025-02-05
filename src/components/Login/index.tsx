import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <section className="login container">
      <div className="login-section">
        <h2 className="login-title">Welcome to Unichat!</h2>

        <button className="login-btn login-google">
          <GoogleOutlined style={{ marginRight: "5px" }} />
          Sign in with Google
        </button>

        <button className="login-btn login-facebook">
          <FacebookOutlined style={{ marginRight: "5px" }} />
          Sign in with Facebook
        </button>
      </div>
    </section>
  );
};

export default Login;
