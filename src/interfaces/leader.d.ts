import type { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
  name: string;
  labelName: string;
}

export interface FormValues {
  name: string;
  description: string;
  leaderShipType: string;
  position: string;
  donations: number | undefined;
}

export interface LeaderCardProps {
  id?: BaseKey | undefined;
  name: string;
  position: string;
  leaderShipType: string;
  donations: string;
  photo: string;
}
