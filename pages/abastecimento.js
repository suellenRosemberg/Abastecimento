import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
export default function Abastecimento() {

  const [posto_de_combustivel, setPosto_de_combustivel] = useState([])  

  /*export default function Lancamento(){


    return (
        <div>
            
        </div>
    )
    
    }
*/
  useEffect(  () => {

    async function getPosto_de_combustivel() {

      const apiUrlEndPoint = 'http://localhost:3000/api/db2'
      const response = await fetch(apiUrlEndPoint)
      const res = await response.json()

      setPosto_de_combustivel(res.posto_de_combustivel)
    }
    getPosto_de_combustivel()
  }, []);

  return (
    <div>
      <h1>Abastecimento: ? </h1>
      <Container className="col-md-12">
          <div className="col-md-5 bg-primary">Esse é o posto 1</div>
          <div className="col-md-5 bg-primary">Esse é o posto 2</div>
          <div className="col-md-2 bg-primary">Esse é o posto 3</div>
      </Container>

      <div className="card border border-danger" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://" alt="profile" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text</p>
        </div>
      </div>
    </div>
  );


}
