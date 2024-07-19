import { Box, Button, Link, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

/**
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
          <Typography
            variant="h2"
            component="h1"
            sx={{ textAlign: "center", mb: 4 }}
          >
            {title}
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} md={8} lg={6}>
              {mediaUrl && (
                <Box display="flex" justifyContent="center">
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: "2rem",
                      maxWidth: "600px",
                    }}
                    src={mediaUrl}
                    alt="Article media"
                  />
                </Box>
              )}
            </Grid>
          </Grid>
          <Stack mt={4} direction="column" spacing={2} alignItems="center">
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "center", maxWidth: "800px" }}
            >
              {abstract}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "center", maxWidth: "800px" }}
            >
              Source: {source}
            </Typography>
            <Link href={url} sx={{ textAlign: "center", maxWidth: "800px" }}>
              Read more here
            </Link>
          </Stack>
        </article>
      </Box>
    </>
  );
}

export default Article;
