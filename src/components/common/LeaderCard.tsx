import Place from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import type { LeaderCardProps } from "interfaces/leader";

const LeaderCard = ({
  id,
  name,
  position,
  leaderShipType,
  donations,
  photo,
}: LeaderCardProps) => {
  return (
    <Card
      component={Link}
      to={`/leaders/show/${id}`}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
        cursor: "pointer",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{ borderRadius: "10px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingX: "5px",
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={18} fontWeight={500} color="#808191">
            {name.toUpperCase()}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
          <Typography fontSize={16} color="#808191">
              Position:
            </Typography>
            <Typography fontSize={16} color="#808191">
              {position}
            </Typography>
          </Stack>
        </Stack>
        <Typography fontSize={16} color="#808191">
          Type: {leaderShipType}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LeaderCard;
