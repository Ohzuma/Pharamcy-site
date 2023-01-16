import { Data } from "./Category"
const Department = () => {
  return (
    <div className='department'>
        <div className="department_header">
            <h1>How we can help you </h1>
            <p>READ MORE ABOUT OUR SERVICES </p>
        </div>
        <div className="category">
          {Data.map((item)=>{
            const{id,img,heading,text} = item;
            return(
                <div className="catergory_box" key={id}>
                  <div className="img">
                  <img src={img} alt={heading} />
                  </div>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default Department