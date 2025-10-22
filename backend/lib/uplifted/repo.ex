defmodule Uplifted.Repo do
  use Ecto.Repo,
    otp_app: :uplifted,
    adapter: Ecto.Adapters.Postgres
end
