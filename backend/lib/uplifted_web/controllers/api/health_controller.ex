defmodule UpliftedWeb.API.HealthController do
  use UpliftedWeb, :controller

  def index(conn, _params) do
    json(conn, %{status: "ok", timestamp: DateTime.utc_now()})
  end
end
