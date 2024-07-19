import React, { useState } from "react";
import useFetchArticles from "./useFetchArticles.hook";
import ArticleCard from "./components/articleCard.component";
import { Alert, Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { PERIODS } from "../../constants";
function Home() {
  const [period, setPeriod] = useState(PERIODS[0]);
  const { response, loading } = useFetchArticles(period);

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };
  return (
    <Box p={2}>
      <Typography gutterBottom variant="h4" component="h1">
        New York Times Popular Articles
      </Typography>
      <Stack direction="row" gap={2}>
        <Typography variant="h5" component="p">
          Filter By
        </Typography>
        <Select value={period} onChange={handlePeriodChange} disabled={loading}>
          {PERIODS.map((ele) => {
            return (
              <MenuItem key={`menuitem-${ele}`} value={ele}>{`${ele} ${
                ele === 1 ? "day" : "days"
              }`}</MenuItem>
            );
          })}
        </Select>
      </Stack>
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2} mt={2}>
        {response?.data?.results &&
          response.data.results.map((ele) => {
            return <ArticleCard data={ele} key={`key_${ele.id}`} />;
          })}
        {response.error && (
          <Alert severity="error">
            Failed to load resources. please try again
          </Alert>
        )}
      </Box>
    </Box>
  );
}

export default Home;
