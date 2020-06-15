class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            btag: 'Show Details',
            ptag: '',

        }
    }
    handleToggle() {
        this.setState((prevState) => {
            if (prevState.btag === 'Show Details') {
                return {
                    btag: 'Hide Details',
                    ptag: 'Yo this some information about us',
                }
            }
            else {
                return {
                    btag: 'Show Details',
                    ptag: '',
                }
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.btag}</button>
                <p>{this.state.ptag}</p>
            </div>
        )
    }
}

const root = document.getElementById('app');

ReactDOM.render(<Visibility />, root);


