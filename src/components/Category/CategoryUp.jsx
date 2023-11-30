import './CategoryUp.css'

const CategoryUp = ({categoria}) => {
  const mostrarDescripcion = () =>  {
    if(categoria === 'camping') {
      return (
        <>
          <h6>Descripcion de camping</h6>
          <h6>Beneficios para la salud del camping</h6>
        </>
      )
    }
    else if (categoria === 'playa') {
       return <h6>Descripcion de playa</h6>
    }
  }
  return (
    <div className="box">
      <div className="categoryGroup">
        <div className="categoryText">
          <h4>{categoria}</h4>
          {mostrarDescripcion()}
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="categoriaImage">
        <img alt="ImagenCategoria" src="/public/camping.png" />
      </div>
    </div>
  )
}

export default CategoryUp
