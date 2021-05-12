import React,{useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import instance from '../Axios'

function TinderCards() {
    const [people,setPeople] = useState([]);

    useEffect(()=>{
        console.log("useffect in");
        async function fetchData(){
            console.log("async in");
            console.log(instance.get());
            const req = await instance.get('/tinder/cards')
            setPeople(req.data);
            console.log("jijji")
        }
         fetchData();
    },[]);

    console.log(people);

    const swiped = (direction,nameToDelete) =>{
        console.log("removing: "+nameToDelete)
        // setLastDirection(direction);
    };

    const outOfFrame = (name) =>{
        console.log(name + 'left the screen');
    };

    return (
        <div className="tindercards">
            <div className="tindercards_container">
                {people.map((person) =>
                        <TinderCard 
                        className='swipe'
                        key = {person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir) => swiped(dir,person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}>
                            
                        <div style={{backgroundImage : `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                        </TinderCard>
                    )}
            </div>
        </div>
    );
}

export default TinderCards;
