
import { useEffect } from 'react';

const randomColor = '#' + (Math.random() * 0xffffff<< 0).toString(16);



export default function UseCustomHookChangeBGcolor() {


    const randColor = randomColor; 
    

    useEffect( (randColor) => {

        function handlecolor() {
            document.body.style.backgroundColor = randomColor  ;
            console.log( ' the color is '+ randColor)
        }

        handlecolor();

        window.addEventListener('mousedown', handlecolor);

        return()=>{

            window.removeEventListener('mousedown' , handlecolor)
        }


    }, [])

return { randColor }


}