import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { PieChart, ChildReferrals, TotalRevenue, ChildCard } from "components";
import { childReferralsInfo } from "constants/index";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "children",
    config: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  const leadersData = useList({
    resource: "leaders",
    config: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  const chapterDenmarkData = useList({
    resource: "chapter-denmark",
    config: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  const chapterGermanyData = useList({
    resource: "chapter-germany",
    config: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  const chapterSwitzerlandData = useList({
    resource: "chapter-switzerland",
    config: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  const latestChildren = data?.data ?? [];

  const noOfChildren = latestChildren.length;
  const noOfLeaders = leadersData?.data?.data?.length;
  const noOfChapterDenmark = chapterDenmarkData?.data?.data?.length;
  const noOfChapterGermany = chapterGermanyData?.data?.data?.length;
  const noOfChapterSwitzerland = chapterSwitzerlandData?.data?.data?.length;

  // Male children filter
  const maleChildren = latestChildren.filter(
    (child) => child.gender === "male"
  );
  const numberOfMaleChildren = maleChildren.length;
  const malePercentage = Math.round(
    (numberOfMaleChildren / noOfChildren) * 100
  );

  // Female children filter
  const femaleChildren = latestChildren.filter(
    (child) => child.gender === "female"
  );
  const numberOfFemaleChildren = femaleChildren.length;
  const femalePercentage = Math.round(
    (numberOfFemaleChildren / noOfChildren) * 100
  );

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Something went wrong!</Typography>;

  interface ProgressBarProps {
    title: string;
    percentage: number;
    color: string;
  }

  const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <Box width="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={500} color="#11142d">
          {title}
        </Typography>
        <Typography fontSize={16} fontWeight={500} color="#11142d">
          {percentage}%
        </Typography>
      </Stack>
      <Box
        mt={2}
        position="relative"
        width="100%"
        height="8px"
        borderRadius={1}
        bgcolor="#e4e8ef"
      >
        <Box
          width={`${percentage}%`}
          bgcolor={color}
          position="absolute"
          height="100%"
          borderRadius={1}
        />
      </Box>
    </Box>
  );

  const percentages = [malePercentage, femalePercentage];

  const renderProgressBars = () => {
    return percentages.map((percentage, index) => {
      const barData = childReferralsInfo[index];
      return (
        <Stack key={barData.title} my="20px" direction="column" gap={4}>
          <ProgressBar
            title={barData.title}
            percentage={percentage}
            color={barData.color}
          />
        </Stack>
      );
    });
  };

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Total Children "
          value={noOfChildren!}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Chapter Denmark"
          value={noOfChapterDenmark!}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Chapter Germany"
          value={noOfChapterGermany!}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Chapter Switzerland"
          value={noOfChapterSwitzerland!}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
      </Box>

      <Box mt="20px">
        <PieChart
          title="Total Leaders"
          value={noOfLeaders!}
          series={[60, 40]}
          colors={["#275be8", "#c4e8ef"]}
        />
      </Box>

      <Stack mt="25px" width="100%">
        {/* <ChildReferrals /> */}
        <Box
          p={4}
          bgcolor="#fcfcfc"
          id="chart"
          minWidth={490}
          display="flex"
          flexDirection="column"
          borderRadius="15px"
        >
          <Typography fontSize={18} fontWeight={600} color="#11142d">
            Children Referrals
          </Typography>

          <Box>{renderProgressBars()}</Box>
        </Box>
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Latest Children
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestChildren.map((child) => (
            <ChildCard
              key={child._id}
              id={child._id}
              name={child.name}
              age={child.age}
              gender={child.gender}
              childId={child.childId}
              levelOfNeed={child.levelOfNeed}
              nationality={child.nationality}
              parentStatus={child.parentStatus}
              grade={child.grade}
              donations={child.donations}
              yearsLeftToGraduate={child.yearsLeftToGraduate}
              photo={child.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
