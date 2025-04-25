import {Box, Typography} from "@mui/material";

const YearByYearStars = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Year-by-Year Stars
      </Typography>
      <Typography variant="body1">
        To see which genres dominate at any given moment, we built an interactive bar chart showing the top 10 genres by average popularity each year.
      </Typography>
      <Typography variant="body1">
        Use the slider to jump to a year and see which styles ruled.
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

export default YearByYearStars;