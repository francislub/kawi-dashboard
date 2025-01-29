import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import StarOutlineRounded from "@mui/icons-material/StarOutlineRounded";
import VillaOutlined from "@mui/icons-material/VillaOutlined";
import Logout from "@mui/icons-material/Logout";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  GitHubBanner,
  type LegacyAuthProvider as AuthProvider,
  Refine,
} from "@refinedev/core";
import {
  ErrorComponent,
  useNotificationProvider,
  ReadyPage,
  RefineSnackbarProvider,
} from "@refinedev/mui";

import routerProvider from "@refinedev/react-router-v6/legacy";
import dataProvider from "@refinedev/simple-rest";
import axios from "axios";
import { Header, Layout, Sider, Title } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import type { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

import {
  AgentProfile,
  Agents,
  AllChildren,
  CreateChild,
  EditChild,
  ChildDetails,
  AllLeaders,
  CreateLeader,
  EditLeader,
  LeaderDetails,
  AllChapterDenmark,
  CreateChapterDenmark,
  EditChapterDenmark,
  ChapterDenmarkDetails,
  AllChapterGermany,
  CreateChapterGermany,
  EditChapterGermany,
  ChapterGermanyDetails,
  AllChapterSwitzerland,
  CreateChapterSwitzerland,
  EditChapterSwitzerland,
  ChapterSwitzerlandDetails,
  Home,
  Login,
  MyProfile,
} from "pages";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

function App() {
  const authProvider: AuthProvider = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        const response = await fetch("https://nalongo-dashboard-server.onrender.com/api/v1/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: profileObj.name,
            email: profileObj.email,
            avatar: profileObj.picture,
          }),
        });

        const data = await response.json();

        if (response.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...profileObj,
              avatar: profileObj.picture,
              userid: data._id,
            }),
          );
        } else {
          return Promise.reject();
        }
      }
      localStorage.setItem("token", `${credential}`);

      return Promise.resolve();
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: async () => null,
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("https://nalongo-dashboard-server.onrender.com/api/v1")}
          notificationProvider={useNotificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "children",
              options: { label: "Children " },
              list: AllChildren,
              show: ChildDetails,
              create: CreateChild,
              edit: EditChild,
              icon: <VillaOutlined />,
            },
            {
              name: "leaders",
              list: AllLeaders,
              show: LeaderDetails,
              create: CreateLeader,
              edit: EditLeader,
              icon: <PeopleAltOutlined />,
            },
            {
              name: "chapter-denmark",
              options: { label: "Chapter Denmark " },
              list: AllChapterDenmark,
              show: ChapterDenmarkDetails,
              create: CreateChapterDenmark,
              edit: EditChapterDenmark,
              icon: <PeopleAltOutlined />,
            },
            {
              name: "chapter-switzerland",
              options: { label: "Chapter Switzerland " },
              list: AllChapterSwitzerland,
              show: ChapterSwitzerlandDetails,
              create: CreateChapterSwitzerland,
              edit: EditChapterSwitzerland,
              icon: <PeopleAltOutlined />,
            },
            {
              name: "chapter-germany",
              options: { label: "Chapter Germany " },
              list: AllChapterGermany,
              show: ChapterGermanyDetails,
              create: CreateChapterGermany,
              edit: EditChapterGermany,
              icon: <PeopleAltOutlined />,
            },
            {
              name: "agents",
              list: Agents,
              show: AgentProfile,
              icon: <PeopleAltOutlined />,
            },
            {
              name: "my-profile",
              options: { label: "My Profile " },
              list: MyProfile,
              icon: <AccountCircleOutlined />,
            },
            {
              name: "login",
              options: { label: "Login " },
              list: Login,
              icon: <Logout />,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          legacyRouterProvider={routerProvider}
          legacyAuthProvider={authProvider}
          LoginPage={Login}
          DashboardPage={Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
