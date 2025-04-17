import { useNavigate } from 'react-router-dom';
import ProfileSelection from '../components/ProfileSelection';
import { useProfile } from './ProfileContext';

export default function SelectProfile() {
  const { setCurrentProfile } = useProfile();
  const navigate = useNavigate();

  const handleProfileSelect = (profile) => {
    setCurrentProfile(profile);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <ProfileSelection onProfileSelect={handleProfileSelect} />
    </div>
  );
}
