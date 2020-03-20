import React from 'react';
import Card from './Card';

const CardList = ({doggos}) => {
  return (
    <div>
      {
        doggos.map((user, i) => {
          return (
            <Card
              key={i}
              id = {doggos[i].id}
              name = {doggos[i].name}
              about = {doggos[i].about}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
