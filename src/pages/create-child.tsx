import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

import type { FieldValues } from "react-hook-form";

import Form from "components/common/Form";

const CreateChild = () => {
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });
  const [childImage, setChildImage] = useState({ name: "", url: "" });
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) =>
    setChildImage({ name: file?.name, url: result }),
    );
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (!childImage.name) return alert("Please select an image");

    await onFinish({
      ...data,
      photo: childImage.url,
      email: user.email,
    });
  };

  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      childImage={childImage}
    />
  );
};
export default CreateChild;
