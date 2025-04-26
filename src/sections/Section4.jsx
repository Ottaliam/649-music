import {Box, Typography} from "@mui/material";
import Chart from "../components/Chart.jsx";

const Section4 = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Who’s Winning Right Now?
      </Typography>
      <Typography variant="body1">
        What if we use both metrics—quantity and quality—to rank genres? Below are the top 10 genres under your preferred scoring mix.
      </Typography>

      <Chart chartName="whos_winning" />

      <Typography variant="body1">
        For our default setting (equal weight), the standouts are: Chill, Sad, K-pop, and Pop-film.
      </Typography>
    </Box>
  );
}

export default Section4;