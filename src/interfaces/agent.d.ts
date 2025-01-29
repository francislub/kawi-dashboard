import type { BaseKey } from "@refinedev/core";

export interface AgentCardProp {
  id?: BaseKey | undefined;
  name: string;
  email: string;
  avatar: string;
  noOfChildren: number;
  noOfLeaders: number;
  noOfChapterDenmark: number;
  noOfChapterGermany: number;
  noOfChapterSwitzerland: number;
}

export interface InfoBarProps {
  icon: ReactNode;
  name: string;
}
