import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Card.css";
import IMG from "../../assets/newsImg.jpg";

const CardComponent = ({ News }) => {
  return (
    <Card
      key={News.source_id}
      className="app__card"
      sx={{
        maxWidth: 320,
        height: 350,
        borderRadius: ".5rem",
      }}
    >
      <CardActionArea
        style={{
          height: 350,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontFamily: "var(--font-base)",
            }}
          >
            {News.creator}
          </Typography>
          <Typography
            style={{
              fontFamily: "var(--font-base)",
            }}
          >
            {News.pubDate}
          </Typography>
        </div>
        <CardMedia
          component="img"
          height="140"
          image={News.image_url === null ? IMG : News.image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className="card-title"
            style={{
              fontFamily: "var(--font-base)",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            <a href={News.link} className="a">
              {News.title}
              <span className="dots">...</span>
            </a>
          </Typography>
          <Typography
            className="card-desc"
            style={{
              fontFamily: "var(--font-base)",
            }}
            variant="body2"
            color="text.secondary"
          >
            {News.description}
            <span className="dots">...</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
