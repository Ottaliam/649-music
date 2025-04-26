import Chart from "../components/Chart.jsx";
import {Box, Typography} from "@mui/material";

const Section6_2 = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Chart chartName="features" />

      <Typography variant="body1">
        We expected distinct sound signatures—but it turns out, popular genres don’t follow a strict formula. They vary in style, mood, and texture.
      </Typography>
      <Typography variant="body1">
        Still, we noticed:
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>
          <Typography variant="body1">
            Popular genres tend to be more danceable.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            They’re slightly happier (higher valence).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            And often less acoustic, leaning toward digital production.
          </Typography>
        </li>
      </Box>
      <Typography variant="body1">
        Nothing definitive—but maybe popularity has less to do with what a song is, and more about when and why people listen.
      </Typography>
    </Box>
  )
}

export default Section6_2;