import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

import { ChildCard, CustomButton } from "components";

const AllChildren = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();

  const allChildren = data?.data ?? [];

  const currentAge = sorter.find((item) => item.field === "age")?.order;

  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentAge === "asc" ? "desc" : "asc" }]);
  };

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
      "field" in item ? item : []
    );

    return {
      name: logicalFilters.find((item) => item.field === "name")?.value || "",
      levelOfNeed:
        logicalFilters.find((item) => item.field === "levelOfNeed")?.value ||
        "",
      gender:
        logicalFilters.find((item) => item.field === "gender")?.value || "",
      childId:
        logicalFilters.find((item) => item.field === "childId")?.value || "",
    };
  }, [filters]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            {!allChildren.length ? "There are no children" : "All Children"}
          </Typography>
          <Box
            mb={2}
            mt={3}
            display="flex"
            width="84%"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              display="flex"
              gap={5}
              flexWrap="wrap"
              mb={{ xs: "20px", sm: 0 }}
            >
              <CustomButton
                title={`Sort by Age ${currentAge === "asc" ? "↑" : "↓"}`}
                handleClick={() => toggleSort("age")}
                backgroundColor="#475be8"
                color="#fcfcfc"
              />
              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by name"
                value={currentFilterValues.name}
                onChange={(e) => {
                  setFilters([
                    {
                      field: "name",
                      operator: "contains",
                      value: e.currentTarget.value
                        ? e.currentTarget.value
                        : undefined,
                    },
                  ]);
                }}
              />

              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by ID"
                value={currentFilterValues.childId}
                onChange={(e) => {
                  setFilters([
                    {
                      field: "childId",
                      operator: "contains",
                      value: e.currentTarget.value
                        ? e.currentTarget.value
                        : undefined,
                    },
                  ]);
                }}
              />

              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                value={currentFilterValues.levelOfNeed}
                onChange={(e) => {
                  setFilters(
                    [
                      {
                        field: "levelOfNeed",
                        operator: "eq",
                        value: e.target.value,
                      },
                    ],
                    "replace"
                  );
                }}
              >
                <MenuItem value="">Filter By Level Of Need</MenuItem>
                {["High", "Low", "Average", "Urgent"].map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>
                    {type}
                  </MenuItem>
                ))}
              </Select>

              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                value={currentFilterValues.gender}
                onChange={(e) => {
                  setFilters(
                    [
                      {
                        field: "gender",
                        operator: "eq",
                        value: e.target.value,
                      },
                    ],
                    "replace"
                  );
                }}
              >
                <MenuItem value="">Filter By Gender</MenuItem>
                {["Male", "Female"].map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomButton
          title="Add Child"
          handleClick={() => navigate("/children/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allChildren?.map((child) => (
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

      {allChildren.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
          />
          <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box>
          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ "aria-label": "Without label" }}
            defaultValue={10}
            onChange={(e) =>
              setPageSize(e.target.value ? Number(e.target.value) : 10)
            }
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <MenuItem key={size} value={size}>
                Show {size}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default AllChildren;
