export default function Lancamento(){


return (
    <div>
        <form action="/" method="post">
        <label for="modelo">Modelo:</label>
        <select class="form-select"  name="modelo">
          <option selected value={null}>Modelo do Carro</option>
            
              <option value="Honda">Honda</option>
        </select>
        <p></p>
        <label for="veiculo">Veiculo:</label>
          
        <label for="cnpjdoPosto" class="form-label">CNPJ do Posto</label>
        <input type="text"  name="cnpjdoPosto" class="form-control"  required/>
        <p></p>

        
        <label for="quantidadedeLitros" class="form-label">Quantidade de Litro(s)</label>
        <input type="text" name="quantidadedeLitros" class="form-control" placeholder="Quantidade de L" required/>
        <p></p>


        <label for="kilometroRodado" class="form-label">Quilômetros Rodados</label>
        <input type="text" name="kilometroRodado" class="form-control" placeholder="Km rodado" required/>
        <p></p>

        <label for="valordoAbastecimento" class="form-label">Valor(es) do(s) Abastecimento(s)</label>
        <input type="text" name="valordoAbastecimento" class="form-control" placeholder="Valor abastecimento" required/>
        <p></p>

        
        <label for="datadoAbastecimento" class="form-label">Data do Abastecimento</label>
        <input type="date" name="datadoAbastecimento" class="form-control"  required/>
        <p></p>


        <input
          type="submit"
          className="bg-sucess"
          value="Confirmar"
        />
      </form>
    </div>
)

}