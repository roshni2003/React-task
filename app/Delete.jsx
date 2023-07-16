
function DeleteBtn({onDelete}){
    return(
    <>
    <div className="delete">
        <img className="Delete_icon" src="fluent_delete-32-regular@2x.png" onClick={onDelete}></img>
    </div>
    </>
    )
}
export default DeleteBtn;
