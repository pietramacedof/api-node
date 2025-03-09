const axios = require('axios');

const getLocations = async (req, res) => {
  try {
    const token = req.headers.authorization; 

    const response = await axios.get('http://localhost:8080/Hello_Servlet/registerLocation', {
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        }
    });

    res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar locais', details: error.message });
  }
};

const newLocation = async (req, res) => {
  try {
    const token = req.headers.authorization; 

    const response = await axios.post('http://localhost:8080/Hello_Servlet/registerLocation', req.body, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        }
    });

    res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar local', details: error.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    const token = req.headers.authorization; 
    const locationId = req.params.id;
    const locationData = req.body; 

    const response = await axios.put(
      `http://localhost:8080/Hello_Servlet/registerLocation/${locationId}`,
      locationData, 
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar local", details: error.message });
  }
};


const deleteLocation = async (req, res) => {
  try {
    const token = req.headers.authorization; 
    console.log(req.params);
    const locationId = req.params.id;
    const response = await axios.delete(`http://localhost:8080/Hello_Servlet/registerLocation/${locationId}`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        }
    });

    res.json(response.data);
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao deletar local', details: error.message });
  }
};

module.exports = { getLocations, newLocation, updateLocation, deleteLocation };