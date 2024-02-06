import { useMutation, useQuery, useSubscription } from "@apollo/client";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Dialog, IconButton } from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { Hooks, Mutations, Queries, Subscriptions } from "src/apollo";
import { Country, Footballer, Team } from "src/apollo/__generated__/graphql";
import { FootballerForm, FootballerFormModel } from "src/components/FootballerForm";
import { nameof } from "src/helpers/nameof";

const columns: GridColDef[] = [
  {
    field: nameof<Footballer>("id"),
    width: 30,
  },
  {
    field: nameof<Footballer>("name"),
    headerName: "имя",
  },
  {
    field: nameof<Footballer>("surname"),
    headerName: "фамилия",
  },
  {
    field: nameof<Footballer>("gender"),
    headerName: "пол",
    valueGetter: (params) => genderEnumToString(params.value),
  },
  {
    field: nameof<Footballer>("bithday"),
    headerName: "дата рождения",
    width: 140,
  },
  {
    field: nameof<Footballer>("team"),
    headerName: "команда",
    valueGetter: (params) => (params.value as Team).name,
  },
  {
    field: nameof<Footballer>("country"),
    headerName: "страна",
    valueGetter: (params) => (params.value as Country).name,
  },
  {
    field: "_",
    headerName: "изменить",
    filterable: false,
    sortable: false,
    disableColumnMenu: true,
    hideable: false,
    renderCell: (params) =>
    {
      //@ts-ignore
      const clickHandler = () => params.api.publishEvent("editButtonClick", params.row.id);

      return <IconButton onClick={clickHandler}>
        <EditIcon></EditIcon>
      </IconButton>
    }
  },
];

function genderEnumToString(value: string)
{
  return value == "MALE" ? "мужчина" : "женщина"
}

export function ViewPage()
{
  const { data } = useQuery(Queries.GET_FOOTBALLERS_NAV);
  const [updateFootballer, _] = useMutation(Mutations.UPDATE_FOOTBALLER_ID);
  Hooks.useOnFootbollerAdded();
  useSubscription(Subscriptions.ON_FOOTBALLER_NAV_UPDATED);
  const apiRef = useGridApiRef();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editableModel, setEditableModel] = useState<FootballerFormModel>({});
  const handleSubmit = useCallback((model: FootballerFormModel) =>
  {
    return updateFootballer({
      variables: {
        updateFootballerInput: {
          id: model.id!,
          name: model.name!,
          surname: model.surname!,
          gender: model.gender!,
          bithday: model.bithday!,
          team: {
            id: model.team!.id!,
          },
          country: {
            id: model.country!.id!,
          },
        },
      },
    }).then(() => setIsDialogOpen(false));
  }, [updateFootballer, setIsDialogOpen]);
  useEffect(() =>
  {
    //@ts-ignore
    return apiRef.current.subscribeEvent("editButtonClick", (footballerId: number) =>
    {
      setEditableModel(data!.footballers!.find(f => f!.id == footballerId)!);
      setIsDialogOpen(true);
    });
  }, [apiRef, data]);

  return <Container style={{ display: "flex", overflow: "auto" }}>
    <DataGrid columns={columns}
      rows={data?.footballers ?? []}
      autoPageSize={true}
      apiRef={apiRef}
      rowSelection={false} />
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
      <FootballerForm model={editableModel} onSubmit={handleSubmit} title="Изменить футболиста" />
    </Dialog>
  </Container>
}