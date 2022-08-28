import logo from "../../assets/images/Logo.svg";

export default function SignInForm() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <h3 className="my-3">Sign in</h3>
      <form action="">
        <input type="text" placeholder="Email, Phone, or Skype" />{<br/>}
        <input type="password" placeholder="Password" />
      </form>
      <p>No account? <a href=""> Create one!</a></p>
      <p><a href=""> Can’t access your account?</a></p>
    </div>
  );
}
