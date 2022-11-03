import { useState } from "react";



const Home = () => {
    const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    return ( 
        <div>
            {days.map((day)=>(
                <a href=''>{day}</a>
            ))}
        </div>
     );
}
 
export default Home;