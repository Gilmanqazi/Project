import React from 'react';

const Card = (props) => {
  console.log(props.elem.name)
  return (
    <div className='h-[50vh] w-[20vw] bg-emerald-700 rounded-lg text-center items-center'>
<h1>{props.elem.name}</h1>
<h4>{props.elem.username}</h4>
<p>{props.elem.email}</p>
    </div>
  );
};

export default Card;