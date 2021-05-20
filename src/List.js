import React from 'react';
/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
        const {id,name,gender,image,facebook}=person;
        return <article key={id} className="person">
          <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
            <h4>{gender}</h4>
            <h4><a href={facebook} target="_blank">Check Facebook Profile</a></h4>
            </div>

        </article>

      })}
    </>
  );
};

export default List;
