const Link = (props) => {
  const { path, displayName } = props
  return (
    <a href={ path }>{ displayName }</a>
  )
}

export default Link;