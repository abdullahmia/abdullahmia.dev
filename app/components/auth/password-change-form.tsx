"use client";

import { Controller, useForm } from "react-hook-form";
import { Button } from "..";
import FormElements from "../ui/form-elements";

interface PasswordChangeFormValue {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const PasswordChangeFrom = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleChangePassword = async (data: PasswordChangeFormValue) => {
    console.log("Data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(handleChangePassword)}>
      <div className="py-4">
        <FormElements.Label withAsterisk>Current Password</FormElements.Label>
        <Controller
          control={control}
          name="currentPassword"
          render={({ field: { value, onChange, onBlur } }) => (
            <FormElements.Input
              type="password"
              value={value}
              onChange={onChange}
              width="half"
              placeholder="Your current password"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Current password is required",
            },
          }}
        />
        {errors.currentPassword && (
          <FormElements.FromError>
            {errors.currentPassword.message}
          </FormElements.FromError>
        )}
      </div>

      <div className="py-4">
        <FormElements.Label withAsterisk>New Password</FormElements.Label>
        <Controller
          control={control}
          name="newPassword"
          render={({ field: { value, onChange, onBlur } }) => (
            <FormElements.Input
              type="password"
              value={value}
              onChange={onChange}
              width="half"
              placeholder="New password"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "New password is required",
            },
          }}
        />
        {errors.newPassword && (
          <FormElements.FromError>
            {errors.newPassword.message}
          </FormElements.FromError>
        )}
      </div>

      <div className="py-4">
        <FormElements.Label withAsterisk>Confirm Password</FormElements.Label>
        <Controller
          control={control}
          name="confirmNewPassword"
          render={({ field: { value, onChange, onBlur } }) => (
            <FormElements.Input
              type="password"
              value={value}
              onChange={onChange}
              width="half"
              placeholder="Confirm password"
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Confirm password is required",
            },
          }}
        />
        {errors.confirmNewPassword && (
          <FormElements.FromError>
            {errors.confirmNewPassword.message}
          </FormElements.FromError>
        )}
      </div>

      <Button type="submit">Change Password</Button>
    </form>
  );
};

export default PasswordChangeFrom;
