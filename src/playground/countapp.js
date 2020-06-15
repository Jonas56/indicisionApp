/************************** React Version ******************************/
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.hadleMinusOne = this.hadleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    hadleMinusOne() {
        this.setState((prevState) => {
            if (prevState.count > 0) {
                return {
                    count: prevState.count - 1
                };
            }

        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.hadleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));







/**************************** JSX VERSION *****************************/


// const appRoot = document.getElementById('app');

// const user = {
//     name: 'Jonas',
//     age: '20',
//     location: 'Morocco , Rabat',
// }

// const addOne = () => {
//     count++;
//     renderCountApp();
// }
// const minusOne = () => {
//     count--;
//     renderCountApp();
// }
// const reset = () => {
//     count = 0;
//     renderCountApp();
// }


// let count = 0;

// const renderCountApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={reset}>Reset</button>
//             <button onClick={minusOne}>-1</button>

//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);

// }
// renderCountApp();