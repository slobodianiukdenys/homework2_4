const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Вітаємо!');
});

app.get('/track/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    res.send(`ID вашго замовлення ${orderId}`);
});

app.use((req, res, next) => {
    res.status(404).send("Не знайдено");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(300).send('Щось пішло не так');
});

app.listen(PORT, () => {
    console.log(`started on http://localhost:${PORT}`);
});