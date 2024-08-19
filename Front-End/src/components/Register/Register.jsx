import React from 'react';
import './Regsiter.css';
const Register = () => {
  const cards = [
      {
        id: 1,
        title: 'Individual',
        description:'Register to contribute as an Individual',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUifInkgLw6gxPtqSIKwAk_QOnBH8KvHs2w&s'
      },
      {
        id: 2,
        title: 'Company',
        description:'Register to contribute as an Organization',
        imageUrl: 'https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-company-line-icon-vector-png-image_6707332.png'
      },
    ];
  return (
    <div className="Register-page">
      <div className="Regsiter">
        <h2 className="text-3xl font-medium text-center text-gray-800 pb-20">Register</h2>
      </div>
      <div className="Square">  
        <div className="CardsContainer">
          {cards.map(card => (
            <div className="Card" key={card.id}>
              <img src={card.imageUrl} alt={card.title} />
              <div className="Card-title">{card.title}</div>
              <div className="Card-description">{card.description}</div>
              <button className='Register-button'>Regsiter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Register;
