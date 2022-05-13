const About = () => {
  const myStyle = {
    display: 'grid',
    backgroundColor: 'cyan',
    justifyContent: 'center',
  }
  return (
    <div className="about-page" style={myStyle}>
      <h1>About</h1>
      <p>This page is for the company's about details</p>
    </div>
  )
}

export default About;