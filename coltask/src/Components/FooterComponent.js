
import '../main.css';

function FooterComponent() {
  return (
    <footer>
        <div class="row">
            <div class="col-12 col-md-6">
                    <div class="u-logo"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <p class="p-FooterDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
                </p>
            </div>
            <div class="col-12 col-md-3">
                <div class="e-Bestsellers">
                    <h5>Bestsellers</h5>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <ul>
                                <li><a href="#">A4</a></li>
                                <li><a href="#">A5</a></li>
                                <li><a href="#">Pens</a></li>
                                <li><a href="#">Staplers</a></li>
                            </ul>
                    </div>
                        <div class="col-12 col-md-6">
                            <ul>
                                <li><a href="#">A4</a></li>
                                <li><a href="#">A5</a></li>
                                <li><a href="#">Pens</a></li>
                                <li><a href="#">Staplers</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="e-SocialBar">
                    <h5>We,re Social</h5>
                    <ul>
                        <li><a href="#"><p>Facebook</p><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><p>Twitter</p><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><p>Linkedin</p><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default FooterComponent;