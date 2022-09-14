import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ContentCard(props) {
  const blogPost = props.blog;
  return (
    <Card
      className='flex f-space-btw m-t-10 m-b-10 p-10'
      sx={{
        borderBottom: '1px solid var(--grey)',
        width: '95%',
      }}
      key={props.key}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%' }}>
        <CardContent className='flex f-col f-start'>
          <h3 className='m-b-10'>{blogPost?.title}</h3>
          <div className='flex'>
            {blogPost?.tags.map((tag, index) => (
              <Chip
                label={tag}
                variant='filled'
                style={{ margin: '0px 2px' }}
                key={index}
              />
            ))}
          </div>
        </CardContent>
        <p className='p-10'>
          <p>{blogPost?.markdown.slice(0, 150) + '...'}</p>
        </p>
        <Link to={'/blog/' + blogPost?._id}>
          <button
            className='m-10 p-10'
            style={{
              width: 'fit-content',
            }}
          >
            Read more
          </button>
        </Link>
      </Box>
      <CardMedia
        className='m-10'
        component='img'
        sx={{ width: '35%', height: '100%', borderRadius: '10px' }}
        image={blogPost?.coverImage}
        alt='Live from space album cover'
      />
    </Card>
  );
}
