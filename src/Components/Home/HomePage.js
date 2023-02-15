import React, { useEffect, useState } from 'react';
import { lime } from 'tailwindcss/colors';
import Card from '../Card/Card';
import Search from '../SearchBar/Search';
import SideCard from '../Side-Card/SideCard';
import Swal from 'sweetalert2'

const HomePage = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => { setPlayers(data?.player) })
    }, [search]);

    const handleDelete = (id) => {
        const leftPlayer = card.filter((pd) => pd.idPlayer !== id);
        setCard(leftPlayer);  
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }

    return (
        <div>
            {/*===================== 
                     search
            ========================*/}
            <div>
                <Search search={search} setSearch={setSearch}></Search>
            </div>
            <div className='flex gap-6 mt-5 p-10'>
                {/*===================== 
                      fast 
            ========================*/}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    {
                        players.map(player => <Card player={player} key={player?.idPlayer} card={card} setCard={setCard}></Card>)
                    }
                </div>
                {/*===================== 
                      secount 
            ========================*/}
                <div>

                    <div className="card bg-base-300 w-96 rounded-box place-items-center p-3">
                        <h1 className="text-center text-2xl font-bold text-pink-500">ADD TO CARD SECTION</h1>
                        <div>
                            {
                                card.map(p => (<SideCard player={p} handleDelete={handleDelete}></SideCard>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;