function Tweet({ username, name, date, message }){
  return (
    <div>
      <h1>Created by {username}</h1>
      <h2>Name: {name}</h2>
      <h2>Date: {date}</h2>
      <p>{message}</p>
    </div>
  );
}