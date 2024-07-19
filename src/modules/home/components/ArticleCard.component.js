import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const defaultProps = {};

function ArticleCard({ data = defaultProps }) {
  const { title, media, abstract, updated } = data;
  const placeholder = "https://placehold.co/210x140";
  const meta = media[0];
  const metaData = meta && meta["media-metadata"];
  const ele = metaData && metaData[1];
  const mediaUrl = ele && ele.url;
  const imgUrl = mediaUrl || placeholder;
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate("/article", { state: data });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, cursor: "pointer" }}
        image={imgUrl}
        title="green iguana"
        onClick={handleReadMore}
      />
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
    </Card>
  );
}
export default ArticleCard;
