import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getImageUrl } from '../api/tmdb';

export default function ContentRow({ title, items, hideArrows = false }) {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const { clientWidth } = rowRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - rowRef.current.offsetLeft);
    setScrollLeft(rowRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    rowRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative py-8 group">
      <h2 className="text-2xl font-semibold text-white mb-4 px-4">{title}</h2>
      
      <div className="relative">
      {!hideArrows && showLeftArrow && (
        <button
          className="absolute left-0 top-0 bottom-0 z-40 flex items-center justify-center w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
)}
        
        <div
          ref={rowRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 pb-4"
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[280px] transition-transform duration-300 hover:scale-105"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative group/item rounded-lg overflow-hidden">
                <img
                  src={getImageUrl(item.poster_path, 'w500')}
                  alt={item.title || item.name}
                  className="w-full h-[400px] object-cover rounded-lg"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title || item.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-500 font-semibold">
                        {Math.round(item.vote_average * 10)}% Match
                      </span>
                      {item.release_date && (
                        <span className="text-gray-300">
                          {new Date(item.release_date).getFullYear()}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {item.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!hideArrows && showRightArrow && (
          <button
            className="absolute right-0 top-0 bottom-0 z-40 flex items-center justify-center w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
)}
      </div>
    </div>
  );
}