import {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {VegaLite} from "react-vega";
import styles from "./Chart.module.css";

const base = import.meta.env.BASE_URL;

const Chart = ({ chartName }) => {
  const [spec, setSpec] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`${base}charts/${chartName}.json`)
      .then((response) => response.json())
      .then((jsonSpec) => setSpec(jsonSpec))
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, [chartName]);

  return (
    <Box
      className={styles.sliderContainer}
      sx={{
        width: '100%',
        bgcolor: 'white.200',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        my: 4,
        p: 2,
      }}
    >
      {error ? (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      ) : spec ? (
        <VegaLite spec={spec} actions={false} />
      ) : (
        <Typography variant="subtitle1" color="text.secondary">
          [Loading Chart...]
        </Typography>
      )}
    </Box>
  );
}

export default Chart;