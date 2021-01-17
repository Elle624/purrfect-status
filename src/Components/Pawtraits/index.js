import React from 'react';

const Pawtraits = ({ savedPawtraits }) => {
  const pawtraits = savedPawtraits.map((pawtrait) => (
    <section
      className='picture-section'
      key={pawtrait.id}
      data-testid='saved-pawtrait'
    >
      <div
        className='cat-picture-wrapper'
        data-testid='background-cat-picture'
        style={{
          backgroundImage: `url(${pawtrait.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div></div>
        <figure className='dispay-inputs-wrapper'>
          <p>{pawtrait.statusCode}</p>
          <p>{pawtrait.explaination}</p>
        </figure>
      </div>
    </section>
  ));

  return <>{pawtraits}</>;
};

export default Pawtraits;
