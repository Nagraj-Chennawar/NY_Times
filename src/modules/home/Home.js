import React, { useState } from "react";
import useFetchArticles from "./useFetchArticles.hook";
import ArticleCard from "./components/ArticleCard.component";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { PERIODS } from "../../constants";
function Home() {
  const [period, setPeriod] = useState(PERIODS[0]);
  const { data, loading } = useFetchArticles(period);

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };
  return (
    <>
      <Typography gutterBottom variant="h4" component="h1">
        New York Times Popular Articles
      </Typography>
      <Stack direction="row">
        <Select value={period} onChange={handlePeriodChange} disabled={loading}>
          {PERIODS.map((ele) => {
            return <MenuItem value={ele}>{`${ele} days`}</MenuItem>;
          })}
        </Select>
      </Stack>
      <ArticleCard />
    </>
  );
}

export default Home;
