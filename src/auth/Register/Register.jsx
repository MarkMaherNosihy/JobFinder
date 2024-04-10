import { Field, Form, Formik } from "formik";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {useNavigate} from 'react-router-dom'
const Register = (props) => {

    const navigate = useNavigate();
    const {signUp} = useAuth();
    const onRegister = (values)=>{
        signUp(values.email, values.password);
        navigate('/');
    }

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <div className="p-[3em] max-w-[600px] w-full min-h-[700px] bg-white shadow-lg flex flex-col gap-10">
        <h1 className="text-2xl font-bold text-center ">Register</h1>
        <div>
          <Formik
            initialValues={{
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
              accountType: "",
            }}
            onSubmit={(values)=>{ onRegister(values)}}
          >
            {({ values }) => (
              <Form>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail..."
                  className="w-full p-2 border my-4 rounded-lg"
                />
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your username..."
                  className="w-full p-2 border my-4 rounded-lg"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  className="w-full p-2 border my-4 rounded-lg"
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password..."
                  className="w-full p-2 border my-4 rounded-lg"
                />
                <div id="my-radio-group" className="font-semibold">Account type</div>
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className="flex flex-col  pt-2"
                >
                  <label>
                    <Field type="radio" name="accountType" value="developer" />
                    <span className="px-1">Developer</span>
                  </label>
                  <label>
                    <Field type="radio" name="accountType" value="Employer" />

                    <span className="px-1">Employer</span>
                  </label>
                </div>

                <button className="mt-10 p-3 text-center w-full bg-blue-600 rounded-lg text-white font-semibold">
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
