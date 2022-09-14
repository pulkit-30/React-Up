import * as React from 'react';
import { Divider, IconButton, List } from '@mui/material';
import style from '../../style/blog.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Spinner from '../loader/Spinner';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  const [categories, updateCategories] = React.useState([]);

  React.useEffect(() => {
    const subscribe = () => {
      fetch('http://localhost/api/category', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => updateCategories(res.data));
    };
    return subscribe;
  }, []);

  return (
    <div className={style.sidebar}>
      <div className={style.searchBox}>
        <input type='text' placeholder='Search..' />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      {props.children}
      <nav aria-label='secondary mailbox folders' className='m-t-10'>
        <ListItem disablePadding>
          <h3>Recent</h3>
        </ListItem>
        <List>
          {!props.blogData?.length && <Spinner size={20} />}
          {[props.blogData[0], props.blogData[1], props.blogData[2]]?.map(
            (blog, index) => {
              if (!blog) return <React.Fragment></React.Fragment>;
              return (
                <Link to={'/blog/' + blog._id} className='link' key={index}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={blog.title} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            }
          )}
        </List>
      </nav>
      <Divider />
      <nav aria-label='secondary mailbox folders' className='m-t-10'>
        <List>
          <ListItem disablePadding>
            <h3>Categories</h3>
          </ListItem>
          {!categories.length && <Spinner size={20} />}
          {categories.length !== 0 &&
            categories.map((category, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemText primary={category.category} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </nav>
    </div>
  );
};

export default SideBar;
