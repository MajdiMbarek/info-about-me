import ProfilePhoto from './component/ProfilePhoto';
import FullName from './component/FullName';
import Address from './component/Address';

function App() {
  return (
    <div className="container">
      <ProfilePhoto />
      <hr />
      <div className='info'>
        < FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;