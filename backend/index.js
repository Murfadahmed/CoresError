import express from 'express'

const PORT = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
    res.send('server is ready')
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 2,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 3,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 4,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 5,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 6,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 7,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 8,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 9,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
        {
            id: 10,
            title: 'here is the first joke',
            description: 'the joke is where all are smiles'
        },
    ]
    res.send(jokes)
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})