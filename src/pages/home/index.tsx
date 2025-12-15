import { useState, type FormEvent } from "react";
import { Link } from "react-router";

import "./home.css";

interface ResultProps {
  classification: string;
  imc: number;
  color: string;
}

interface ClassificationProps {
  texto: string;
  cor: string;
}

export function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<ResultProps>();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isNaN(Number(weight)) || weight == "" || height == "") {
      alert("Por favor, preencha todos os campos!!!");
      return;
    }

    const heightInMeters = Number(height) / 100;
    const imc = Number(weight) / (heightInMeters * heightInMeters);

    function classificationImc(imc: number): ClassificationProps {
      if (imc < 18.5) {
        return {
          texto: "Magreza",
          cor: "#1E90FF",
        };
      }

      if (imc >= 18.5 && imc <= 24.9) {
        return {
          texto: "Normal",
          cor: "#2ECC71",
        };
      }

      if (imc >= 25.0 && imc <= 29.9) {
        return {
          texto: "Sobrepeso",
          cor: "#E74C3C",
        };
      }

      if (imc >= 30.0 && imc <= 39.9) {
        return {
          texto: "Obesidade",
          cor: "#A52A2A",
        };
      }

      return {
        texto: "Obesidade Grave",
        cor: "#FF0000",
      };
    }

    const classificationResult = classificationImc(imc);

    setResult({
      imc,
      classification: classificationResult.texto,
      color: classificationResult.cor,
    });

    setWeight("");
    setHeight("");
  }

  return (
    <div>
      <main className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu peso"
            value={weight}
            onChange={(e) => setWeight(e.target.value.replace(/\D/g, ""))}
          />

          <input
            type="text"
            placeholder="Digite sua altura"
            value={height}
            onChange={(e) => setHeight(e.target.value.replace(/\D/g, ""))}
          />

          <button type="submit">Calcular IMC</button>
        </form>

        <section className="result">
          {result && result.classification !== "" && (
            <div>
              <p>
                Seu IMC: <strong>{result.imc.toFixed(2)}</strong>
              </p>
              <p style={{color: result.color}}>
                Classificação: <strong>{result.classification}</strong>
              </p>
            </div>
          )}
        </section>

        <div className="learn-more">
          <Link to={"/saibamais/"}>
            <p>Veja como é feito o cálculo!</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
