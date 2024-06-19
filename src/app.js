// import styles from './app.module.css'
import styled from 'styled-components'

const Div = styled.div`
	text-align: center
`

export const App = () => {
	return (
		<Div>
			Проверяем работу styled-components.
			<br />
			И устанавливаем иконки:
			<br />
			<i className="fa fa-camera-retro fa-5x"></i>
		</Div>
	)
}


