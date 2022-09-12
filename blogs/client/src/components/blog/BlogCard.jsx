import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';
export default function BlogCard(props) {
  return (
    <Link
      to={'/blog/' + props.data._id}
      className='link'
      key={props.key}
      style={{ width: '100%' }}
    >
      <Card sx={{ width: '95%', margin: '4rem auto', height: '400px' }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='250'
            image={props.data.coverImage}
            alt={props.data.title}
          />
          <CardContent>
            <h3>{props.data.title}</h3>
            <p>{props.data.markdown.slice(0, 300) + '...'}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
