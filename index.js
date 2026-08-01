import express from 'express'

const app = express();

app.get('/block', (req, res) => {
    const start = Date.now();

    while (Date.now() - start < 10000) {
        // Block event loop for 10 seconds
    }

    res.send(`Finished blocking ${process.pid}`);
});

app.get('/', (req, res) => {
    res.send(`Finished response ${process.pid}`);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});