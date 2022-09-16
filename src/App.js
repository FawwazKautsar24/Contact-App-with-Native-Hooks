import { ListContact } from './components';
import FormContact from './components/FormContact';

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Contact App</h1>
      <hr/>
      <FormContact />
      <hr/>
      <ListContact />
    </div>
  );
}

export default App;
