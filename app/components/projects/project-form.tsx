"use client";

import { useEffect, useState } from "react";

import { techStacks } from "@/app/constants";
import { useAddNewProjectMutation } from "@/app/redux/features/project/project.api";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import { Button } from "..";
import { ThumbnailUpload } from "../image-upload/thumbnail-upload";
import FormElements from "../ui/form-elements";

const Editor = dynamic(() => import("../editor/editor"), { ssr: false });

export const ProjectForm = () => {
  const [thunmbnail, setThumbnail] = useState<File | null>(null);
  const [description, setDescription] = useState(null);

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

  // handle editor content change
  const handleEditorContentChange = (value: any) => {
    setDescription(value);
  };

  // Handle Form Submit
  const handleFormSubmit = async (data: any) => {
    console.log(data);
    // make the form data
    const formData = new FormData();
    formData.append("image", thunmbnail as File);
    formData.append("title", data.title);
    formData.append("description", description as unknown as string);
    formData.append("liveLink", data.liveLink);
    formData.append("githubLink", data.githubLink);
    formData.append("technologies", data.technologies);

    await addNewProject(formData);
  };

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess, isError, error, data]);

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
              <FormElements.Label>Project Title</FormElements.Label>
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
            <FormElements.Label>Project deployed link</FormElements.Label>
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
            <FormElements.Label>Project codebase link</FormElements.Label>
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
          <FormElements.Label>Tech Stack</FormElements.Label>
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
          <Editor
            onChange={handleEditorContentChange}
            initialContent={JSON.stringify(
              [
                {
                  type: "paragraph",
                  children: [{ text: "A line of text in a paragraph." }],
                },
              ],
              null,
              2
            )}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        {/* Submit */}
        <Button type="submit" varriant="primary">
          Publish Project
        </Button>
        <Button varriant="secondary">Save as draft</Button>
      </div>
    </form>
  );
};
