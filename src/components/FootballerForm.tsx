import { useMutation, useQuery } from "@apollo/client";
import { Autocomplete, Button, Card, CardContent, FormControlLabel, FormLabel, Popper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Hooks, Mutations, Queries } from "src/apollo";
import { Country, Footballer, Gender, Team } from "src/apollo/__generated__/graphql";
import { DeepPartial } from "src/helpers/DeepPartial";

export type FootballerFormModel = DeepPartial<Footballer>;
type FootballerFormProps = {
  model: FootballerFormModel,
  onSubmit: (model: FootballerFormModel) => Promise<unknown>,
  title: string,
}

export function FootballerForm(props: FootballerFormProps)
{
  const response = useQuery(Queries.GET_TEAMS_OWN_AND_COUNTRIES_OWN);
  Hooks.useOnTeamAdded();
  const [addTeam, addTeamState] = useMutation(Mutations.ADD_TEAM_OWN);
  const { getValues, control, register, setValue, formState, trigger, reset } = useForm<FootballerFormModel>({ mode: "all", values: props.model });
  const [isAddTeamShow, setIsAddTeamShow] = useState(false);
  const teamNameSet = useMemo(() => new Set(response.data?.teams?.map(t => t?.name)) ?? [], [response]);
  
  function handleSubmit()
  {
    console.log(getValues());
    trigger().then((isValid) =>
    {
      if (!isValid)
      {
        return;
      }
      const model = getValues();
      props.onSubmit(model).then(() => {
        reset();
        console.log(getValues());
      });
    });
  }

  function handleTeamNameManualChange(teamName: string)
  {
    setValue("team", { name: teamName });

    if (response.loading || addTeamState.loading)
    {
      setIsAddTeamShow(false);
    }

    if (teamNameSet.has(teamName))
    {
      setIsAddTeamShow(false);
    }
    else
    {
      setIsAddTeamShow(true);
    }
  }

  function handleAddTeam()
  {
    addTeam({
      variables: {
        addTeamInput: {
          name: getValues().team!.name,
        }
      }
    }).then(r =>
    {
      setValue("team", r.data!.addTeam);
      setIsAddTeamShow(false);
      trigger("team");
    });
  }

  function handleTeamBlur()
  {
    const team = getValues("team");
    if (!!team && !!team.id)
    {
      setValue("team", response.data!.teams!.find(t => t!.id == team.id));
    }
    trigger("team");
  }

  return <Card sx={{ width: "min-content", overflowY: "auto", scrollbarWidth: "none" }}>
    <CardContent>
      <Typography sx={{ mb: 2 }} variant="h6" noWrap >{props.title}</Typography>
      <form>
        <Stack gap={1}>
          <TextField {...register("name", { required: true })}
            label="имя"
            size="small"
            required
            helperText={formState.errors.name?.message}
            error={formState.errors.name != null} />
          <TextField {...register("surname", { required: true })}
            label="фамилия"
            size="small"
            required
            helperText={formState.errors.surname?.message}
            error={formState.errors.surname != null} />
          <FormLabel required error={formState.errors.gender != null}>пол</FormLabel>
          <Controller name="gender" rules={{ required: true }} control={control} render={(params) =>
            <>
              <RadioGroup id="AddPageGenderSelect"
                value={params.field.value ?? null}
                onChange={params.field.onChange}
                sx={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between" }}>
                <FormControlLabel value={Gender.Male} control={<Radio />} label="мужской" />
                <FormControlLabel
                  value={Gender.Female}
                  control={<Radio />}
                  label="женский"
                  sx={{ marginRight: 0 }} />
              </RadioGroup>
            </>}>
          </Controller>

          <TextField {...register("bithday", { required: true })}
            type="date"
            size="small"
            required
            error={formState.errors.bithday != null} />
          <Controller name="team"
            rules={{ validate: t => !!t?.id }}
            control={control}
            render={(params) =>
              <Autocomplete
                value={params.field.value ?? {} as unknown as Team}
                onBlur={handleTeamBlur}
                onChange={(e, v) => params.field.onChange(v)}
                options={response.data?.teams ?? []}
                PopperComponent={(params) => <Popper {...params} />}
                getOptionLabel={(team) => (team as Team).name ?? ""}
                getOptionKey={(team) => (team as Team).id}
                isOptionEqualToValue={(o, v) => o?.id === v?.id}
                freeSolo
                disableClearable
                renderInput={(params) =>
                  <TextField {...params}
                    onChange={(e) => handleTeamNameManualChange(e.currentTarget.value)}
                    label="команда"
                    size="small"
                    required
                    helperText={formState.errors.team?.message}
                    error={formState.errors.team != null}
                  />}>
              </Autocomplete>} />
          {
            isAddTeamShow && <Button onClick={handleAddTeam} type="button">Добавить команду</Button>
          }
          <Controller name="country"
            rules={{ required: true }}
            control={control}
            render={(params) =>
              <Autocomplete 
                value={params.field.value ?? null as unknown as Country}
                onChange={(e, v) => params.field.onChange(v)}
                options={response.data?.countries ?? []}
                PopperComponent={(params) => <Popper {...params} />}
                getOptionLabel={(country) => (country as Country).name ?? ""}
                getOptionKey={(country) => (country as Country).id}
                isOptionEqualToValue={(o, v) => o?.id === v?.id}
                disableClearable
                renderInput={(params) =>
                  <TextField {...params}
                    label="страна"
                    size="small"
                    required
                    helperText={formState.errors.country?.message}
                    error={formState.errors.country != null}
                  />}>
              </Autocomplete>} />
          <Button onClick={handleSubmit} type="button" variant="outlined"> Сохранить</Button>
        </Stack>
      </form>
    </CardContent>
  </Card>
}