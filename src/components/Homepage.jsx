import react from'react'

import water from "../assets/water.webp";
import alexa from "../assets/alexa.webp";
import headset from "../assets/headset.webp"
import { useNavigate } from 'react-router-dom';
// import "../styles/Homepage.css";
export const productlist= [
    {
    id:1,
    image:water,
    cardTitle:'All in one Bottle',
    },
    {
    id:2,
    image:alexa,
    cardTitle:'Amazon Alexa',
    },
    {
     id:3,
        image:headset,
        cardTitle:'Headset Gammer Region',
       
     },

    
       
];

function Homepage() {
    const navigation = useNavigate();

    const handleNavigate = (id) => {
        navigation(`/singlecard/${id}`)
    }
    return(
        <div className='navcontainer'>
           {productlist.map((item)=> (
            <div className='cont'key={item.id}>
                <div className='mimi'><img src={item.image}/></div>
                <div className='tit'>{item.cardTitle}</div>
                {/* <button type='button'className='btn1'
                onClick={()=>handleNavigate(item.id)}
                >view</button> */}
            </div>
           ))}
        </div>
    )
}
export default Homepage;