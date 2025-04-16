import { User } from 'lucide-react';

const profiles = [
  { id: 1, name: 'Titanzada Xesque', avatar: 'https://assets.gamearena.gg/wp-content/uploads/2023/12/19171048/titan-pain-gaming-scaled-e1703016665682.jpeg' },
  { id: 2, name: 'Ben Tennyson', avatar: 'https://m.media-amazon.com/images/S/pv-target-images/dbbd610093f4762e3864f01c7c8dc60fae4e31d95b3b68c66eaa91f3c827ce53.jpg' },
  { id: 4, name: 'Memphis', avatar: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/04/05/1905132587-memphis-depay-sobre-na-bola-com-os-pes-durante-classico-paulista.jpg' },
  { id: 3, name: 'Vectra 98', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UOcajQI_vazrwuCTH6Js2cdL8r5_uDt2Bg&s' },
  { id: 5, name: 'Adicionar Perfil', isAdd: true }
];

export default function ProfileSelection({ onProfileSelect }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-gray-100 mb-8">Quem está assistindo?</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => onProfileSelect(profile)}
              className="group flex flex-col items-center"
            >
              <div className={`w-[120px] h-[120px] rounded-lg overflow-hidden relative group-hover:ring-4 ring-white transition-all duration-200 ${profile.isAdd ? 'bg-gray-600/40' : ''}`}>
                {profile.isAdd ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                ) : (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover group-hover:border-4 border-white transition-all duration-200"
                  />
                )}
              </div>
              <span className="mt-3 text-gray-400 group-hover:text-white transition-colors duration-200">
                {profile.name}
              </span>
            </button>
          ))}
        </div>
        <button className="mt-12 px-8 py-2 text-gray-400 border border-gray-400 hover:text-white hover:border-white transition-colors duration-200">
          Gerenciar Perfis
        </button>
      </div>
    </div>
  );
}