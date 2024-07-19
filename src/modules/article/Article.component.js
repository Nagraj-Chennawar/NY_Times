import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
/**
 * keeping this component as a placeholder for further enhancements
 * @returns {JSX.Element} Article component
 */
function Article() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { title, media, abstract, source, url } = state || {};

  const meta = media && media[0];
  const metaData = meta && meta["media-metadata"];
  const ele = metaData && metaData[2];
  const mediaUrl = ele && ele.url;

  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <>
      <Button
        sx={{ m: 4 }}
        variant="outlined"
        startIcon={<KeyboardBackspaceIcon />}
        onClick={handleBackClick}
      >
        Back to home
      </Button>
      <Box p={4}>
        <article>
          <Typography variant="h2" component="h1">
            {title}
          </Typography>
          <Box display="flex" justifyContent="center">
            <img
              style={{ width: "50%", height: "auto", marginTop: "2rem" }}
              src={mediaUrl}
            />
          </Box>
          <Stack mt={2} direction="column" gap={2}>
            <Typography variant="body1" component="p">
              {abstract}
            </Typography>
            <Typography variant="body1" component="p">
              source: {source}
            </Typography>
            <Link href={url}>Read more here</Link>
          </Stack>
        </article>
      </Box>
    </>
  );
}

export default Article;
