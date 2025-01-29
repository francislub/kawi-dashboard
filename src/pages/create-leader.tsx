import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

import type { FieldValues } from "react-hook-form";

import LeaderForm from "components/common/LeaderForm";

const CreateLeader = () => {
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });
  const [leaderImage, setLeaderImage] = useState({ name: "", url: "" });
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
    setLeaderImage({ name: file?.name, url: result }),
    );
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (!leaderImage.name) return alert("Please select an image");

    await onFinish({
      ...data,
      photo: leaderImage.url,
      email: user.email,
    });
  };

  return (
    <LeaderForm
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      leaderImage={leaderImage}
    />
  );
};
export default CreateLeader;
