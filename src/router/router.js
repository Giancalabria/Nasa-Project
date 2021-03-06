import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main } from '../pages/main/main'

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>
				<Route>
					<h1>Esta pagina no existe! Volve al home</h1>
				</Route>
			</Switch>
		</Router>
	)
}
