import {Box, Typography} from "@mui/material";
import Chart from "../components/Chart.jsx";

const Section2 = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Year-by-Year Stars
      </Typography>
      <Typography variant="body1">
        To see which genres dominate at any given moment, we built an interactive bar chart showing the top 10 genres by average popularity each year.
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ fontStyle: 'italic', mt: 2 }}
      >
        Use the slider to jump to a year and see which styles ruled.
      </Typography>

      <Chart chartName="top10_genre" />

      <Typography variant="body1">
        Some highlights:
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>
          <Typography variant="body1">
            K-pop exploded into the charts post-2016.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Sad and chill genres surged in recent years—are we feeling more mellow?
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Op-film, often tied to movie soundtracks, remains a mainstay over decades.
          </Typography>
        </li>
      </Box>
    </Box>
  );
}

export default Section2;