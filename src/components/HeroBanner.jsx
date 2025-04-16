import { useState, useEffect } from 'react';
import { getImageUrl } from '../api/tmdb';
import { ArrowDown, PlayCircle } from 'lucide-react';

export default function HeroBanner({ content: initialContent }) {
  const [currentContent, setCurrentContent] = useState(initialContent);
  const [contents, setContents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Update contents when initial content changes
    if (initialContent && Array.isArray(initialContent)) {
      setContents(initialContent);
      setCurrentContent(initialContent[0]);
    }
  }, [initialContent]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (contents.length > 1) {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % contents.length;
          setCurrentContent(contents[newIndex]);
          return newIndex;
        });
      }
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [contents]);

  if (!currentContent) return null;

  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={getImageUrl(currentContent.backdrop_path)}
          alt={currentContent.title || currentContent.name}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 transition-all duration-500">
              {currentContent.title || currentContent.name}
            </h1>
            <p className="text-lg text-gray-200 mb-8 transition-all duration-500">
              {currentContent.overview}
            </p>
            <div className="flex gap-4 ">
              <button className="flex gap-x-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-white/90 transition items-center">
                <PlayCircle/> Assistir
              </button>
              <button className="flex gap-x-2 bg-gray-600/70 text-white px-8 py-3 rounded font-semibold hover:bg-gray-600/90 transition items-center">
                <ArrowDown/> Mais Informações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}