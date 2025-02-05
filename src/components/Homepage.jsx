import react from'react'

import lotion from "../assets/lotion.webp";
import gadget from "../assets/gadget.webp";
import { useNavigate } from 'react-router-dom';
import "../styles/Homepage.css";
export const productlist= [
    {
    id:1,
    image:lotion,
    cardTitle:'oil',
    },
    {
    id:2,
    image:gadget,
    cardTitle:'sugar',
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
                <div ><img src={item.image}/></div>
                <div className='tit'>{item.cardTitle}</div>
                <button type='button'className='btn1'
                onClick={()=>handleNavigate(item.id)}
                >view</button>
            </div>
           ))}
        </div>
    )
}
export default Homepage;