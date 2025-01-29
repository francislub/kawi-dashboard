import EmailOutlined from "@mui/icons-material/EmailOutlined";
import SupervisorAccountOutlined from "@mui/icons-material/SupervisorAccountOutlined";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import LocationCity from "@mui/icons-material/LocationCity";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import { useGetIdentity } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import type { AgentCardProp, InfoBarProps } from "interfaces/agent";

function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack flex={1} minWidth={{ xs: "100%", sm: 300 }} gap={1.5} direction="row">
    {icon}
    <Typography fontSize={14} color="#808191">
      {name}
    </Typography>
  </Stack>
);

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfChildren,
  noOfLeaders,
  noOfChapterDenmark,
  noOfChapterGermany,
  noOfChapterSwitzerland,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";

    return `/agents/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
        },
      }}
    >
      <img
        src={
          checkImage(avatar)
            ? avatar
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
        }
        alt="user"
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142d">
            {name}
          </Typography>
          <Typography fontSize={14} color="#808191">
            Dashboard Agent
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
        >
          <InfoBar
            icon={<EmailOutlined sx={{ color: "#808191" }} />}
            name={email}
          />
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <InfoBar
            icon={<PeopleAltOutlined sx={{ color: "#808191" }} />}
            name={`Added ${noOfChildren} Children`}
          />
          <InfoBar
            icon={<SupervisorAccountOutlined sx={{ color: "#808191" }} />}
            name={`Added ${noOfLeaders} Leaders`}
          />
          <InfoBar
            icon={<SupervisorAccountOutlined sx={{ color: "#808191" }} />}
            name={`Added ${noOfChapterDenmark} in Chapter Denmark`}
          />
          <InfoBar
            icon={<SupervisorAccountOutlined sx={{ color: "#808191" }} />}
            name={`Added ${noOfChapterGermany} in Chapter Germany`}
          />
          <InfoBar
            icon={<SupervisorAccountOutlined sx={{ color: "#808191" }} />}
            name={`Added ${noOfChapterSwitzerland} in Chapter Switzerland`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
