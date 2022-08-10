import Veiculo from '../../src/models/produto';

export default async function handler(req, res) {

  try {

    const data = await Produto.findAll();


    res.status(200).json({ Produto: data });

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

}
