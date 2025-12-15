import { Link } from "react-router";
import img_01 from "../../assets/img-formula-imc.png";
import img_02 from "../../assets/img-formula-imc-02.png";
import "./saibamais.css";

export function SaibaMais() {
  return (
    <div>
      <section className="learn-more">
        <div className="learn-more-text">
          <h1>Entenda o Cálculo do IMC: Sua Saúde em Números</h1>
          <p>
            O Índice de Massa Corporal (IMC) é uma ferramenta simples e
            amplamente utilizada para avaliar se o seu peso está adequado à sua
            altura. Ele serve como um indicador inicial de possíveis riscos à
            saúde relacionados ao peso corporal.
          </p>
          <h2>A Fórmula do IMC</h2>
          <p>
            O cálculo do IMC é muito fácil e envolve apenas duas medidas suas:
            peso e altura. A fórmula matemática é a seguinte:
          </p>
          <img src={img_01} alt="Imagem da fórmula do IMC" />
          Peso: Deve ser inserido em quilogramas (kg). Altura: Deve ser inserida
          em metros (m) (Exemplo: 1,70). Exemplo: Se você pesa 70 kg e mede 1,75
          m:
          <img src={img_02} alt="Imagem da fórmula do IMC" />
          <h2>Classificação e o que os Números Significam</h2>
          <p>
            Após calcular o seu IMC, o resultado é comparado a uma tabela de
            classificação estabelecida pela Organização Mundial da Saúde (OMS).
            Essa tabela indica em qual faixa de peso você se encontra,
            oferecendo uma ideia de risco à saúde:
          </p>
          <div className="table">
            <div className="result-imc">
              <ul>
                <li className="classification-name">Menor que 18,5</li>
                <li className="classification-name">Entre 18,5 e 24,9</li>
                <li className="classification-name">Entre 25,0 e 29,9</li>
                <li className="classification-name">Entre 30,0 e 39,9</li>
                <li className="classification-name">Maior que 40,0</li>
              </ul>
            </div>
            <div className="classification-list">
              <ul>
                <li className="classification-name">Magreza</li>
                <li className="classification-name">Normal</li>
                <li className="classification-name">Sobrepeso</li>
                <li className="classification-name">Obesidade</li>
                <li className="classification-name">Obesidade Grave</li>
              </ul>
            </div>
          </div>
          <p>
            <span className="inportant">Importante:</span> O IMC é apenas um
            indicador. Ele não mede diretamente a gordura corporal nem considera
            a distribuição de massa muscular. Para uma avaliação completa da sua
            saúde e composição corporal, consulte sempre um profissional da área
            de saúde.
          </p>
          <footer>
            <Link to={"/"}>
              <span>Voltar para página inicial</span>
            </Link>
          </footer>
        </div>
      </section>
    </div>
  );
}
