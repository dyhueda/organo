import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Teams from './components/Teams';
import Footer from './components/Footer';



function App() {


  const teams = [
    {
      name: 'Programing',
      PrimaryColor: '#57C278',
      SecondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      PrimaryColor: '#82CFFA',
      SecondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      PrimaryColor: '#A6D157',
      SecondaryColor: '#F0F8E2',
    },
    {
      name: 'DevOps',
      PrimaryColor: '#E06B69',
      SecondaryColor: '#FDE7E8'
    },
    {
      name: 'UX and Design',
      PrimaryColor: '#D86EBF',
      SecondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      PrimaryColor: '#FEBA05',
      SecondaryColor: '#FFF5D9',
    },
    {
      name: 'Innovation and Management',
      PrimaryColor: '#FF8A29',
      SecondaryColor: '#FFEEDF',
    }
  ]

  const [profiles, setProfiles] = useState([])
  const AddNewProfile = (profile) => {
    setProfiles([...profiles, profile])

  }

  return (
    <div className="App">
      <Banner />
      <Form AddNewProfile={profile => AddNewProfile(profile)} teams={teams.map(team => team.name)} />
      {teams.map(team =><Teams 
                          key={team.name} 
                          name={team.name}
                          PrimaryColor={team.PrimaryColor}
                          SecondaryColor={team.SecondaryColor}
                          profiles={profiles.filter(profile => profile.team === team.name)}
                        />)}
      <Footer />
    </div>

  );
}

export default App;
