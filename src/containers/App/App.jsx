import React from 'react';
import {CardsContainer} from '../CardsContainer/CardsContainer'
import './App.css'

/**
 * Компонент с отрисовкой контента страницы
 * @param {Container} CardsContainer Контейнер с логикой для отрисовки нямушек
*/

export const App = (props) => {
  return (
    <main className="App">
      <h1 className="App__title">Ты сегодня покормил кота?</h1>
      <CardsContainer store={props.store} />
    </main>
  )
}






