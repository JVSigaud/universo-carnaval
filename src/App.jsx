import React, { useState, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "https://esm.sh/three/examples/jsm/renderers/CSS2DRenderer.js";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import ForceGraph2D from "react-force-graph-2d";
import TelaAcesso from "./TelaAcesso";
const extraRenderers = [new CSS2DRenderer()];
const dadosDoCarnaval = {
  nodes: [
    // --- ESCOLAS (As 12 Tradicionais - Esqueleto do Grafo) ---
    {
      id: "MANGUEIRA",
      name: "Mangueira",
      val: 40,
      group: "escola",
      color: "#008000",
    },
    {
      id: "PORTELA",
      name: "Portela",
      val: 40,
      group: "escola",
      color: "#0000CD",
    },
    {
      id: "BEIJA_FLOR",
      name: "Beija-Flor",
      val: 40,
      group: "escola",
      color: "#1E90FF",
    },
    {
      id: "SALGUEIRO",
      name: "Salgueiro",
      val: 40,
      group: "escola",
      color: "#B22222",
    },
    {
      id: "VILA_ISABEL",
      name: "Vila Isabel",
      val: 40,
      group: "escola",
      color: "#87CEEB",
    },
    {
      id: "IMPERATRIZ",
      name: "Imperatriz",
      val: 40,
      group: "escola",
      color: "#228B22",
    },
    {
      id: "MOCIDADE",
      name: "Mocidade",
      val: 40,
      group: "escola",
      color: "#32CD32",
    },
    {
      id: "VIRADOURO",
      name: "Viradouro",
      val: 40,
      group: "escola",
      color: "#DC143C",
    },
    {
      id: "GRANDE_RIO",
      name: "Grande Rio",
      val: 40,
      group: "escola",
      color: "#FF0000",
    },
    {
      id: "UNIDOS_TIJUCA",
      name: "Unidos da Tijuca",
      val: 40,
      group: "escola",
      color: "#FFD700",
    },
    {
      id: "SAO_CLEMENTE",
      name: "São Clemente",
      val: 40,
      group: "escola",
      color: "#FFFF00",
    },
    {
      id: "ESTACIO",
      name: "Estácio de Sá",
      val: 40,
      group: "escola",
      color: "#8B0000",
    },

    // --- BALUARTES (Antigos) ---
    {
      id: "CARTOLA",
      name: "Cartola",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "JAMELAO",
      name: "Jamelão",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "PAULO_PORTELA",
      name: "Paulo da Portela",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "CLARA_NUNES",
      name: "Clara Nunes",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "JOAOZINHO_30",
      name: "Joãosinho Trinta",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "NEGUINHO",
      name: "Neguinho da Beija-Flor",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "MARTINHO",
      name: "Martinho da Vila",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "ROSA_MAGALHAES",
      name: "Rosa Magalhães",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "PAMPLONA",
      name: "Fernando Pamplona",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "MESTRE_ANDRE",
      name: "Mestre André",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },

    // --- BALUARTES (NOVOS) ---
    {
      id: "NELSON_CAVAQUINHO",
      name: "Nelson Cavaquinho",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "DONA_NEUMA",
      name: "Dona Neuma",
      val: 10,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "PAULINHO_VIOLA",
      name: "Paulinho da Viola",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "CANDEIA",
      name: "Candeia",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "ELZA_SOARES",
      name: "Elza Soares",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "ZE_KATIMBA",
      name: "Zé Katimba",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "PAULO_BARROS",
      name: "Paulo Barros",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "QUINHO",
      name: "Quinho do Salgueiro",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "DOMINGUINHOS",
      name: "Dominguinhos do Estácio",
      val: 12,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "ZECA_PAGODINHO",
      name: "Zeca Pagodinho",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },
    {
      id: "ISMAEL_SILVA",
      name: "Ismael Silva",
      val: 15,
      group: "pessoa",
      color: "#bdc3c7",
    },

    // --- FOTOS DE BASTIDORES (Antigas + NOVAS) - Ligam apenas pessoas ---
    {
      id: "F_BAR_ZICARTOLA",
      name: "Encontro no Zicartola",
      val: 8,
      group: "foto",
      color: "#f39c12",
    },
    {
      id: "F_BARRACAO_70",
      name: "Barracão Anos 70",
      val: 8,
      group: "foto",
      color: "#f39c12",
    },
    {
      id: "F_GRAVACAO",
      name: "Gravação de LP",
      val: 8,
      group: "foto",
      color: "#f39c12",
    },
    {
      id: "F_CACIQUE",
      name: "Roda no Cacique de Ramos",
      val: 8,
      group: "foto",
      color: "#f39c12",
    }, // NOVA
    {
      id: "F_VELHA_GUARDA",
      name: "Show da Velha Guarda (1980)",
      val: 8,
      group: "foto",
      color: "#f39c12",
    }, // NOVA

    // --- FOTOS DE DESFILES (Antigas + NOVAS) - Ligam Pessoas E Escolas ---
    {
      id: "D_RATOS",
      name: "Desfile Ratos e Urubus (1989)",
      val: 12,
      group: "desfile",
      color: "#e74c3c",
    },
    {
      id: "D_KIZOMBA",
      name: "Desfile Kizomba (1988)",
      val: 12,
      group: "desfile",
      color: "#e74c3c",
    },
    {
      id: "D_AQUARELA",
      name: "Desfile Aquarela do Brasil",
      val: 12,
      group: "desfile",
      color: "#e74c3c",
    },
    {
      id: "D_DNA",
      name: "Desfile DNA (2004)",
      val: 12,
      group: "desfile",
      color: "#e74c3c",
    }, // NOVA
    {
      id: "D_TREVAS_LUZ",
      name: "Desfile Trevas! Luz! (1997)",
      val: 12,
      group: "desfile",
      color: "#e74c3c",
    }, // NOVA
    {
      id: "D_PEGUEI_ITA",
      name: "Peguei um Ita no Norte (1993)",
      val: 12,
      group: "desfile",
      color: "#e74c3c",
    }, // NOVA
  ],
  links: [
    // --- LIGAÇÕES: BALUARTES -> ESCOLAS (Antigas) ---
    { source: "CARTOLA", target: "MANGUEIRA" },
    { source: "JAMELAO", target: "MANGUEIRA" },
    { source: "PAULO_PORTELA", target: "PORTELA" },
    { source: "CLARA_NUNES", target: "PORTELA" },
    { source: "JOAOZINHO_30", target: "SALGUEIRO" },
    { source: "JOAOZINHO_30", target: "BEIJA_FLOR" },
    { source: "JOAOZINHO_30", target: "VIRADOURO" },
    { source: "NEGUINHO", target: "BEIJA_FLOR" },
    { source: "MARTINHO", target: "VILA_ISABEL" },
    { source: "ROSA_MAGALHAES", target: "IMPERATRIZ" },
    { source: "ROSA_MAGALHAES", target: "SALGUEIRO" },
    { source: "ROSA_MAGALHAES", target: "VILA_ISABEL" },
    { source: "PAMPLONA", target: "SALGUEIRO" },
    { source: "MESTRE_ANDRE", target: "MOCIDADE" },

    // --- LIGAÇÕES: BALUARTES -> ESCOLAS (NOVAS) ---
    { source: "NELSON_CAVAQUINHO", target: "MANGUEIRA" },
    { source: "DONA_NEUMA", target: "MANGUEIRA" },
    { source: "PAULINHO_VIOLA", target: "PORTELA" },
    { source: "CANDEIA", target: "PORTELA" },
    { source: "ELZA_SOARES", target: "MOCIDADE" },
    { source: "ZE_KATIMBA", target: "IMPERATRIZ" },
    { source: "ISMAEL_SILVA", target: "ESTACIO" },
    { source: "QUINHO", target: "SALGUEIRO" },
    { source: "DOMINGUINHOS", target: "ESTACIO" },
    { source: "DOMINGUINHOS", target: "VIRADOURO" }, // Transição importante de intérprete
    { source: "ZECA_PAGODINHO", target: "PORTELA" },
    { source: "ZECA_PAGODINHO", target: "GRANDE_RIO" }, // Relação contemporânea forte
    { source: "PAULO_BARROS", target: "UNIDOS_TIJUCA" }, // A revolução moderna
    { source: "PAULO_BARROS", target: "VIRADOURO" },
    { source: "PAULO_BARROS", target: "VILA_ISABEL" },

    // --- LIGAÇÕES: FOTOS BASTIDORES -> APENAS PESSOAS (Antigas) ---
    { source: "F_BAR_ZICARTOLA", target: "CARTOLA" },
    { source: "F_BAR_ZICARTOLA", target: "PAULO_PORTELA" },
    { source: "F_BARRACAO_70", target: "PAMPLONA" },
    { source: "F_BARRACAO_70", target: "JOAOZINHO_30" },
    { source: "F_BARRACAO_70", target: "ROSA_MAGALHAES" },
    { source: "F_GRAVACAO", target: "CLARA_NUNES" },
    { source: "F_GRAVACAO", target: "MARTINHO" },

    // --- LIGAÇÕES: FOTOS BASTIDORES -> APENAS PESSOAS (NOVAS) ---
    { source: "F_CACIQUE", target: "ZECA_PAGODINHO" },
    { source: "F_CACIQUE", target: "MARTINHO" },
    { source: "F_VELHA_GUARDA", target: "PAULINHO_VIOLA" },
    { source: "F_VELHA_GUARDA", target: "NELSON_CAVAQUINHO" },

    // --- LIGAÇÕES: FOTOS DESFILE -> ESCOLAS E PESSOAS (Antigas) ---
    { source: "D_RATOS", target: "BEIJA_FLOR" },
    { source: "D_RATOS", target: "JOAOZINHO_30" },
    { source: "D_RATOS", target: "NEGUINHO" },
    { source: "D_KIZOMBA", target: "VILA_ISABEL" },
    { source: "D_KIZOMBA", target: "MARTINHO" },
    { source: "D_AQUARELA", target: "SALGUEIRO" },
    { source: "D_AQUARELA", target: "PAMPLONA" },

    // --- LIGAÇÕES: FOTOS DESFILE -> ESCOLAS E PESSOAS (NOVAS) ---
    // A revolução de Paulo Barros na Tijuca
    { source: "D_DNA", target: "UNIDOS_TIJUCA" },
    { source: "D_DNA", target: "PAULO_BARROS" },

    // O impacto do Salgueiro em 93 (Explode Coração)
    { source: "D_PEGUEI_ITA", target: "SALGUEIRO" },
    { source: "D_PEGUEI_ITA", target: "QUINHO" },

    // O título inesquecível da Viradouro
    { source: "D_TREVAS_LUZ", target: "VIRADOURO" },
    { source: "D_TREVAS_LUZ", target: "JOAOZINHO_30" },
    { source: "D_TREVAS_LUZ", target: "DOMINGUINHOS" },
  ],
};

function App() {
  const fgRef = useRef();
  const [usuario, setUsuario] = useState(null);
  // --- NOVOS ESTADOS ---
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [noSelecionado, setNoSelecionado] = useState(null);
  const [is3D, setIs3D] = useState(true); // <- Memória para saber se estamos no 3D ou 2D
  const [telaAtual, setTelaAtual] = useState("mapa");

  if (!usuario) {
    // Quando a TelaAcesso chamar "aoLogar", ela preenche os dados aqui
    return <TelaAcesso aoLogar={(dadosUsuario) => setUsuario(dadosUsuario)} />;
  }

  // --- LÓGICA DE FILTRO SEGURA ---
  const nosFiltrados = dadosDoCarnaval.nodes.filter((no) =>
    no.name.toLowerCase().includes(filtroTexto.toLowerCase()),
  );

  const idsPermitidos = new Set(nosFiltrados.map((no) => no.id));

  const linksFiltrados = dadosDoCarnaval.links.filter((link) => {
    const idOrigem =
      typeof link.source === "object" ? link.source.id : link.source;
    const idDestino =
      typeof link.target === "object" ? link.target.id : link.target;
    return idsPermitidos.has(idOrigem) && idsPermitidos.has(idDestino);
  });

  const dadosParaRenderizar = { nodes: nosFiltrados, links: linksFiltrados };

  // document.body.style.margin = "0";
  // document.body.style.overflow = "hidden";

  // --- FUNÇÃO DE CLIQUE INTELIGENTE (Funciona para 2D e 3D) ---
  const handleNodeClick = (node) => {
    setNoSelecionado(node);
    if (!isMenuOpen) setIsMenuOpen(true);

    if (fgRef.current) {
      if (is3D) {
        // Viagem de câmera no 3D
        const distance = 80;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        fgRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          },
          node,
          2000,
        );
      } else {
        // Viagem de câmera no 2D (Centraliza e dá Zoom)
        fgRef.current.centerAt(node.x, node.y, 1000);
        fgRef.current.zoom(4, 2000); // 4 é o nível de zoom, 2000 é o tempo em ms
      }
    }
  };

  const TelaPerfilUsuario = () => (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0f0f11",
        color: "white",
        zIndex: 10,
        overflowY: "auto",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "900px",
          margin: "0 auto",
          borderBottom: "1px solid #333",
          paddingBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Um "Avatar" simples */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#e74c3c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            🥁
          </div>
          <div>
            <h1 style={{ margin: 0 }}>João Sambista</h1>
            <p style={{ margin: "5px 0 0 0", color: "#aaa" }}>
              📍 Rio de Janeiro • Passaporte 2024
            </p>
          </div>
        </div>
        <button
          onClick={() => setTelaAtual("mapa")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🔙 Voltar ao Mapa
        </button>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* COLUNA ESQUERDA: Atividades (Estilo GitHub) */}
        <div>
          <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "10px" }}>
            Minhas Vivências na Avenida
          </h2>
          <div
            style={{
              backgroundColor: "#1a1a1f",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{ margin: "0 0 15px 0", color: "#888", fontSize: "14px" }}
            >
              Histórico de participação (últimos 5 anos)
            </p>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {/* Simulando quadradinhos de atividade (verdes são os anos que desfilou/foi) */}
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "3px",
                    backgroundColor: [2, 7, 12, 14, 25, 28].includes(i)
                      ? "#2ecc71"
                      : "#333",
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Linha do Tempo de Atividades */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div
              style={{
                backgroundColor: "#25252b",
                padding: "15px",
                borderRadius: "8px",
                borderLeft: "4px solid #2ecc71",
              }}
            >
              <h4 style={{ margin: "0 0 5px 0" }}>
                🎭 Desfilei na Vila Isabel
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#aaa" }}>
                Ala das Baianas • Carnaval 2023
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#25252b",
                padding: "15px",
                borderRadius: "8px",
                borderLeft: "4px solid #3498db",
              }}
            >
              <h4 style={{ margin: "0 0 5px 0" }}>👀 Fui à Sapucaí</h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#aaa" }}>
                Setor 9 • Carnaval 2022 (Assistiu: Grande Rio Campeã)
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#25252b",
                padding: "15px",
                borderRadius: "8px",
                borderLeft: "4px solid #e74c3c",
              }}
            >
              <h4 style={{ margin: "0 0 5px 0" }}>
                🥁 Ritmei no Bloco Cacique de Ramos
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#aaa" }}>
                Repinique • Carnaval 2020
              </p>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Preferências (Estilo Sniff / Curadoria) */}
        <div>
          <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "10px" }}>
            Minhas Preferências
          </h2>

          <div
            style={{
              backgroundColor: "#1a1a1f",
              padding: "20px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Quesitos Favoritos */}
            <div>
              <h4 style={{ margin: "0 0 10px 0", color: "#aaa" }}>
                Quesitos que mais presto atenção:
              </h4>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    backgroundColor: "#333",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  Bateria
                </span>
                <span
                  style={{
                    backgroundColor: "#333",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  Samba-Enredo
                </span>
                <span
                  style={{
                    backgroundColor: "#333",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  Evolução
                </span>
              </div>
            </div>

            {/* Prateleira (Top 3) */}
            <div>
              <h4 style={{ margin: "0 0 10px 0", color: "#aaa" }}>
                Minha Prateleira de Ouro:
              </h4>

              <div style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    margin: "0 0 2px 0",
                    fontSize: "12px",
                    color: "#888",
                  }}
                >
                  👑 Escola do Coração
                </p>
                <p style={{ margin: 0, fontWeight: "bold", color: "#008000" }}>
                  Estação Primeira de Mangueira
                </p>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    margin: "0 0 2px 0",
                    fontSize: "12px",
                    color: "#888",
                  }}
                >
                  🎶 Melhor Samba
                </p>
                <p style={{ margin: 0, fontWeight: "bold" }}>
                  "Peguei um Ita no Norte" (Salgueiro, 1993)
                </p>
              </div>

              <div>
                <p
                  style={{
                    margin: "0 0 2px 0",
                    fontSize: "12px",
                    color: "#888",
                  }}
                >
                  🤯 Desfile Inesquecível
                </p>
                <p style={{ margin: 0, fontWeight: "bold" }}>
                  Ratos e Urubus (Beija-Flor, 1989)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#050505",
        fontFamily: "sans-serif",
      }}
    >
      {/* --- RENDERIZADOR CONDICIONAL: 3D OU 2D --- */}
      {telaAtual === "mapa" && is3D ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#000",
          }}
        >
          <ForceGraph3D
            ref={fgRef}
            width={window.innerWidth}
            height={window.innerHeight}
            graphData={dadosParaRenderizar}
            nodeAutoColorBy="group"
            nodeColor="color"
            nodeRelSize={1.5}
            linkColor={() => "rgba(255, 255, 255, 1)"}
            linkWidth={3}
            nodeLabel="name"
            onNodeClick={handleNodeClick}
            linkDirectionalParticles={1}
            extraRenderers={extraRenderers}
          />
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#050505",
            fontFamily: "sans-serif",
          }}
        >
          <ForceGraph2D
            ref={fgRef}
            width={window.innerWidth}
            height={window.innerHeight}
            graphData={dadosParaRenderizar}
            nodeAutoColorBy="group"
            nodeColor="color"
            nodeRelSize={4} // No 2D os nós precisam ser um pouco maiores
            linkColor={() => "rgba(255,255,255,1)"}
            linkWidth={2}
            nodeLabel="name"
            onNodeClick={handleNodeClick}
          />
        </div>
      )}
      {/* --- MENU LATERAL --- */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "320px",
          backgroundColor: "rgba(26, 26, 31, 0.95)",
          backdropFilter: "blur(5px)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 20,
          boxSizing: "border-box",
          color: "#e0e0e0",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #444",
            paddingBottom: "15px",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        >
          <h3 style={{ margin: "0 0 5px 0", color: "#fff" }}>Olá, Sambista!</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#aaa" }}>
            Patente: Diretor de Harmonia
          </p>
        </div>
        <button
          onClick={() => setTelaAtual("perfil")}
          style={{
            padding: "8px",
            backgroundColor: "#444",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
          title="Ver meu perfil completo"
        >
          👤
        </button>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#ccc",
              fontWeight: "bold",
            }}
          >
            Pesquisar no Universo:
          </label>
          <input
            type="text"
            placeholder="Ex: Mangueira, Cartola..."
            value={filtroTexto}
            onChange={(e) => setFiltroTexto(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #555",
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "white",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #333",
          }}
        >
          {noSelecionado ? (
            <div>
              <h2 style={{ margin: "0 0 10px 0", color: noSelecionado.color }}>
                {noSelecionado.name}
              </h2>
              <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                <strong>Tipo:</strong>{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {noSelecionado.group}
                </span>
              </p>
              <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                <strong>Relevância:</strong> Nível {noSelecionado.val}
              </p>
              <button
                onClick={() => setNoSelecionado(null)}
                style={{
                  marginTop: "20px",
                  padding: "8px 15px",
                  backgroundColor: "#e74c3c",
                  border: "none",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Limpar Seleção
              </button>
            </div>
          ) : (
            <div
              style={{ textAlign: "center", color: "#888", padding: "20px 0" }}
            >
              <p style={{ margin: 0 }}>
                Clique em um ponto luminoso para ver os detalhes.
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => setUsuario(null)}
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#e74c3c",
            color: "white",
            width: "100%",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Sair / Fazer Logout
        </button>
      </div>
      {/* --- BOTÃO DE HAMBÚRGUER --- */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          position: "absolute",
          top: "20px",
          left: isMenuOpen ? "340px" : "20px",
          transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 30,
          backgroundColor: "rgba(40, 40, 45, 0.9)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "20px",
          backdropFilter: "blur(5px)",
        }}
      >
        ☰
      </button>
      {/* --- BOTÃO DE ALTERNÂNCIA 2D / 3D --- */}
      {telaAtual === "mapa" && (
        <button
          onClick={() => setIs3D(!is3D)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 30,
            backgroundColor: is3D ? "#2ecc71" : "#3498db", // Verde pro 3D, Azul pro 2D
            border: "none",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            transition: "background-color 0.3s",
          }}
        >
          {is3D ? "👀 Mudar para 2D" : "🌌 Mudar para 3D"}
        </button>
      )}
      {telaAtual === "perfil" && <TelaPerfilUsuario />}
    </div>
  );
}

export default App;
