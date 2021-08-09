import Expenses from './components/Expenses/Expenses';

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2021, 7, 9),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 7, 8) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 7, 7),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 7, 6),
        },
    ];

    return (
        <div>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
