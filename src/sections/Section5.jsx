import {Box, Typography} from "@mui/material";

const Section5 = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Rise of the Moods
      </Typography>
      <Typography variant="body1">
        Digging into those top 4 genres, we looked at how their song output and popularity evolved over time.
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
          [Interactive Visualization Placeholder]
        </Typography>
      </Box>

      <Typography variant="body1">
        Notice how all four exploded in the past decade—especially chill and sad post-2015. Even though they’re “young,” their popularity is sky-high.
      </Typography>
    </Box>
  );
};

export default Section5;