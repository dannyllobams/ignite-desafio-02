import '../styles/sidebar.scss';

import { Button } from '../components/Button';

interface SideBarProps {
  genres: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>;
  selectedGenreId: number,
  setSelectedGenreId: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, setSelectedGenreId }: SideBarProps) {
  // Complete aqui
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
      
    </nav>
  )
}