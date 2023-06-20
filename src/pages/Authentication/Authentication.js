import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';

import Login from './Login';
import Register from './Register';

const Authentication = () => {
  const { authMethod } = useParams();
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Card>
        {authMethod === 'login' ? <Login></Login> : <Register></Register>}
      </Card>
    </div>
  );
};
export default Authentication;
