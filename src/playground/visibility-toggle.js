class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide' : 'Show'}</button>
        {this.state.visibility && (<p>Hi</p>)}
      </div>
    );
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');
//
// let visibility = false;
//
// const onToggle = () => {
//   visibility = !visibility;
//   render();
// };
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>
//         {visibility ? 'Hide' : 'Show'}
//       </button>
//       {visibility && (
//         <p>Hi</p>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// render();
