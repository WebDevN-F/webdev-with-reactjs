import {useState} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function App() {
  const [value, setValue] = useState('recents')
  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue)
  }
  return (
    <article>
      <header>
        <h1>Hello Blog FlexBox</h1>
      </header>
      <main>
        <div className="main-contents">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        </p>
        
        </div>
      </main>
      <footer>
        <BottomNavigation value={value} onChange={handleChange} className="footer">
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </footer>
    </article>
  );
}

export default App;
