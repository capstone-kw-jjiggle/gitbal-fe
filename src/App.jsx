import MobileBannedPage from './pages/MobileBannedPage/MobileBannedPage';
import Routes from './routes';
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
	return (
		<>
			<BrowserView>
				<MobileBannedPage />
			</BrowserView>
			<MobileView>
				<Routes />
			</MobileView>
		</>
	);
}

export default App;
