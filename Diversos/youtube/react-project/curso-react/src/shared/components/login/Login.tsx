import { useDrawerContext } from '../../contexts';
import { Button } from '@mui/material';

export const Login = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return(
    <>
      <div>
        <Button variant="contained" onClick={toggleDrawerOpen}>Em Construção</Button>
      </div>
      <div>
        <img src="https://blobfluid.blob.core.windows.net/5b6c4f47d9090156f08775aa/account/5f05abe6d21e580001990d05202103064049" alt="logo fluid" style={{width: '700px', height: '700px', display: 'block', margin: '100px auto'}}/>
      </div>
    </>
  );
};