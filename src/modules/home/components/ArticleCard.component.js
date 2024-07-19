import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

function ArticleCard({ title, abstract, updated, imgUrl, articleUrl }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imgUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {abstract}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {`updated: ${updated}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={articleUrl}>Read more here</Link>
      </CardActions>
    </Card>
  );
}
export default ArticleCard;
