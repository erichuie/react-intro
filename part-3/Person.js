function Person(props){

  let message;
  if (props.age > 18) {
    message = "please go vote!";
  } else {
    message = "you must be 18";
  }

  let truncatedName = props.name.length > 8
    ? props.name.slice(0,6)
    : props.name;


  return (
    <div>
      <p>Learn some information about this person.</p>
      <h3>{truncatedName} {message}</h3>
    </div>
  )
}