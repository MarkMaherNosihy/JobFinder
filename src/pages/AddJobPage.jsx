import { Form, Formik, Field } from "formik";
import {useNavigate} from 'react-router-dom'
import React from "react";

const AddJobPage = (props) => {
    const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          type: "",
          title: "",
          location: "",
          description: "",
          salaryFrom: "",
          salaryTo: "",
          company: {
            name: "",
            description: "",
            email: "",
            phoneNumber: ""
          }
        }}
        onSubmit={(values) => {
            const jobData = {
                type: values.type,
                title: values.title,
                location: values.location,
                description: values.description,
                salary: `$${values.salaryFrom} - $${values.salaryTo}`,
                company: {
                    name: values.company.name,
                    description: values.company.description,
                    contactEmail: values.company.email,
                    contactPhone: values.company.phoneNumber,
                }
            }
            const postJob = async ()=>{
                const response = await fetch('/api/jobs',{
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(jobData)
                })
            }
            postJob();
            return navigate('/jobs');

        }}
      >
        {(params) => {
          return (
            <Form className="flex flex-col items-center justify-center min-h-[90vh]">
              <div className="flex flex-col min-h-[700px] max-w-[600px] w-[100%] bg-white shadow-lg p-10">
                <h1 className="text-3xl text-center mb-2 font-bold">Post a Job</h1>
                <div className="flex flex-col">
                  <label htmlFor="type" className="py-2 font-semibold">
                    Type
                  </label>
                  <Field
                    as="select"
                    name="type"
                    id="type"
                    className="bg-blue-100 w-full rounded p-2"
                  >
                    <option value="">Choose a type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                  </Field>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="title" className="py-2 font-semibold">
                    Job title
                  </label>
                  <Field
                    name="title"
                    id="title"
                    className="bg-gray-100 w-full rounded p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="description" className="py-2 font-semibold">
                    Job Description
                  </label>
                  <Field name="description">
                    {({ field, form, meta }) => {
                      return (
                        <textarea
                          id="description"
                          className="bg-gray-100 h-[120px] w-full rounded p-2"
                          type="text"
                          {...field}
                        ></textarea>
                      );
                    }}
                  </Field>
                </div>
                <label htmlFor="salaryFrom" className="py-2 font-semibold">
                  Salary
                </label>
                <div className="flex flex-row gap-5 pt-2">
                  <div className="flex flex-row  gap-2">
                    <label htmlFor="salaryFrom" className="py-2">
                      From
                    </label>
                    <Field
                      name="salaryFrom"
                      id="salaryFrom"
                      className="bg-gray-100 w-full rounded p-2"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <label htmlFor="salaryTo" className="py-2">
                      To
                    </label>
                    <Field
                      name="salaryTo"
                      id="salaryTo"
                      className="bg-gray-100 w-full rounded p-2"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="location" className="py-2 font-semibold">
                    Location
                  </label>
                  <Field
                    name="location"
                    id="location"
                    className="bg-gray-100 w-full rounded p-2"
                    type="text"
                  />
                </div>
                <hr className="mt-5"/>
                <h1 className="text-2xl py-2 font-bold">Compnay info</h1>

                <div className="flex flex-col">
                  <label htmlFor="company-name" className="py-2 font-semibold">
                    Company name
                  </label>
                  <Field
                    name="company.name"
                    id="company-name"
                    className="bg-gray-100 w-full rounded p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="company-details" className="py-2 font-semibold">
                    Company details
                  </label>
                  <Field name="company.description">
                    {({ field, form, meta }) => {
                      return (
                        <textarea
                          id="company.description"
                          className="bg-gray-100 h-[120px] w-full rounded p-2"
                          {...field}
                        ></textarea>
                      );
                    }}
                  </Field>
                </div>
                <div className="flex flex-col">

                  <label htmlFor="company-email" className="py-2 font-semibold">
                    Contact e-mail
                  </label>
                  <Field
                    name="company.email"
                    id="company-email"
                    className="bg-gray-100 w-full rounded p-2"
                    type="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="company-phoneNumber" className="py-2 font-semibold">
                    Phone number
                  </label>
                  <Field
                    name="company.phoneNumber"
                    id="company-phoneNumber"
                    className="bg-gray-100 w-full rounded p-2"
                    type="text"
                  />
                </div>
                <button className="p-2 bg-blue-700 my-5 text-white font-semibold hover:bg-blue-500">
                  Post job
                </button>
              </div>

            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddJobPage;
