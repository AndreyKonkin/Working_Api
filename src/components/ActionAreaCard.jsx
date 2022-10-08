import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ fish }) {
  const { 'Species Name': name, 'Image Gallery': image, Calories: calories } = fish;
  let images;
  if (image) {
    images = image[1]?.src;
  }
  return (
    <Card sx={{ maxWidth: 405, maxHight: 450, m: '1rem' }}>
      <CardActionArea>
        {images
          ? (
            <CardMedia
              component="img"
              height="215"
              image={images}
              alt="green iguana"
            />
          ) : (
            <CardMedia
              className="image"
              component="img"
              height="200"
              image="https://i.ytimg.com/vi/duvlWEJJmU0/maxresdefault.jpg"
              alt="green iguana"
            />
          )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Калории
            {' '}
            {calories}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
