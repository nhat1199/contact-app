import React, { Suspense } from 'react';
import Header from 'conponents/Header';
import NotFound from 'conponents/NotFound';
import ListContact from 'features/ListContact';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Suspense fallback={<h3>Loading...</h3>}>
				<BrowserRouter>
					<Header />
					<div className="p-3">
						<Switch>
							<Redirect exact from="/" to="/home" />
							<Route path="/home" component={ListContact} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
