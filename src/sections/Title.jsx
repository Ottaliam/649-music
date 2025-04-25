import {Box, Typography} from "@mui/material";

const Title = () => {
  return (
    <Box
      component="header"
      sx={{
        maxWidth: 800,
        mx: 'auto',
        py: 6,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        What Makes a Genre a Hit?
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Exploring Popularity, Quantity, and Musical Features on Spotify
      </Typography>
    </Box>
  );
};

export default Title;