import './style.css';
import Icon from '../../assets/icon.svg';

function Sidebar({ cards, setStateCards }) {

    function handleResetCard() {
        cards.forEach(card => {
            card.turned = false;
        });

        setStateCards(cards);
    }

    return (
        <div className='menu-left'>

            <div className='div-top'>
                <img src={Icon} alt='Icon' />
                <span>Cubos Puzzle</span>
            </div>

            <div className='div-bot'>
                <button
                    onClick={() => handleResetCard()}
                >Reset</button>
            </div>

        </div>
    )
}

export default Sidebar;