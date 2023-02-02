import Head from "next/head";
import { useState } from "react";

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
    label: "Surname",
    name: "last_name",
    inputType: "text",
    placeHolder: "Enter your surname",
    value: "",
  },
  {
    id: 3,
    label: "Contact Number",
    name: "contact_number",
    inputType: "tell",
    placeHolder: "Enter contact number",
    value: "",
  },
  {
    id: 4,
    label: "Email",
    name: "email",
    inputType: "email",
    placeHolder: "Enter your email",
    value: "",
  },
  {
    id: 5,
    label: "Gender",
    name: "gender",
    inputType: "radio",
    value: "male",
  },
  {
    id: 6,
    name: "gender",
    inputType: "radio",
    value: "female",
  },
  {
    id: 7,
    name: "gender",
    inputType: "radio",
    value: "rather not say",
  },
];

export default function Signup() {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  const handelChange = (e: any) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = () => {
    const { first_name, last_name, email, contact_number, gender } = formValues;
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      contact_number === "" ||
      gender === ""
    ) {
      if (first_name === "") {
        alert("name field is required");
      }
      if (last_name === "") {
        alert("surname field is required");
      }
      if (email === "") {
        alert("surname field is required");
      }
      if (contact_number === "") {
        alert("contact number field is required");
      }
      if (gender === "") {
        alert("gender field is required");
      }
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert("You have successfully signed up!");
      setLoading(false);
    }, 4000);
  };

  return (
    <>
      <Head>
        <title>Maurice App - Signup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full p-10">
        <section>
          <h1 className="text-3xl text-center font-bold">Signup</h1>
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
            className="bg-blue-500 hover:bg-blue-600 rounded mt-4 h-9 w-full text-white"
          >
            {loading ? <div className="loader m-auto"></div> : <p>Submit</p>}
          </button>
        </section>
      </main>
    </>
  );
}