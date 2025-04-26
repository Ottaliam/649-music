import Introduction from "./sections/Introduction.jsx";
import Title from "./sections/Title.jsx";
import Section2 from "./sections/Section2.jsx";
import Section3 from "./sections/Section3.jsx";
import Section4 from "./sections/Section4.jsx";
import Section5 from "./sections/Section5.jsx";
import Section6_1 from "./sections/Section6_1.jsx";
import Section7 from "./sections/Section7.jsx";
import {useState} from "react";
import {Box, Fade} from "@mui/material";
import {Scrollama, Step} from "react-scrollama";
import Section6_2 from "./sections/Section6_2.jsx";

const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const sections = [
    <Title />,
    <Introduction />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
    <Section5 />,
    <Section6_1 />,
    <Section6_2 />,
    <Section7 />
  ];

  return (
    // sections
    <Box sx={{ position: 'relative' }}>
      {/* Sticky content that stays always centered */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
          zIndex: 1,
        }}
      >
        <Fade in={true} key={currentStepIndex} timeout={500}>
          <Box sx={{ width: '100%' }}>
            {sections[currentStepIndex]}
          </Box>
        </Fade>
      </Box>

      {/* Scroll triggers */}
      <Scrollama onStepEnter={({ data }) => setCurrentStepIndex(data)}>
        {sections.map((_, index) => (
          <Step data={index} key={index}>
            {/* Each Step must add page height outside of sticky */}
            <Box sx={{ height: '100vh' }} />
          </Step>
        ))}
      </Scrollama>
    </Box>
  );
};

export default App
