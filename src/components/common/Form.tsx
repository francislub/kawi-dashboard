import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import type { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  childImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Child
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Child Name
            </FormHelperText>
            <TextareaAutosize
              minRows={1}
              required
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("name", { required: true })}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Child Age
            </FormHelperText>
            <TextareaAutosize
              minRows={1}
              required
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("age", { required: true })}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Child ID
            </FormHelperText>
            <TextareaAutosize
              minRows={1}
              required
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("childId", { required: true })}
            />
          </FormControl>

          <FormControl sx={{ flex: 1 }}>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Select Gender
            </FormHelperText>
            <Select
              variant="outlined"
              color="info"
              displayEmpty
              required
              sx={{
                flex: 1,
                "& .MuiSelect-select": {
                  color: "#919191",
                },
                "& .MuiFormLabel-root": {
                  color: "#919191",
                },
                "& .MuiInputLabel-outlined": {
                  color: "#919191",
                },
              }}
              {...register("gender", {
                required: true,
              })}
              inputProps={{ "aria-label": "Without label" }}
              defaultValue="male"
              {...register("gender", {
                required: true,
              })}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Nationality
            </FormHelperText>
            <TextareaAutosize
              minRows={1}
              required
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("nationality", { required: true })}
            />
          </FormControl>

          <FormControl sx={{ flex: 1 }}>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Select Parent Status
            </FormHelperText>
            <Select
              variant="outlined"
              color="info"
              displayEmpty
              required
              sx={{
                flex: 1,
                "& .MuiSelect-select": {
                  color: "#919191",
                },
                "& .MuiFormLabel-root": {
                  color: "#919191",
                },
                "& .MuiInputLabel-outlined": {
                  color: "#919191",
                },
              }}
              {...register("parentStatus", {
                required: true,
              })}
              inputProps={{ "aria-label": "Without label" }}
              defaultValue="both-alive"
              {...register("parentStatus", {
                required: true,
              })}
            >
              <MenuItem value="both-alive">Both-Alive</MenuItem>
              <MenuItem value="both-deceased">Both-Deceased</MenuItem>
              <MenuItem value="one-alive">One-Alive</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("description", { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select Level Of Need
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                sx={{
                  flex: 1,
                  "& .MuiSelect-select": {
                    color: "#919191",
                  },
                  "& .MuiFormLabel-root": {
                    color: "#919191",
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "#919191",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="Average"
                {...register("levelOfNeed", {
                  required: true,
                })}
              >
                <MenuItem value="average">Average</MenuItem>
                <MenuItem value="high">High</MenuItem>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter Child Donations
              </FormHelperText>
              <TextareaAutosize
              minRows={1}
              required
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("donations", { required: true })}
            />
            </FormControl>

          </Stack>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Class
            </FormHelperText>
            <TextareaAutosize
              minRows={1}
              required
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("grade", { required: true })}
            />
          </FormControl>

          <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter Years Left To Graduate
              </FormHelperText>
              <TextareaAutosize
              minRows={1}
              required
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("yearsLeftToGraduate", { required: true })}
            />
            </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography
                color="#11142d"
                fontSize={16}
                fontWeight={500}
                my="10px"
              >
                Child Photo
              </Typography>

              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ed480",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleImageChange(e.target.files![0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={14}
              color="#808191"
              sx={{ wordBreak: "break-all" }}
            >
              {childImage?.name}
            </Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;
