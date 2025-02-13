import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import localforage from "localforage";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  avatar: yup.string().url("Invalid URL").required("Avatar URL is required"),
});

const Form = ({ setTicket }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    // Load stored data on page refresh
    localforage.getItem("formData").then((data) => {
      if (data) {
        setValue("fullName", data.fullName);
        setValue("email", data.email);
        setValue("avatar", data.avatar);
      }
    });
  }, [setValue]);

  const onSubmit = async (data) => {
    await localforage.setItem("formData", data);
    setTicket(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name</label>
      <input type="text" {...register("fullName")} />
      <p className="errors">{errors.fullName?.message}</p>

      <label>Email</label>
      <input type="email" {...register("email")} />
      <p className="errors">{errors.email?.message}</p>

      <label>Avatar URL (Cloudinary)</label>
      <input type="text" {...register("avatar")} />
      <p className="errors">{errors.avatar?.message}</p>

      <button type="submit">Generate Ticket</button>
    </form>
  );
};

export default Form;
