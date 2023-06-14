import React from 'react';

const SelectedClass = ({mySelectedClass}) => {
    const { image, className, price, seats,} =mySelectedClass
    console.log(mySelectedClass)
    return (
        <div
            className="card w-96 p-6 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="rounded-lg img-size border-8 border-sky-600/30"
                src={image}
                alt="instructor"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-blue-900">
                Name of the class: {className}
              </h2>
              <p className="font-semibold text-sky-900 text-lg">
                Seats Available: {seats}
              </p>
              <p className="font-semibold text-sky-900 text-lg">
                Cost: ${price}
              </p>
              <div className="card-actions justify-start">
        
              </div>
            </div>
          </div>
    );
};

export default SelectedClass;