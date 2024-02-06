import { useMutation } from "@apollo/client";
import { Grid } from "@mui/material";
import { useCallback } from "react";
import { Mutations } from "src/apollo";
import { FootballerForm, FootballerFormModel } from "src/components/FootballerForm";


export function AddPage()
{
  const [addFootballer, _] = useMutation(Mutations.ADD_FOOTBALLER_ID);

  const handleSubmit = useCallback((model: FootballerFormModel) =>
  {
    return addFootballer({
      variables: {
        addFootballerInput: {
          name: model.name!,
          surname: model.surname!,
          bithday: model.bithday!,
          gender: model.gender!,
          country: {
            id: model.country!.id!,
          },
          team: {
            id: model.team!.id!,
          },
        },
      },
    });
  }, [addFootballer])

  return <Grid justifyContent={"center"} alignItems={"center"} container>
    <FootballerForm model={{}} onSubmit={handleSubmit} title="Добавить футболиста" />
  </Grid>
}