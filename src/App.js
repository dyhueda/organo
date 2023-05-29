import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';



function App() {

  const [profiles, setProfiles] = useState([])
  const AddNewProfile = (profile) => {
    console.log(profile)

  }

  return (
    <div className="App">
      <Banner />
      <Form AddNewProfile={profile => AddNewProfile(profile)} />
    </div>
  );
}

export default App;
