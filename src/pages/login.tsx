import React, { useState } from 'react'
import Head from 'next/head'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const FieldTypes = [
    {
      id: 1,
      label: "Name",
      name: "first_name",
      inputType: "text",
      placeHolder: "Enter your name",
      value: "",
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      inputType: "email",
      placeHolder: "Enter your email",
      value: "",
    },
  ];

export default function Login() {
    const [formValues, setFormValues] = useState({
      first_name: "",
      email: "",
    });
    // This is the loading state which we use to manipulate some functionality with in the form
    const [loading, setLoading] = useState(false);
    //This is just the setup for the notification of the error message
    const notifyError = (e : string) => {
      toast.error(e, {
        position: toast.POSITION.TOP_CENTER
      });
    };
    //This is just the setup for the notification of the success message
    const notifySuccess = (e : string) => {
      toast.success(e, {
        position: toast.POSITION.TOP_CENTER
      });
    };
    // This section is use to change the formValues state on change event
    const handelChange = (e: any) => {
      setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    //This handels the button submit as well as validates that form fields are not empty
    const handelSubmit = () => {
      const { first_name, email } = formValues;
      if (
        first_name === "" ||
        email === ""
      ) {
        if (first_name === "") {
          notifyError("Name field is required!");
        }
        if (email === "") {
          notifyError("Email field is required!");
        }
        return;
      }
      setLoading(true);
      setTimeout(() => {
          notifySuccess("You have successfully signed up!");
        setLoading(false);
      }, 4000);
    };

  return (
    <>
      <Head>
        <title>Maurice App - Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full p-10">
        <ToastContainer />
        <section>
          <h1 className="text-3xl text-center font-bold">Signup</h1>
          <p className="text-sm px-4 pt-5 text-center">Welocme to Maurice App to login please enter your name and email address as specified in form below.</p>
        </section>
        <section>
          {FieldTypes.map((f) => {
            return (
              <div key={f.id} className="flex flex-wrap gap-1">
                <div className="pl-1 w-full text-sm py-2">
                  <label>{f.label}</label>
                </div>
                <input
                  type={f.inputType}
                  name={f.name}
                  placeholder={f.placeHolder}
                  onChange={(e) => handelChange(e)}
                  className={
                    f.inputType === "radio"
                      ? "w-5 h-5"
                      : "text-sm w-full rounded h-9 border border-gray-300 px-3"
                  }
                  defaultValue={f.value}
                />
                {f.inputType === "radio" ? <p>{f.value}</p> : ""}
              </div>
            );
          })}
          <button
            onClick={handelSubmit}
            disabled={loading ? true : false }
            className={loading ? "bg-blue-500 hover:bg-blue-600 rounded mt-4 h-9 w-full text-white cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 rounded mt-4 h-9 w-full text-white"}
          >
            {loading ? <div className="loader m-auto"></div> : <p>Submit</p>}
          </button>
        </section>
      </main>
    </>
  )
}