import {Box, Link, Typography} from "@mui/material";

const Title = ({ plainView, togglePlainView }) => {
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
      <Typography variant="body2" color="text.secondary">
        {plainView ? (
          <>
            You're currently viewing the plain layout of the page.{' '}
            <Link href="#" onClick={togglePlainView}>
              Click here to switch to the full experience
            </Link>.
          </>
        ) : (
          <>
            This page is best viewed on larger screens. If you're experiencing display issues,{' '}
            <Link href="#" onClick={togglePlainView}>
              click here to switch to a plain view
            </Link>.
          </>
        )}
      </Typography>
    </Box>
  );
};

export default Title;