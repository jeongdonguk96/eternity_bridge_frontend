import "../css/Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <div className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
