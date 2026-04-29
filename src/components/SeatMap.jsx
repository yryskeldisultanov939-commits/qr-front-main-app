import Icon from './Icon'
import { WORKSPACES } from '../data/workspaces'

function SeatMap({ onScanClick, reservedSeat }) {
  return (
    <div className="screen map-screen">
      <header className="topbar">
        <button type="button" className="icon-button icon-wrap" aria-label="Меню"><Icon name="menu" /></button>
        <h2>Мои места</h2>
        <button type="button" className="icon-button icon-wrap" aria-label="Уведомления"><Icon name="bell" /></button>
      </header>

      <div className="cabinet-title">Кабинет 407 <Icon name="chevron" className="chevron" /></div>

      <section className="map-layout" aria-label="Схема рабочих мест">
        {WORKSPACES.map((item) => {
          const isReserved = reservedSeat === item.id
          return (
            <article
              key={item.id}
              className={`workspace status-${item.status} ${isReserved ? 'status-reserved' : ''}`}
              style={{
                gridColumn: `${item.col} / span ${item.colSpan}`,
                gridRow: `${item.row} / span ${item.rowSpan}`,
              }}
            >
              <span>{item.id}</span>
              <i />
            </article>
          )
        })}
      </section>

      <button type="button" className="primary-button scan-button" onClick={onScanClick}><Icon name="qr" />Сканировать QR</button>

      <nav className="tabbar">
        <button type="button" className="active"><Icon name="map" />Карта</button>
        <button type="button"><Icon name="calendar" />Мои брони</button>
        <button type="button"><Icon name="history" />История</button>
        <button type="button"><Icon name="user" />Профиль</button>
      </nav>
    </div>
  )
}

export default SeatMap
