import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        //   const newPeople = people.filter((person) => person.id == id);
        //       //   // setpeople(newPeople);
        //       // };
        return (
          <article key={id} className="person">
            {/* <img src={image} alt={name} /> */}
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            {/* <button className="btn" type="button">
  //             remove
  //           </button> */}
          </article>
        );
      })}
    </>
  );
};

export default List;
