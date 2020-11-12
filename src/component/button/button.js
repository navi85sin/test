

const Button = (props) => {


    return (
        <div className= 'button-wrapper' >
        <button className= "button-class" >{props.text}</button>
    </div>
    );
}

export default Button;