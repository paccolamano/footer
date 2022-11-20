import Links from "./link/Links";

const Footer = (props) => {
  const {title, links} = props
  return (
    <>
      <Links title={title} links={links}/>
    </>
  )
}

export default Footer;