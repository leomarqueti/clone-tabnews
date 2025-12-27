import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const dataDataBase = await database.query("SHOW server_version;");
  const versionDataBase = dataDataBase.rows[0].server_version;
  const dataMaxConnection = await database.query("SHOW max_connections");

  const maxConnection = dataMaxConnection.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const dataConnectionOpen = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const connectionOpen = dataConnectionOpen.rows[0].count;

  console.log(connectionOpen);
  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: versionDataBase,
        max_connections: maxConnection,
        opened_connections: connectionOpen,
      },
    },
  });
}

export default status;
