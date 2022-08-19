import PostoCombustivel from "../../src/models/PostoCombustivel";



export default async function handler(req, res) {

  try {

    const data = await PostoCombustivel.findAll();

    res.status(200).json({ PostoCombustivel: data });

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

}
