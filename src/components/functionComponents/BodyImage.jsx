//########################################################
//########################################################
//########################################################
//####################### using function ####################
//########################################################

// image zoom in hover

function BodyImage(props) {
    return (
  <>
                    <div class="col-md-4">
                  <div class="image">
                      <a href="" target="_blank">
                          <img src= {props.link} alt="Image 1"/>
                          <div class="caption">{props.caption}</div>
                      </a>
                  </div>
            
                  </div>
</>
    );
  }
  
  export default BodyImage;
  
  
  
  