import {Box, Typography} from "@mui/material";

const Section3 = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Part 3 – Enduring Genres
      </Typography>
      <Typography variant="body1">
        Popularity is one thing. But what about genres that last?
      </Typography>
      <Typography variant="body1">
        This scatterplot lets you explore quantity vs. longevity. A few surprises emerged:
      </Typography>

      {/* Placeholder for the upcoming interactive visualization */}
      <Box
        sx={{
          width: '100%',
          height: 400,
          bgcolor: 'grey.200',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: 4,
        }}
      >
        <Typography variant="subtitle1" color="text.secondary">
          [Interactive Scatterplot Placeholder]
        </Typography>
      </Box>

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