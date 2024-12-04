const rootElement = document.getElementById('root');

const element = React.createElement('div',
    {
        className: 'container',
        style: { fontSize: '30px' }
    },
    React.createElement('div', null, 'Hola mundo'),
    React.createElement('div', { style: { fontSize: '20px' } }, 'desde React')
);

ReactDOM.render(element, rootElement);