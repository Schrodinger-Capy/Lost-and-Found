function ItemCard({item,onClick}){
    return(
        <div className="itemcard" onClick={onClick}>
            <img src={item.image} alt={item.title} className="itemcardimage"/>
            <h2><b>{item.title}</b></h2>
            <p><b>Description : </b>{item.description}</p>
            <p><b>Location : </b>{item.location}</p>
            <p><b>Contact : </b>{item.contact}</p>
            <p><b>Phone : </b>{item.phone}</p>
        </div>
    );
}
export default ItemCard;