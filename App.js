class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}