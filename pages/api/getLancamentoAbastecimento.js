import Lancamento_abastecimento from '../../src/models/lancamento_abastecimento';

export default async function handler(req, res) {

  try {

    const data = await Lancamento_abastecimento.findAll();


    res.status(200).json({ Lancamento_abastecimento: data });

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

}
