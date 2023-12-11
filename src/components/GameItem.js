
import { useNavigate } from 'react-router-dom';

export const GameItem = ({ name, description, icon, code }) => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate('/games/' + code);
    }

  return (
    <div className="game item">
      <div className="ui small image">
        <img src={icon} alt="game-icon" />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">{name}</b>
        </div>
        <div className="description">{description}</div>
        <div className="extra">
          <div className="play ui right floated secondary button inverted" onClick={handlePlay}>
            Play
            <i className="right chevron icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
