import Card from "./card";
import image1 from '../../public/images/pexels-alexandre.jpg'
import image2 from '../../public/images/pexels-leigh.jpg'
import image3 from '../../public/images/pexels-thao.jpg'
import { Image1 } from "./Images";
import { Image2 } from "./Images";
import { Image3 } from "./Images";


const Layout = () => {
  return (
    <div className="flex">
      {/* <Card img={image1}/>
      <Card img={image2}/>
      <Card img={image3}/> */}

      <Card>
        <Image1/>
      </Card>
      <Card>
        <Image2/>
      </Card>
        <Card>
        <Image3/>
      </Card>
    </div>
  )
}

export default Layout