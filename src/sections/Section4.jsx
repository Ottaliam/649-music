import {Box, Typography} from "@mui/material";

const Section4 = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Who’s Winning Right Now?
      </Typography>
      <Typography variant="body1">
        What if we use both metrics—quantity and quality—to rank genres? Below are the top 10 genres under your preferred scoring mix.
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
        For our default setting (equal weight), the standouts are: Chill, Sad, K-pop, and Pop-film.
      </Typography>
    </Box>
  );
}

export default Section4;