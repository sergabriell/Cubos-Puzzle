import './style.css';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import cards from '../../cards';
import { useState } from 'react';
import CongratsImage from '../../assets/congrats.png';

function Main() {
  const [stateCards, setStateCards] = useState([...cards]);

  return (
    <div className='container'>

      <Sidebar
        cards={cards}
        setStateCards={setStateCards}
      />

      <div className='section-card'>

        <div
          className='container-cards'
          style={{ 'justifyContent': `${stateCards.length ? 'flex-start' : 'center'}` }}
        >

          {
            stateCards.length ?
              stateCards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  stateCards={stateCards}
                  setStateCards={setStateCards}
                />
              ))
              :
              <img src={CongratsImage} alt='Congrats' />
          }

        </div>

      </div>

    </div>
  );
}

export default Main;
