import '../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faSearch,faBars)

function HeaderComponent() {
  return (
    <div className="e-header">
        <div className="row">
            <div className="col-2 mobileMenu">
                <div className="Hamburger"><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <div className="col-8 col-md-4">
                <div className="u-logo"></div>
            </div>
                <div className="col-md-4 searchM">
                    <div className="search">
                        <input type="search"/>
                        <div className="Button cartButton"><FontAwesomeIcon icon={faSearch}/></div>
                    </div>
                </div>
                <div className="col-2 col-md-4">
                    <div className="e-cart">
                            <div className="row">
                                <div class="col-md-2">
                                    <div className="i-cart"><FontAwesomeIcon icon={faShoppingCart} size="2x"/></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cart-info">
                                        <div className="quantity"><input type="text" id="p-quantity" value="0"/>st </div>
                                        <div className="sumprice"><input type="text" id="p-sumprice" value="0"/>KR</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="Button checkout">
                                     Checkout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

  );
}

export default HeaderComponent;
