import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
export const Card = () => {
    return (
        <div className="card mb-4" style={{width: "15rem"}}>
  <img className="card-img-top" src={rigoImage} alt="Card image cap" />
  <div className="card-body border">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, consequuntur inventore. Ea perferendis cumque animi nihil vitae! Asperiores dicta, nobis earum sit optio porro consequatur molestiae itaque sunt illo ex.</p>
    <a href="#" className="btn btn-primary">Find out more!</a>
  </div>
</div>
    )
}