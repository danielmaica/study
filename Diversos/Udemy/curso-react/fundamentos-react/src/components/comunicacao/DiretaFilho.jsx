import React from "react"

export default props => {
  return (
    <div>
      <span>{props.nome} {props.idade} anos: {props.nerd ? 'É nerd': 'Não é nerd'}!</span>
    </div>
  )
}