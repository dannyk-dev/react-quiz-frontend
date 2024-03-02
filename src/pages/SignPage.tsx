import { ChangeEvent, FormEvent, useState } from "react";

interface IFormRegisterData {
  username?: string;
  email: string;
  password: string;
}

export const SignPage = () => {
  const [formData, setFormData] = useState<IFormRegisterData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    return null;
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Register an Account</h2>
        </div>

        <div className="form-control">
          <label htmlFor="username">Enter your username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Enter your password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <input type="submit" value="Sign in!" />
        </div>
      </form>
    </div>
  );
};
