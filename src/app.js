class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life under control';
        const options = ['Option one', 'Option Two', 'Option three'];
        const option = '';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <Option option={option} />
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle} </h3>
            </div>
        )
    }
}
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.option = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.option}>Remove All</button>
                <ol>
                    {
                        this.props.options.map((op) => {
                            return <li>{op}</li>;

                        })
                    }
                </ol>
            </div>
        )
    }
}
class Action extends React.Component {
    handlePick() {
        alert('Hi bro');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick} >What should I do?</button>
            </div>
        )
    }
}
class AddOption extends React.Component {
    handleOptionSubmited(e) {
        e.preventDefault();
        let option = e.target.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOptionSubmited}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>{this.props.option}</div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));