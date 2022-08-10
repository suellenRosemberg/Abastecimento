import Modelo_veiculo from '../../src/models/modelo_veiculo';

export default async function handler(req, res) {

  try {

    const data = await Modelo_veiculo.findAll();


    res.status(200).json({ Modelo_veiculo: data });

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

}
