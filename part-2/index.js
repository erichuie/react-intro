function App(){
  return(
    <div>
      <Tweet
        username="flaskman"
        name="Matt"
        date="1/15/24"
        message="Flask is the best"
      />
      <Tweet
        username="expressman"
        name="Eric"
        date="1/15/24"
        message="No express is better don't @ me"
      />
      <Tweet
        username="reactman"
        name="Dave"
        date="1/15/24"
        message="react is great to use and teach"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);