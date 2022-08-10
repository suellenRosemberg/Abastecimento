import Posto_de_combustivel from '../../src/models/posto_de_combustivel';


export default async function handler(req, res) {

  try {

    const data = await Posto_de_combustivel.findAll();

    res.status(200).json({ Posto_de_combustivel: data });

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

}
