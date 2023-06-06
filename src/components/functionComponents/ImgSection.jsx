//########################################################
//########################################################
//########################################################
//####################### using function ####################
//########################################################

import BodyImage from "./BodyImage";

// image zoom in hover

function ImgSection(props) {
  return (
    <>
      <div class="container">
        < h1 class="bstseller"> Our Best Seller</h1>
        <div class="row">
          <BodyImage
            link="https://content-images.carmax.com/qeontfmijmzv/MY19MKj0XutK084z874jt/9632621fd8464b5c0e54a9dee64ad4e5/tesla.jpg"
            caption="Image 1 caption"
          />

          <BodyImage
            link="https://media.cnn.com/api/v1/images/stellar/prod/220822155902-01-new-delorean-2022.jpg?c=4x3"
            caption="Image 2 caption"
          />

          <BodyImage
            link="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg"
            caption="Image 3  caption"
          />
        </div>

        <div class="row">
          <BodyImage
            link="https://carwow-uk.imgix.net/prismic/cefefdff-55ec-45c7-9979-d7740c03c3e9_Small-31999-PoloStyle.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750"
            caption="Image 1 caption"
          />

          <BodyImage
            link="https://imgd.aeplcdn.com/0x0/n/cw/ec/131145/s90-exterior-front-view.jpeg?isig=0"
            caption="Image 2 caption"
          />

          <BodyImage
            link="https://images.ctfassets.net/8j0kwly57yw9/33sjhf1nOykmsSlRBgaaSv/5d643ef8e876ca5bb29692e4ebecb3d8/EQC_offers.jpeg?w=1280&fm=jpg&q=75"
            caption="Image 3  caption"
          />
        </div>

        <div class="row">
          <BodyImage
          link="https://www.autocar.co.uk/sites/autocar.co.uk/files/1-porsche-911-gt3-2021-rt-hero-front.jpg"
            caption="Image 1 caption"
          />

          <BodyImage
            link="https://besthqwallpapers.com/Uploads/17-4-2021/164091/thumb2-bmw-i4-2022-rear-view-exterior-white-sedan.jpg"
            caption="Image 2 caption"
          />

          <BodyImage
            link= "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2021/03/18/images/180327.jpg"
            caption="Image 3  caption"
          />
        </div>
      </div>
    </>
  );
}

export default ImgSection;
