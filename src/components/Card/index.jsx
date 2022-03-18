import CardBack from '../../assets/card-back.png';
import './style.css';

function Card({ card, stateCards, setStateCards }) {

    function handleChangeTurned() {
        const localCards = [...stateCards];

        const currentCard = localCards.find((item) => item.id === card.id);

        const onlyTurnedCards = localCards.filter((item) => item.turned);

        if (onlyTurnedCards.length >= 2) {
            return;
        }

        if (onlyTurnedCards.length && card.id === onlyTurnedCards[0].id) {
            return;
        }

        if (onlyTurnedCards.length && card.slug === onlyTurnedCards[0].slug) {
            currentCard.turned = !currentCard.turned;
            setStateCards(localCards);

            handleClearCards(currentCard, onlyTurnedCards[0], localCards);
            return;
        }

        currentCard.turned = !currentCard.turned;
        setStateCards(localCards);

        if (onlyTurnedCards.length) {
            setTimeout(() => {
                localCards.forEach((item) => {
                    item.turned = false;
                })
                setStateCards([...localCards]);
            }, 800);
        }
    }

    function handleClearCards(card1, card2, localCards) {
        if (card1.id === card2.id) {
            return;
        }

        setTimeout(() => {
            const filterdCards = localCards.filter((item) =>
                item.id !== card1.id && item.id !== card2.id
            )

            setStateCards(filterdCards);
        }, 800);
    }

    return (
        <img
            className='img-cards'
            key={card.id}
            src={card.turned ? card.image : CardBack}
            alt='card'
            onClick={() => handleChangeTurned()}
        />
    )
}

export default Card;