import { useFormDataContext } from "../../LOGIC/FormDataContext";
import "./Homepage.css";

export default function Homepage() {
  const { formData, formText, registerUser } = useFormDataContext();

  return (
    <main className="homepageContainer">
      <h1>Register</h1>
      <form className="registerForm" onSubmit={(e) => registerUser(e)}>
        <input
          name="name"
          value={formData.name}
          onChange={(e) => formText(e)}
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={(e) => formText(e)}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          value={formData.password}
          onChange={(e) => formText(e)}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
    </main>
  );
}
