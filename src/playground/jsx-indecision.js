

console.log('App is running');

//JSX - JavaScript XML
const templateapp = {
    title: 'Indicision App',
    subtitle: 'This is a subtitle',
    options: [],
}

const onForSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        templateapp.options.push(option);
        e.target.elements.option.value = '';
        rendertemplateapp();
    }
}
const onMakeTask = () => {
    const task = Math.floor(Math.random() * templateapp.options.length);
    const appoption = templateapp.options[task];
    alert(task + 1 + '.' + appoption);
    // templateapp.options[task].splice();
    // rendertemplateapp();

}

const removeAll = () => {
    templateapp.options.length = 0;
    rendertemplateapp();
}
const screenarray = [2, 4, 6];

const rendertemplateapp = () => {
    const template = (

        <div>
            <h1>{templateapp.title}</h1>
            <p>{templateapp.subtitle.length > 0 && templateapp.subtitle}</p>
            <p>{templateapp.options.length > 0 ? 'Here is your options' : 'No options'}</p>
            <button onClick={onMakeTask} disabled={templateapp.options.length == 0}>What should i do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    templateapp.options.map((num, i) => {
                        return (
                            <li>{templateapp.options[i]}</li>
                        )
                    })
                }
            </ol>
            <form onSubmit={onForSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}
const appRoot = document.getElementById('app');

rendertemplateapp();






