var Square = (props) => {
  return (
    <button className="square" onClick={()=>props.callback()}>
      {props.value}
    </button>
  );
};



window.Square = Square;