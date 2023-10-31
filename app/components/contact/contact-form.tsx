"use client";

import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button/button";
import FormElements from "../ui/form-elements";

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // send message handler
  const sendMessageHander = (data: any) => {
    console.log("Data: ", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendMessageHander)} className="space-y-4">
      <div>
        <FormElements.Label>Full Name</FormElements.Label>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormElements.Input
              value={value}
              onChange={onChange}
              placeholder="Full Name"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Name is required",
            },
          }}
        />
        {errors.name && (
          <FormElements.FromError>{errors.name.message}</FormElements.FromError>
        )}
      </div>

      <div>
        <FormElements.Label>Email</FormElements.Label>
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormElements.Input
              type="email"
              value={value}
              onChange={onChange}
              placeholder="Email address"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Email address is required",
            },
          }}
        />
        {errors.email && (
          <FormElements.FromError>
            {errors.email.message}
          </FormElements.FromError>
        )}
      </div>

      <div>
        <FormElements.Label>Subject</FormElements.Label>
        <Controller
          name="subject"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormElements.Input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Subject"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Subject is required",
            },
          }}
        />
        {errors.subject && (
          <FormElements.FromError>
            {errors.subject.message}
          </FormElements.FromError>
        )}
      </div>

      <div>
        <FormElements.Label>Message</FormElements.Label>
        <Controller
          name="message"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormElements.Input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Message"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Message is required",
            },
          }}
        />
        {errors.message && (
          <FormElements.FromError>
            {errors.message.message}
          </FormElements.FromError>
        )}
      </div>

      <Button type="submit" fontSize="sm">
        Send message
      </Button>
    </form>
  );
};
