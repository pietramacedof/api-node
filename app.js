const express = require('express');

const app = express();

app.use(express.json());

const postRoutes = require('./routes/postRoutes');
const authRoute = require('./routes/authRoute');

const PORT = process.env.PORT || 3000;

app.use('/api', postRoutes);
app.use("/api", authRoute);

app._router.stack.forEach((route) => {
    if (route.route && route.route.path) {
        console.log(`Rota disponível: ${route.route.path}`);
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});