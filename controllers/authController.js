const axios = require("axios");

const gerarToken = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await axios.post("http://localhost:8080/Hello_Servlet/login", 
            { email, password }, 
            { headers: { "Content-Type": "application/json" } }
        );
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao buscar as tarefas' });
    }
}

module.exports = { gerarToken };