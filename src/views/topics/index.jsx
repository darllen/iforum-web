import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuSistema from "../../views/component/menuSistema";
import Sidebar from "../../components/Sidebar";
import './index.css';
import Card from "../../components/Card";
import RespostaList from "../../components/Respostas";
import { fetchPerguntaPorId } from "../../services/perguntas";
import { fetchRespostasPorPerguntaId, criarResposta } from "../../services/resposta";
import { fetchComentariosPorRespostaId, criarComentario } from "../../services/comentario";
import { getUser } from "../../helpers/authStore";
import { fetchUsuarioPorId } from "../../services/usuario";

export default function Topic() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pergunta, setPergunta] = useState(null);
  const [respostas, setRespostas] = useState([]);
  const [comentarios, setComentarios] = useState({});
  const [loading, setLoading] = useState(true);
  const [newResposta, setNewResposta] = useState("");
  const [usuarios, setUsuarios] = useState({});
  const user = getUser(); // Pega o usuário uma vez e fora do useEffect

  useEffect(() => {
    // Evitar múltiplas requisições desnecessárias
    if (!user) {
      navigate('/login');
      return; // Apenas redireciona uma vez se o user for nulo
    }

    const fetchData = async () => {
      try {
        // Busca a pergunta pelo ID
        const fetchedPergunta = await fetchPerguntaPorId(id);
        setPergunta(fetchedPergunta);

        // Busca as respostas associadas à pergunta
        const fetchedRespostas = await fetchRespostasPorPerguntaId(id);
        setRespostas(fetchedRespostas);

        // Prepara um mapa para armazenar os nomes dos usuários
        const uniqueUserIds = [...new Set(fetchedRespostas.map(resposta => resposta.id_usuario))];
        const userMap = {};
        for (const userId of uniqueUserIds) {
          const userData = await fetchUsuarioPorId(userId);
          userMap[userId] = userData.nome;
        }
        setUsuarios(userMap);

        // Busca os comentários para cada resposta e os armazena no estado
        const fetchedComentarios = {};
        for (const resposta of fetchedRespostas) {
          const comentariosResposta = await fetchComentariosPorRespostaId(id);
          fetchedComentarios[resposta.id] = comentariosResposta;
        }
        setComentarios(fetchedComentarios);
        console.log(fetchedComentarios)
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, [id]); // Apenas `id` deve ser a dependência aqui

  const handleCreateResposta = async () => {
    if (newResposta.trim() === "") return;
    try {
      const resposta = await criarResposta({
        id_usuario: user.id,
        descricao: newResposta,
        pergunta_id: id
      });
      setRespostas([...respostas, resposta]);
      setNewResposta("");
    } catch (error) {
      console.error("Erro ao criar resposta:", error);
    }
  };

  const handleCreateComentario = async (respostaId, newComentario, setNewComentario) => {
    if (newComentario.trim() === "") return;
    try {
      const comentario = await criarComentario({
        id_usuario: user.id,
        descricao: newComentario,
        id_resposta: respostaId
      });
      setComentarios({
        ...comentarios,
        [respostaId]: [...(comentarios[respostaId] || []), comentario]
      });
      setNewComentario("");
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="page">
      <MenuSistema />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Sidebar />
        <main>
          <div className="topics-container">
            {pergunta ? (
              <Card
                user={user.nome}
                title={pergunta.titulo}
                description={pergunta.descricao}
                subtitle={"Pergunta"}
                onSubmit={handleCreateResposta}
                newInputValue={newResposta}
                setNewInputValue={setNewResposta}
              />
            ) : (
              <p>Pergunta não encontrada.</p>
            )}
          </div>

          {/* Passa os comentários para o componente RespostaList */}
          <RespostaList
            respostas={respostas}
            comentarios={comentarios}
            usuarios={usuarios}
            handleCreateComentario={handleCreateComentario}
            user={user}
          />
        </main>
      </div>
    </div>
  );
}

