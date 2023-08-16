import './styles/style.scss';

import { BoardProvider } from './context/board';
import { AuthProvider } from './context/authorization';
import { ModalsProvider } from './context/modals';

import Board from './pages/board';

function App() {
  return (
    <AuthProvider>
      <BoardProvider>
        <ModalsProvider>
          <Board />
        </ModalsProvider>
      </BoardProvider>
    </AuthProvider>
  );
}

export default App;
