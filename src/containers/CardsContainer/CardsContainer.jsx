import React from 'react';
import {Card} from '../../components/Card'
import './CardsContainer.css'

/**
 * Контейнер с логикой, возвращающий заполненные карточки товаров
 * @param {function} countMouses Функция для подсчета количества мышей на основе порции
 * @param {function} writeMousesEnding Обработчик окончания в слове "мышь"
 * @param {function} convertToStringWeight Обработчик перевода веса упаковки в строку
 * @param {function} selectProduct Обработчик клика по товару
 * @param {function} selectDisabledProduct Заглушка для выключенного товара
 * @param {function} onMouseHover Обработчик наведения курсора на товар
 * @param {function} onMouseHoverLeave Обработчик ухода курсора с товара
 * @param {Array} cardElements Массив заполненных карточек товаров
 * @param {Component} Card Компонент по отрисовке карточки товара
*/

export class CardsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.store

    this.selectProduct = this.selectProduct.bind(this);
    this.onMouseHover = this.onMouseHover.bind(this);
    this.onMouseHoverLeave = this.onMouseHoverLeave.bind(this);
  }

  countMouses(portionQuantity) {
    let mouses = ((portionQuantity / 20) % 2) === 0 ? portionQuantity / 20 : Math.floor(portionQuantity / 20) + 1
    return mouses === 1 ? null : mouses
  }

  writeMousesEnding(mousesQuantity) {
    if (mousesQuantity === null) {
      return "мышь"
    }
    let ending = parseInt(mousesQuantity % 10)
    switch (ending) {
      case 1:
        return "мышь"
        break
      case 2:
      case 3:
      case 4:
        return "мыши"
        break
      default:
        return "мышей"
    }
  }

  convertToStringWeight(num) {
    return num.toString().replace(".", ",")
  }

  selectProduct(id, colorClass) {
    const arr = this.state.cards
    const result = arr.map((card, i) => {
      return id === i ? {
        ...card, status:
        colorClass === "default" ? {colorClass: "selected", opacityClass: null, description: arr[id].selectedDescription, descriptionButton: false} :
        colorClass === "selected" ? {colorClass: "default", opacityClass: null, description: "Чего сидишь? Порадуй котэ ", descriptionButton: "купи."} :
                                    {colorClass: "disabled", opacityClass: "opacity", description: `Печалька, ${arr[id].stuffing} закончился.`, descriptionButton: false },
        isHover: false
      } : card
    })
    this.setState({
      cards: result
    })
  }

  onMouseHover(id) {
    const arr = this.state.cards
    const result = arr.map((card, i) => {
      return id === i ? {
        ...card, isHover: false,
        title1: "Сказочное заморское яство",
        isTitle1Changed: false
      } : card
    })
    this.setState({
      cards: result
    })
  }

  onMouseHoverLeave(id, style) {
    const arr = this.state.cards
    let result
    if (style === "selected") {
      result = arr.map((card, i) => {
        return id === i ? {
          ...card, isHover: true,
          title1: "Котэ не одобряет?",
          isTitle1Changed: true
        } : card
      })
    } else {
      result = arr.map((card, i) => {
        return id === i ? { ...card, isHover: true } : card
      })
    }
    this.setState({
      cards: result
    })
  }

  render() {
    let cardElements = this.state.cards.map((card) => card.quantity ?
      //если товар есть в наличии
      <Card 
        key={card.id} 
        {...card} 
        mouses={this.countMouses(card.portion)} 
        mousesEnding={this.writeMousesEnding(this.countMouses(card.portion))} 
        weight={this.convertToStringWeight(card.weight)} 
        selectProduct={this.selectProduct} 
        onMouseHover={this.onMouseHover} 
        onMouseHoverLeave={this.onMouseHoverLeave} 
      /> :
      //если товара нет в наличии => он не доступен
      <Card 
        key={card.id} 
        {...card} 
        mouses={this.countMouses(card.portion)} 
        mousesEnding={this.writeMousesEnding(this.countMouses(card.portion))} 
        weight={this.convertToStringWeight(card.weight)} 
      />)
      
    return (
      <div className="CardsContainer">
        {cardElements}
      </div>
    )
  }
}