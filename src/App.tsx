import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from 'src/pages/MainPage';

function App()
{
  return (
    <Routes>
      <Route path='/*' Component={MainPage}></Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
