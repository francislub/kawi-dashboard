import type { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
  name: string;
  labelName: string;
}

export interface FormValues {
  name: string;
  description: string;
}

export interface ChapterCardProps {
  id?: BaseKey | undefined;
  name: string;
  photo: string;
}
