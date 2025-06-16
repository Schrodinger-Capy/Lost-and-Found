function ItemPopup({item,onClose}){
    return(
        <div className="popupbg">
            <div className="popupcontent">
                <h2 id="popupitemtitle">{item.title}</h2>
                <img src={item.image} alt={item.title} className="popupitemimage"/>
                <p className="popupheading"><b>Description :</b> {item.description}</p>
                <p className="popupheading"><b>Location :</b> {item.location}</p>
                <p className="popupheading"><b>Contact :</b> {item.contact}</p>
                <p className="popupheading"><b>Phone :</b> {item.phone}</p>
                <button onClick={onClose} className="popupclosebutton">Close</button>
            </div>
        </div>
    );
}
export default ItemPopup;