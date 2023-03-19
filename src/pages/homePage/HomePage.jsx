import { Typography, Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const loggedIn = useSelector(selectIsUserLogin);
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/my-contacts', { replace: true });
  };
  return (
    <>
      <Typography variant="h2" component="h1" align="center">
        Phonebook
      </Typography>
      {!loggedIn && (
        <Typography variant="h3" component="h2" align="center">
          Try it now!
        </Typography>
      )}
      {loggedIn && (
        <Stack mt={3} alignItems="center">
          <Button
            onClick={redirect}
            variant="contained"
            color="success"
            size="large"
            sx={{ width: '300px' }}
          >
            Go to my Contact list
          </Button>
        </Stack>
      )}
    </>
  );
};
export default HomePage;
