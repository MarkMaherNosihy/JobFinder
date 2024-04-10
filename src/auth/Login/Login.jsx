import React from "react"
import { Field, Form, Formik } from "formik";

const Login = (props) => {


  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
    <div className="p-[3em] max-w-[600px] w-full min-h-[700px] bg-white shadow-lg flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-center ">Login</h1>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
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
                type="password"
                name="password"
                placeholder="Enter your password..."
                className="w-full p-2 border my-4 rounded-lg"
              />
              <button type="submit" className="mt-10 p-3 text-center w-full bg-blue-600 rounded-lg text-white font-semibold">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  )
};

export default Login;
