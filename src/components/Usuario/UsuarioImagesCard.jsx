import './UsuarioimagesCard.css'

const UsuarioImagesCard = ({ ima, txt, style }) => {
  return (
    <div className="imagen">
      <img className={style} src={ima} alt={`imagen ${txt}`} />
      <p>{txt}</p>
    </div>
  )
}

export default UsuarioImagesCard

/* "/public/Image --dalle(2).png" */