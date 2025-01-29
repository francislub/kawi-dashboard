export interface CustomButtonProps {
  type?: string;
  title: string;
  backgroundColor: string;
  color: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  handleClick?: () => void;
}

export interface ProfileProps {
  type: string;
  name: string;
  avatar: string;
  email: string;
  children: Array | undefined;
}

export interface ChildProps {
  _id: string;
  name: string;
  age: number;
  childId: string;
  gender: string;
  levelOfNeed: string;
  nationality: string;
  parentStatus: string;
  yearsLeftToGraduate: number;
  grade: string;
  donations: string;
  photo: string;
  creator: string;
}

export interface FormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues,
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  childImage: { name: string; url: string };
}

export interface LeaderFormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues,
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  leaderImage: { name: string; url: string };
}

export interface ChapterFormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues,
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  chapterImage: { name: string; url: string };
}