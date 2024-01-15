function App(){
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Eric"/>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);