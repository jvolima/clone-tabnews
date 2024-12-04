import useSWR from "swr";

async function fetchApi(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <Database />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchApi, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <span>Última atualização: {updatedAtText}</span>;
}

function Database() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchApi, {
    refreshInterval: 2000,
  });

  return (
    <div>
      <h2>Banco de dados</h2>
      {!isLoading && data ? (
        <ul>
          <li>
            Conexões disponíveis: {data.dependencies.database.max_connections}
          </li>
          <li>
            Conexões abertas: {data.dependencies.database.opened_connections}
          </li>
          <li>Versão do Postgres: {data.dependencies.database.version}</li>
        </ul>
      ) : (
        <span>Carregando...</span>
      )}
    </div>
  );
}
