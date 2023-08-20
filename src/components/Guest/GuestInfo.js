import "./Guest_info.css";
import { LiaPlusSquare } from "react-icons/lia";
import { LiaMinusSquare } from "react-icons/lia";

const GuestInfo = ({ title, age, number, onIncrement, onDecrement }) => {
  return (
    <div className="guest__info">
      <h4>{title}</h4>
      <p>{age}</p>
      <div className="guest__info-buttons">
        <button onClick={onDecrement}>
          <LiaMinusSquare />
        </button>
        {number}
        <button onClick={onIncrement}>
          <LiaPlusSquare />
        </button>
      </div>
    </div>
  );
};

export default GuestInfo;
