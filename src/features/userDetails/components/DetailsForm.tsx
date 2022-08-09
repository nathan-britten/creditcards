import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";
import { User } from "../../../types";

export function DetailsForm() {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  const { register, handleSubmit, formState, control } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: user?.title,
      firstName: user?.firstName,
      lastName: user?.lastName,
      annualIncome: user?.annualIncome,
      employmentStatus: user?.employmentStatus,
      houseNumber: user?.houseNumber,
      postcode: user?.postcode,
      dob: user.dob,
    },
  });

  const { errors } = formState;

  const onSubmit = (data: User) => {
    setUser(data);
    navigate("/credit-cards");
  };

  return (
    <>
      <FormControl
        variant="filled"
        sx={{
          "& > div": {
            my: 1,
          },
        }}
      >
        <Typography variant="h5">Personal Details</Typography>
        <TextField
          label="Title"
          id="title"
          placeholder="Title"
          helperText={errors.title?.message}
          error={!!errors.title}
          required
          {...register("title", { required: "Enter your preferred title" })}
        />
        <TextField
          label="First Name"
          id="firstName"
          placeholder="First Name"
          helperText={errors.firstName?.message}
          error={!!errors.firstName}
          required
          {...register("firstName", { required: "Enter your first name" })}
        />
        <TextField
          id="lastName"
          label="Last Name"
          placeholder="Last Name"
          helperText={errors.lastName?.message}
          error={!!errors.lastName}
          required
          {...register("lastName", { required: "Enter your last name" })}
        />
        <TextField
          id="dob"
          label="Date of birth"
          type="date"
          sx={{ minWidth: 120 }}
          InputLabelProps={{
            shrink: true,
          }}
          helperText={errors.dob?.message}
          error={!!errors.dob}
          {...register("dob", { required: "Enter your date of birth" })}
        />
        <Typography variant="h5">Employment Details</Typography>

        <FormControl
          sx={{
            minWidth: 120,
            textAlign: "left",
          }}
        >
          <InputLabel
            id="demo-simple-select-helper-label"
            error={!!errors.employmentStatus}
          >
            Employment Status
          </InputLabel>
          <Controller
            name="employmentStatus"
            control={control}
            rules={{ required: "Please select an employment status" }}
            render={({ field: { onChange, value } }) => (
              <Select
                label="Employment Status"
                id="employmentStatus"
                labelId="employment-status-select-label"
                error={!!errors.employmentStatus}
                defaultValue=""
                value={value}
                onChange={onChange}
                placeholder="Employment Status"
              >
                <MenuItem value="fullTime">Full time employed</MenuItem>
                <MenuItem value="unemployed">Unemployed</MenuItem>
                <MenuItem value="partTime">Part-time employed</MenuItem>
                <MenuItem value="selfEmployed">Self-Employed</MenuItem>
                <MenuItem value="housePerson">House Person</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="retired">Retired</MenuItem>
              </Select>
            )}
          />

          {!!errors.employmentStatus ? (
            <FormHelperText error={!!errors.employmentStatus}>
              Select your employment status
            </FormHelperText>
          ) : null}
        </FormControl>
        <TextField
          label="Annual Income"
          id="annualIncome"
          required
          helperText={errors.annualIncome?.message}
          error={!!errors.annualIncome}
          placeholder="Annual Income"
          {...register("annualIncome", {
            min: {
              value: 0,
              message: "You must enter an income",
            },
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: "You must enter a valid number",
            },
            required: "Enter your annual income before tax",
          })}
        />

        <Typography variant="h5">Address</Typography>
        <TextField
          id="houseNumber"
          label="House Number"
          {...register("houseNumber", {
            required: "Enter your house number",
            pattern: {
              value: /^[0-9]*$/,
              message: "You must enter a valid number",
            },
          })}
          helperText={errors.houseNumber?.message}
          error={!!errors.houseNumber}
          required
          placeholder="House Number"
        />
        <TextField
          id="postcode"
          label="Postcode"
          helperText={errors.postcode?.message}
          error={!!errors.postcode}
          required
          {...register("postcode", { required: "Enter your postcode" })}
        />
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Search available credit cards
        </Button>
      </FormControl>
    </>
  );
}
