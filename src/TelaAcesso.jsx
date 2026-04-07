import React, { useState, useRef, useEffect } from "react";
import ForceGraph3D from "react-force-graph-3d";
import logoLiesa from "./assets/logo-liesa.png";

const dadosFundoLogin = {
  nodes: [...Array(1000).keys()].map((i) => ({
    id: i,
    color: i % 3 === 0 ? "#2ecc71" : i % 2 === 0 ? "#3498db" : "#e74c3c",
    val: Math.random() * 5 + 2,
  })),
  links: [...Array(500).keys()].map((i) => ({
    source: i,
    target: Math.floor(Math.random() * 100),
  })),
};

// Perceba que agora o componente recebe a prop { aoLogar }
function TelaAcesso({ aoLogar }) {
  const fgRef = useRef();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  //   const [patente, setPatente] = useState("Diretor de Harmonia");

  useEffect(() => {
    if (!fgRef.current) return;
    fgRef.current.controls().noZoom = true;
    fgRef.current.controls().noPan = true;
    fgRef.current.controls().noRotate = true;

    let angle = 0;
    const distance = 300;
    let animationId; // CRIAMOS A VARIÁVEL AQUI FORA

    const rotacionarCamera = () => {
      angle += 0.001;
      if (fgRef.current) {
        fgRef.current.cameraPosition({
          x: distance * Math.sin(angle),
          z: distance * Math.cos(angle),
          y: 50,
        });
      }
      // AGORA SALVAMOS O ID DO NOVO FRAME A CADA GIRO
      animationId = requestAnimationFrame(rotacionarCamera);
    };

    animationId = requestAnimationFrame(rotacionarCamera);

    // QUANDO A TELA MORRER (LOGIN), ELE MATA A ANIMAÇÃO CORRETAMENTE
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Em vez de um alert, nós ativamos a função que veio do App.jsx
    // Passamos os dados do usuário para o App guardar!
    aoLogar({ email: email });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <ForceGraph3D
          ref={fgRef}
          graphData={dadosFundoLogin}
          backgroundColor="#000000"
          nodeColor="color"
          nodeVal="val"
          nodeRelSize={2}
          linkColor={() => "rgba(255, 255, 255, 0.99)"}
          linkWidth={0.5}
          showNavInfo={false}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            width: "400px",
            padding: "40px",
            backgroundColor: "rgba(26, 26, 31, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            color: "white",
            textAlign: "center",
          }}
        >
          <img src={logoLiesa} />
          <h1
            style={{
              margin: "0 0 10px 0",
              fontSize: "28px",
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Universo
          </h1>
          <h2
            style={{
              margin: "0 0 30px 0",
              fontSize: "18px",
              color: "#aaa",
              textTransform: "uppercase",
              letterSpacing: "4px",
            }}
          >
            do Carnaval
          </h2>

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <input
              type="email"
              placeholder="E-mail do Sambista"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={estiloInput}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={estiloInput}
            />
          </div>

          {/* <div style={{ marginBottom: "30px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#bbb",
              }}
            >
              Sua Patente na Rede:
            </label>
            <select
              value={patente}
              onChange={(e) => setPatente(e.target.value)}
              style={estiloInput}
            >
              <option value="Folião de Arquibancada">
                Folião de Arquibancada
              </option>
              <option value="Ritmista">Ritmista</option>
              <option value="Diretor de Harmonia">Diretor de Harmonia</option>
              <option value="Carnavalesco">Carnavalesco</option>
              <option value="Baluarte Histórico">Baluarte Histórico</option>
            </select>
          </div> */}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Entrar na Avenida
          </button>
        </form>
      </div>
    </div>
  );
}

const estiloInput = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "6px",
  border: "1px solid #444",
  backgroundColor: "rgba(0,0,0,0.3)",
  color: "white",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};

export default TelaAcesso;
