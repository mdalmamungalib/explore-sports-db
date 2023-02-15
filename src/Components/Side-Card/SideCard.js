import "./SideCard.css"

const SideCard = ({ player, handleDelete, }) => {
    const { idPlayer, strPlayer, strThumb } = player;
    return (
        <div className="side-card flex justify-between items-center mt-3 p-3">
            <img className="h-[35px] w-[60px] rounded-md" src={strThumb} alt="" />
            <h4>{strPlayer}</h4>
            <p>{idPlayer}</p>
            <button onClick={()=>handleDelete(idPlayer)} className="hover:bg-fuchsia-300 w-5 rounded-md">x</button>
        </div>
    );
};

export default SideCard;
