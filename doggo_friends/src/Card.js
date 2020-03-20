import React from 'react';

const Card = (props) => {
  const { name, about, id} = props;
  return (
    <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img style={{height: 200 + 'px', width: 200 + 'px'}}alt='photo' src={id}/>
      <div>
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default Card;
