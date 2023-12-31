import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface props {
  icon: IconDefinition,
  size?: string,
  onClick: () => void
}

export default (props: props) => {
  return (
    <button className="icon-button" onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} className={props.size}></FontAwesomeIcon>
    </button>
  )
}