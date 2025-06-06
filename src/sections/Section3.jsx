import {Box, Typography} from "@mui/material";
import Chart from "../components/Chart.jsx";

const Section3 = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Enduring Genres
      </Typography>
      <Typography variant="body1">
        Popularity is one thing. But what about genres that last?
      </Typography>
      <Typography variant="body1">
        This scatterplot lets you explore quantity vs. longevity. A few surprises emerged:
      </Typography>

      <Chart chartName="enduring_genre" />

      <Box component="ul" sx={{ pl: 3 }}>
        <li>
          <Typography variant="body1">
            Some genres like study and sad have short histories but massive output.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Others like pop-film and k-pop show enduring presence.
          </Typography>
        </li>
      </Box>
    </Box>
  );
}

export default Section3;