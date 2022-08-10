import Veiculo from '../../src/models/veiculo';

export default async function handler(req, res) {

  try {

    const data = await Veiculo.findAll();


    res.status(200).json({ Veiculo: data });

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

}
