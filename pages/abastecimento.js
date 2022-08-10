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
  useEffect(() => {

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
      <h1>Controle de Abastecimento</h1>
      <Container className="col-md-12">
        <div className="col-md-5 bg-primary">Por gentileza preencher as informações abaixo:</div>
      </Container>

      

      <div>
        <form action="/" method="post">
          <label for="modelo">Modelo:</label>
          <select class="form-select" name="modelo">
            <option selected value={null}>Modelo do Carro</option>

            <option value="Honda">Honda</option>
          </select>
          <p></p>
          <label for="veiculo">Veiculo:</label>

          <label for="cnpjdoPosto" class="form-label">CNPJ do Posto</label>
          <input type="text" name="cnpjdoPosto" class="form-control" required />
          <p></p>


          <label for="quantidadedeLitros" class="form-label">Quantidade de Litro(s)</label>
          <input type="text" name="quantidadedeLitros" class="form-control" required />
          <p></p>


          <label for="kilometroRodado" class="form-label">Km Rodados</label>
          <input type="text" name="kilometroRodado" class="form-control" required />
          <p></p>

          <label for="valordoAbastecimento" class="form-label">Valor(es) do(s) Abastecimento(s)</label>
          <input type="text" name="valordoAbastecimento" class="form-control" required />
          <p></p>


          <label for="datadoAbastecimento" class="form-label">Data do Abastecimento</label>
          <input type="date" name="datadoAbastecimento" class="form-control" required />
          <p></p>


          <input
            type="submit"
            className="bg-sucess"
            value="Confirmar"
          />
        </form>
      </div>
    </div>
  );


}
