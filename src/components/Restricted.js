import r2d2Img from '../assets/r2d2.gif'

const Restricted = () => (
  <div className="container center mt1">
    <h2>Restricted area</h2>
    <img src={r2d2Img} alt='R2D2 sad' />
    <p>Please, log in to access this content.</p>
  </div>
)

export default Restricted