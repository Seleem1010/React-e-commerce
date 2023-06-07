function BodyImage(props) {
    return (
  <>
                    <div class="col-md-4">
                  <div class="image">
                      <a href="/" target="_blank">
                          <img src= {props.link} alt="some car"/>
                          <div class="caption">{props.caption}</div>
                      </a>
                  </div>
            
                  </div>
</>
    );
  }
  
  export default BodyImage;