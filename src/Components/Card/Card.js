import React from "react";

const Card = ({ player, setCard, card }) => {

    const {strPlayer, strThumb, idPlayer, } = player;
    const handelAddToCard = () => {
        const info = {
            idPlayer,
            strPlayer,
            strThumb
        };
        if (card) {
            const newPlayer = [...card, info]
            setCard(newPlayer)
        }
    }

    const handleBookmark = () =>{
        const info = {
            idPlayer,
            strPlayer,
            strThumb
        };
        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(prevBookmark);
        if(oldBookmark){
            localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]))
        }
        else{
            localStorage.setItem("bookmark", JSON.stringify([info]))
            console.log("naiiiiiiiii")
        }
    }

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="card w-auto bg-slate-500 shadow-xl gap-5 ">
                <figure className="px-10 pt-10">
                    <img className="rounded" src={strThumb} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {strPlayer}</h2>
                    {/* <p>{strDescriptionEN?strDescriptionEN?.slice(0, 80): "lorem50"}</p> */}
                    <div className="card-actions flex">
                        <button className="btn btn-primary">Details</button>
                        <button onClick={handelAddToCard} className="btn btn-primary">Add To Card</button>
                        <button onClick={handleBookmark} className="btn btn-primary">Bookmark</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;
