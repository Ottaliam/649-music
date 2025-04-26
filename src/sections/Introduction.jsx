import {Box, Typography} from "@mui/material";

const Introduction = () => {
  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="body1">
        Spotify is home to more than 100,000 genres, from nostalgic classics to obscure subcultures. But what separates a momentary vibe from a long-term trend?
      </Typography>
      <Typography variant="body1">
        We wanted to answer:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        <li>
          <Typography variant="body1">
            What genres are consistently popular over time?
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Which ones are emerging fast?
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            And do popular genres share similar musical traits?
          </Typography>
        </li>
      </Box>
      <Typography variant="body1">
        So we turned to Spotify’s audio features dataset—110k+ tracks with genre tags, popularity scores, and sonic fingerprints like danceability, energy, and valence.
      </Typography>
    </Box>
  );
}

export default Introduction;