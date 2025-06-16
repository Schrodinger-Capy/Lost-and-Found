import AddItemButton from './AddItemButton.jsx';
import NavigationBar from './NavigationBar.jsx'
import SearchBar from './SearchBar.jsx'
import bag from './assets/bag.jpg'
import keys from './assets/keys.jpg'
import laptop from './assets/laptop.jpg'
import laptopcharger from './assets/laptopcharger.jpg'
import phone from './assets/phone.jpg'
import wallet from './assets/wallet.jpg'
import {useState} from 'react'
import ItemCard from './ItemCard.jsx';
import ItemPopup from './ItemPopup.jsx';
import AddItemPopup from './AddItemPopup.jsx';

function HomePage() {
  const items=[
    {
      id: 1,
      image: bag,
      title: "Bag",
      description: "Black-grey laptop bag having three chains",
      location: "Found in library",
      contact: "Alice",
      phone: "0123-456-789"
    },
    {
      id: 2,
      image: keys,
      title: "Keys",
      description: "Black-grey laptop bag having three chains",
      location: "Found near cafeteria",
      contact: "Bob",
      phone: "0123-456-789"
    },
    {
      id: 3,
      image: laptop,
      title: "Laptop",
      description: "Grey metallic HP pavillion laptop bag with iitk sticker on it.",
      location: "Found on second floor of library",
      contact: "Candice",
      phone: "0123-456-789"
    },
    {
      id: 4,
      image: phone,
      title: "Phone",
      description: "Iphone14 with black cover",
      location: "Found iat DJaC",
      contact: "Duke",
      phone: "0123-456-789"
    },
    {
      id: 5,
      image: laptopcharger,
      title: "Laptop Charger",
      description: "Black laptop charger of 100W",
      location: "Found in library",
      contact: "Elissa",
      phone: "0123-456-789"
    },
    {
      id: 6,
      image: wallet,
      title: "Wallet",
      description: "Black wallet having 2000 Rs Cash",
      location: "Found in library",
      contact: "Fin",
      phone: "0123-456-789"
    }
  ]

  const[selectedItem, setSelectedItem] = useState(null);
  const[showPopup,setShowPopup] = useState(false)

  return(<><div>
    <NavigationBar></NavigationBar>
    <SearchBar></SearchBar>
    <AddItemButton onClick={()=>setShowPopup(true)}></AddItemButton>
    
    <div className='itemgrid'>
      {
        items.map(item =>(<ItemCard key={item.id} item={item} onClick={()=>setSelectedItem(item)}/>))
      }
    </div>
    {selectedItem && (<ItemPopup item={selectedItem} onClose={()=>setSelectedItem(null)}/>)}</div>
    {showPopup && (<AddItemPopup onClose = {()=>setShowPopup(false)}/>)}
    </>
  );
}

export default HomePage;