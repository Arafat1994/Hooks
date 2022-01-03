import React, { useMemo, useState } from "react";

const randomColor = ()=> '#'+ (Math.random()*0xffffff<<0).toString(16) ; 

export function UseMemoHook(props) {

    const [Fname, setFname] = useState(''); const [Lname, setLname] = useState(''); const [age, setAge] = useState('');

   //const randomColor = ()=> '#'+ (Math.random()*0xffffff<<0).toString(16) ; 
   // here the problem is with every change he will change the value of random color 

   //before we use memo any change in fname or lname or age 
   //after memo uage the value of color  will change only when you change the fname and lname 
   //after memo change the age dosnot change the color value  

    const fullname = useMemo(()=> <span style={{color :randomColor()}}> {Fname} {Lname} </span> , [Fname , Lname]);

    return (
        <div>
            fullname :   {fullname}
            <p> age : {age}</p>
            <br />
            <input value={Fname} placeholder='Enter your FName' onChange={(e) => setFname(e.target.value)} />
            <input value={Lname} placeholder='Enter your lName' onChange={(e) => setLname(e.target.value)} />
            <input value={age} placeholder='Enter your age' type='number' onChange={(e) => setAge(e.target.value)} />

        </div>

    );
}