import { AppBar, Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AddPage } from "src/pages/AddPage";
import { ViewPage } from "src/pages/ViewPage";

export function MainPage()
{
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(getActivePageValue(location.pathname));

  function handleTabClick(event: React.SyntheticEvent, route: string)
  {
    navigate(route);
    setActivePage(route);
  }

  return <>
    <div style={{ display: "grid", gridAutoRows: "min-content auto", maxHeight: "100vh", height: "100vh" }}>
      <AppBar color={"transparent"} position="relative">
        <Container>
          <Tabs value={activePage} onChange={handleTabClick}>
            <Tab value={"ViewPage"} label={"Просмотр"} />
            <Tab value={"AddPage"} label={"Добавление"} />
          </Tabs>
        </Container>
      </AppBar>

      <Routes>
        <Route path="ViewPage" Component={ViewPage} />
        <Route path="AddPage" Component={AddPage} />
        <Route path="*" element={<Navigate to={"ViewPage"} />} />
      </Routes>
    </div>
  </>
}

function getActivePageValue(location: string)
{
  if (location.includes("ViewPage"))
  {
    return "ViewPage";
  }
  if (location.includes("AddPage"))
  {
    return "AddPage";
  }
}