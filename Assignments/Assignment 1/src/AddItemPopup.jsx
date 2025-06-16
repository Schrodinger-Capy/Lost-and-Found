function AddItemPopup({onClose}){
    return(
        <div className="aipopupbg">
            <div className="aipopupcontent">
                <h2>Add New Item To The List</h2>
                <p><b>Name of the Object : </b><br/><input className="inputaip" type="text" placeholder="Upload name of the object"/></p>
                <p><b>Upload image of the Object : </b><br/><input className="inputaip" type="file" accept="image/*" placeholder="Upload image of the object"/></p>
                <p><b>Description of the Object :</b><br/><input className="inputaip" type="text" placeholder="Upload description of the object"/></p>
                <p><b>Location of the Object : </b><br/><input className="inputaip" type="text" placeholder="Upload location of the object where it was lost/found"/></p>
                <p><b>Owner/Founder of the Object : </b><br/><input className="inputaip" type="text" placeholder="Whom to contact?"/></p>
                <p><b>PhoneNo. of the Owner/Founder : </b><br/><input className="inputaip" type="text" placeholder="Upload phone number of the owner/founder"/></p>
                <button id="aipopupbutton" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
export default AddItemPopup;