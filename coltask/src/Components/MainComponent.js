
import '../main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import GalleryComponent from './GalleryComponent'

library.add(faShoppingCart, faSearch,faBars)


function MainComponent() {
  return (
    <div class="e-mainPage">
    <div class="row">
        <div class="col-md-2 e-leftMenuMobile">
            <div class="e-LeftMenu">
            <ul>
                <li>Paper clips</li>
                <li>Post-it notes</li>
                <li>Staples</li>
                <li>Hole punches</li>
                <li>Binders</li>
                <li>Staplers</li>
                <li>Laminators</li>
                <li>Writing utensils</li>
                <li>Paper</li>
                <li>Computers</li>
                <li>Printers</li>
                <li>Fax machines</li>
                <li>Photocopiers</li>
                <li>Cash registers</li>
                <li>Office furniture</li>
                <li>Chairs</li>
                <li>Cubicles</li>
                <li>Filing cabinet</li>
                <li>Armoire desks</li>
            </ul>
        </div>
        </div>
        <div class="col-12 col-md-10">
            <div class="e-content">
            <div class="row">
                <div class="e-Item">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <GalleryComponent/>
                        </div>
                        <div class="col-12 col-md-9 order-first-m">
                            <div class="e-description">
                                <div class="row">
                                    <h1 class="p-productname">Paper</h1>
                                </div>
                                <div class="row">
                                    <div class="e-cartExtension col-12 col-md-12">
                                        <div class="row">
                                            <div class="col-6 col-md-3">
                                                <h2 class="p-itemPrice">565,00 Kr</h2>
                                                <small class="oldPrice">670 Kr</small>
                                        </div>
                                            <div class=" col-6 col-md-7">
                                                <div class="options">
                                                    <select class="itemOptions">
                                                        <option value="white">White</option>
                                                        <option value="black">Black</option>
                                                        <option value="multi">Multi-Colored</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-2">
                                                <div class="b-AddToCart">
                                                <div class="Button cart " onclick="addtocart(), addtocartquantity()" ><FontAwesomeIcon icon={faShoppingCart}/></div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="e-Extender">
                                    <div class="p-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.    
                                    </div>
                                    <div class="button" value="Extend">Extend</div>
                                    <div class="button2" value="Hide">Hide</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="e-bottomContent">
                    <div class="row">
                <div class="col-12 col-md-4">
                    <div class="e-card">
                        <h3 class="p-cardTitle">Paper is Awesome</h3>
                        <p class="p-cardDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="e-card">
                        <h3 class="p-cardTitle">Paper is Awesome</h3>
                        <p class="p-cardDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="e-card">
                        <h3 class="p-cardTitle">Paper is Awesome</h3>
                        <p class="p-cardDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet la.</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        </div>
    </div>
</div>
  );
}

export default MainComponent;
