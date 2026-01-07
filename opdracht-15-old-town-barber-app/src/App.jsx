import { useState, useEffect } from "react";
import { getUserProfile, setUserProfile } from "./utils/localStorage";
import { toast } from "react-toastify";
import UserProfile from './components/UserProfile'
function App() {


  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedProfile = getUserProfile();
    setProfile(savedProfile);
  }, [])

  const handleSave = (profileData) => {
    setUserProfile(profileData);
    setProfile(profileData);
    toast.success('Profiel is aangemaakt');

  }



  // geen profiel? Laat het formulier zien -Jason
  if (!profile) {
    return <UserProfile saveProfile={handleSave} />
  }

  return (
    <>
      <h1>Barbershop</h1>
    </>
  );
}

export default App;
