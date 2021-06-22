import './Button.scss';

function Button(props) {
  return (
    <div className="half">
      <div className="button">
        <input type="checkbox" id={props.children} checked />
        <label for={props.children}>{props.children}</label>
      </div>
    </div>
  );
}

export default Button;
