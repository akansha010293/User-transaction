import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

export const TransactionForm = ({
  handleChange,
}: {
  handleChange: (
    name: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <Box mt={3}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 3, sm: 6 }}>
          <Typography fontWeight="bold">Item 1</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3, sm: 6 }}>
          <TextField
            fullWidth
            placeholder="$ Ex GST Amount"
            onChange={(e) => handleChange("reference", e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">AUD</InputAdornment>,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3, sm: 6 }}>
          <TextField
            fullWidth
            placeholder="$ GST Amount"
            onChange={(e) => handleChange("gst", e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">AUD</InputAdornment>,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3, sm: 6 }}>
          <TextField
            fullWidth
            placeholder="$ Inc GST Amount"
            onChange={(e) => handleChange("amount_inc_gst", e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">AUD</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
