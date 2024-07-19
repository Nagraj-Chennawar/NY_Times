import Layout  from './layout/Layout.component';


/**
 * The App component serves as the root component for the application.
 * It renders the Layout component, which contains the main structure
 * and navigation for the app.
 * Also keeping some place holder in App.js for future enhancements like
 * login or authorization implementation and context api or react redux
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
      <Layout/>
  );
}

export default App;
