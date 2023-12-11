import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const GamePage = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.comeon.game.launch(code);
  }, [code]);

  return (
    <div className="ingame">
      <div className="ui grid centered">
        <div className="three wide column">
          <div
            className="ui right floated secondary button inverted"
            onClick={() => {
              navigate(-1);
            }}
          >
            <i className="left chevron icon" />
            Back
          </div>
        </div>
        <div className="ten wide column">
          <div id="game-launch" />
        </div>
        <div className="three wide column" />
      </div>
    </div>
  );
};
