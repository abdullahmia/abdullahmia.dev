"use client";

import { useEffect, useState } from "react";

import { techStacks } from "@/app/constants";
import { useAddNewProjectMutation } from "@/app/redux/features/project/project.api";
import cogoToast from "cogo-toast";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "..";
import Editor from "../editor/editor";
import { ThumbnailUpload } from "../image-upload/thumbnail-upload";
import FormElements from "../ui/form-elements";

export const ProjectForm = () => {
  // Local state
  const [thunmbnail, setThumbnail] = useState<File | null>(null);

  // Hooks
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      thumbnail: "",
      title: "",
      liveLink: "",
      githubLink: "",
      technologies: "",
      description: "",
    },
  });

  const [addNewProject, { isLoading, isError, data, error, isSuccess }] =
    useAddNewProjectMutation();

  /**
   * HANDLERS
   */
  // Handle Thumbnail Upload
  const handleThumbnailUpload = (e: any) => {
    setThumbnail(e.target.files[0]);
  };

  // Handle Thumbnail Remove
  const handleThumbnailRemove = () => {
    setThumbnail(null);
  };

  // Handle Form Submit
  const handleFormSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("image", thunmbnail as File);
    formData.append("title", data.title);
    formData.append("description", data.description as string);
    formData.append("liveLink", data.liveLink);
    formData.append("githubLink", data.githubLink);
    formData.append("technologies", data.technologies);
    formData.append("status", "true");

    addNewProject(formData);
  };

  // handle draft submit
  const handleDraftSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("image", thunmbnail as File);
    formData.append("title", data.title);
    formData.append("description", data.description as string);
    formData.append("liveLink", data.liveLink);
    formData.append("githubLink", data.githubLink);
    formData.append("technologies", data.technologies);
    formData.append("status", "false");

    addNewProject(formData);
  };

  useEffect(() => {
    if (isError) {
      cogoToast.error("Something went wrong");
    }
    if (isSuccess) {
      cogoToast.success("Project published successfully");
      reset();
      setThumbnail(null);
      router.push("/admin/projects");
    }
  }, [isSuccess, isError, error, data, router, reset]);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-gray-100 dark:bg-[#101011] p-5"
    >
      <div>
        <Controller
          name="thumbnail"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              {/* Thumbnail Uploader */}
              <ThumbnailUpload
                handleThumbnailRemove={handleThumbnailRemove}
                handleThumbnailUpload={handleThumbnailUpload}
                thunmbnail={thunmbnail}
              />
            </>
          )}
          rules={{
            validate: {
              required: (value) => {
                if (thunmbnail?.name) {
                  return true;
                } else {
                  return "Thumbnail is required";
                }
              },
            },
          }}
        />
        {errors.thumbnail && (
          <FormElements.FromError>
            {errors.thumbnail.message}
          </FormElements.FromError>
        )}
      </div>

      <div className="mt-8 space-y-4">
        {/* Project Title */}
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <>
              <FormElements.Label withAsterisk>
                Project Title
              </FormElements.Label>
              <FormElements.Input
                placeholder="Start adding your project with a title"
                onChange={onChange}
                value={value}
              />
            </>
          )}
          rules={{
            required: {
              value: true,
              message: "Project title is required",
            },
          }}
        />
        {errors.title && (
          <FormElements.FromError>
            {errors.title.message}
          </FormElements.FromError>
        )}

        <div></div>

        <div className="flex items-center gap-5">
          <div className="w-full">
            <FormElements.Label withAsterisk>
              Project deployed link
            </FormElements.Label>
            <Controller
              name="liveLink"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormElements.Input
                  placeholder="Project deployed link"
                  width="full"
                  onChange={onChange}
                  value={value}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Project deployed link is required",
                },
                pattern: {
                  value: /https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
                  message: "Please enter a valid url",
                },
              }}
            />
            {errors.liveLink && (
              <FormElements.FromError>
                {errors.liveLink.message}
              </FormElements.FromError>
            )}
          </div>
          <div className="w-full">
            <FormElements.Label withAsterisk>
              Project codebase link
            </FormElements.Label>
            <Controller
              name="githubLink"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormElements.Input
                  placeholder="Project codebase link"
                  width="full"
                  onChange={onChange}
                  value={value}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Project codebase link is required",
                },
                pattern: {
                  value: /https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
                  message: "Please enter a valid url",
                },
              }}
            />
            {errors.githubLink && (
              <FormElements.FromError>
                {errors.githubLink.message}
              </FormElements.FromError>
            )}
          </div>
        </div>

        <div className="w-full">
          <FormElements.Label withAsterisk>Tech Stack</FormElements.Label>
          <Controller
            name="technologies"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Select
                options={techStacks}
                onChange={(selectedOptions) => {
                  const selectedLabels = selectedOptions.map(
                    (option: { label: string; value: string }) => option.label
                  );
                  onChange(selectedLabels);
                }}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Tech stack is required",
              },
            }}
          />
          {errors.technologies && (
            <FormElements.FromError>
              {errors.technologies.message}
            </FormElements.FromError>
          )}
        </div>

        <div>
          <FormElements.Label withAsterisk>Description</FormElements.Label>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Editor value={value} onChange={onChange} />
            )}
          />
          {errors.description && (
            <FormElements.FromError>
              {errors.description.message}
            </FormElements.FromError>
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        {/* Submit */}
        <Button loading={isLoading} type="submit" varriant="primary">
          Publish Project
        </Button>
        <Button
          loading={isLoading}
          onClick={handleSubmit(handleDraftSubmit)}
          varriant="secondary"
        >
          Save as draft
        </Button>
      </div>
    </form>
  );
};
