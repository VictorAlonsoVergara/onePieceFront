import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom"

export default function MultiActionAreaCard({data, url}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick = {() => {
        navigate(`${url}${data.idMovie || data.idCharacter}`);
      }}>
        <CardMedia
          component="img"
          height="fit"
          image={data.imageUrl}
          alt="imagen del anime"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title || data.name}
          </Typography>
          {data.role ? (
          <Typography variant="body2" color="text.secondary">
            {data.role}
          </Typography>)
           : <></>}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {(e) => {
          e.stopPropagation();
          window.open(data.url, "_blank");
        }}>
          Información completa
        </Button>
      </CardActions>
    </Card>
  );
}