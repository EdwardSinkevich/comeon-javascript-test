import logo from '../assets/logo.svg';

export const Logo = () => {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
