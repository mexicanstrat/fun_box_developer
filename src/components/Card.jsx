import React from 'react';
import './Card.css'

/**
 * Компонент по отрисовке карточки товара
 * @param {String} colorClass Состояние карточки товара
 * @param {Boolean} isHover Переключатель стиля наведения
 * @param {function} selectProduct Обработчик клика по товару
 * @param {function} onMouseHover Обработчик наведения курсора на товар
 * @param {function} onMouseHoverLeave Обработчик ухода курсора с товара
 * @param {String || null} opacityClass Класс с прозрачностью для выключенного товара
 * @param {Boolean} isTitle1Changed Переключатель для замены заголовка
 * @param {String} title1 Первый заголовок
 * @param {String} title2 Второй заголовок
 * @param {String} stuffing Состав товара
 * @param {Number} portion Количество порций
 * @param {Number} mouses Количество мышек
 * @param {String} mousesEnding Склоненное в зависимости от числа слово "мыши"
 * @param {String} weight Вес упкаовки
 * @param {String} description Описание под карточкой товара
 * @param {String} descriptionButton Нажимаемое слово в описании
*/

export const Card = (props) => {
  return (
    <section className="Card Card_margin">
      <div 
        className={`Card__pack Card__pack_margin ${props.status.colorClass}${props.isHover ? "_hover" : ""}`} 
        onClick={props.selectProduct ? () => props.selectProduct(props.id, props.status.colorClass) : null} 
        onMouseEnter={props.onMouseHover ? () => props.onMouseHover(props.id) : null} 
        onMouseLeave={props.onMouseHoverLeave ? () => props.onMouseHoverLeave(props.id, props.status.colorClass) : null}
      >
        <div className="left corner"></div>
        <div className={`${props.status.opacityClass}`}>
          <div className="Card__info">
            <p className={`Card__title1 Card__title1_margin ${props.isTitle1Changed ? "Card__title1_selectedHover" : ""}`}>{props.title1}</p>
            <div className="Card__mainTitle">
              <h2 className="Card__title2 Card__title2_margin">
                {props.title2}
              </h2>
              <h3 className="Card__stuffing Card__stuffing_margin">
                {props.stuffing}
              </h3>
            </div>
            <div className="Card__portion">
              <span className="Card__portionNumber">{props.portion}</span> порций <br />
              <span className="Card__portionNumber">{props.mouses}</span> {props.mousesEnding} в подарок
              </div>
          </div>
          <div className="Card__catBackground"></div>

        </div>
        <div className="Card__weight">
          <div className="Card__weightNumber">{props.weight}</div>
          <div className="Card__weightKG">кг</div>
        </div>
      </div>
      <div className="Card__description">
        <p className={`Card__description_${props.status.colorClass}`}>
          {props.status.description}
          <span 
            className="Card__description_defaultButton" 
            onClick={props.selectProduct ? () => props.selectProduct(props.id, props.status.colorClass) : null}
          >{props.status.descriptionButton}</span>
        </p>
      </div>
    </section>
  )
}