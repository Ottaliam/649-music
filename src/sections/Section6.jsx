import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chart from "../components/Chart.jsx";

const Section6 = () => {
  const audioFeatures = [
    {
      name: 'Danceability',
      description:
        'How easy it is to groove to. A high score means you’re likely to tap your foot or get up and dance.',
    },
    {
      name: 'Energy',
      description:
        'Intensity and activity. Think fast, loud, and noisy vs. calm and mellow.',
    },
    {
      name: 'Valence',
      description:
        'Musical positivity. Higher valence sounds happy and cheerful; lower feels sad or serious.',
    },
    {
      name: 'Acousticness',
      description:
        'Whether the song is acoustic or electronic. Higher values suggest more organic sound (like guitar).',
    },
    {
      name: 'Instrumentalness',
      description:
        'How likely a track has no vocals. A high score = mostly instrumental.',
    },
    {
      name: 'Liveness',
      description:
        'Is it live or studio-produced? Higher liveness suggests it was recorded at a concert.',
    },
    {
      name: 'Speechiness',
      description:
        'The presence of spoken words. Rap, podcasts, or dramatic monologues score high here.',
    },
  ];

  return (
    <Box component="section" sx={{ maxWidth: 800, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Do Popular Genres Share a Sound?
      </Typography>
      <Typography variant="body1">
        We were curious: do hit genres sound alike? To investigate, we looked at Spotify’s audio features, which quantify the “feel” of a song. Here’s a quick breakdown of what each one means:
      </Typography>

      {/* Accordions for each audio feature */}
      {audioFeatures.map((feature, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="subtitle1">{feature.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{feature.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

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
  );
}

export default Section6;