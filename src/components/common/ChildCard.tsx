import Place from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import type { ChildCardProps } from "interfaces/child";

const ChildCard = ({
  id,
  name,
  childId,
  age,
  gender,
  grade,
  levelOfNeed,
  nationality,
  parentStatus,
  yearsLeftToGraduate,
  donations,
  photo,
}: ChildCardProps) => {
  return (
    <Card
      component={Link}
      to={`/children/show/${id}`}
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
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          paddingX: "5px",
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={18} fontWeight={500} color="#808191">
            {name.toUpperCase()}
          </Typography>
          <Typography fontSize={16} fontWeight={500} color="#808191">
            {childId}
          </Typography>
          <Typography fontSize={16} fontWeight={500} color="#808191">
            {gender.toUpperCase()}
          </Typography>
          <Typography fontSize={16} color="#808191">
            {grade}
          </Typography>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bgcolor="#dadefa"
          height="fit-content"
        >
          <Typography fontSize={12} fontWeight={600} color="#475be8">
            {age}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChildCard;
