import { useSubscription } from "@apollo/client";
import { Queries, Subscriptions } from "src/apollo";

export function useOnFootbollerAdded()
{
  return useSubscription(Subscriptions.ON_FOOTBALLER_NAV_ADDED,
    {
      onData({ client, data })
      {
        const oldData = client.readQuery({
          query: Queries.GET_FOOTBALLERS_NAV,
        });

        client.writeQuery({
          query: Queries.GET_FOOTBALLERS_NAV,
          data: {
            ...oldData,
            footballers: [...(oldData?.footballers ?? []), data.data!.onFootballerAdded!],
          },
        });
      },
    });
}

export function useOnTeamAdded()
{
  return useSubscription(Subscriptions.ON_TEAM_OWN_ADDED, {
    onData: ({ client, data }) =>
    {
      const oldData = client.readQuery({
        query: Queries.GET_TEAMS_OWN,
      });

      client.writeQuery({
        query: Queries.GET_TEAMS_OWN,
        data: {
          ...data,
          teams: [...(oldData?.teams ?? []), data.data!.onTeamAdded!],
        }
      });
    }
  });
}