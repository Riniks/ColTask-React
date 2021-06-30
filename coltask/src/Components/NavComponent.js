import '../main.css';

function NavComponent() {
  return (
    <div class="e-nav">
        <div class="row">
            <div class="col-md-2">
                <div class="navLink">
                    <a href="#">All our products</a>
                </div>
            </div>
            <div class="col-md-2">
                <div class="navLink">
                    <a href="#">Inspiration for the office</a>
                </div>
            </div>
            <div class="col-md-2">
                <div class="navLink">
                    <a href="#">About OS</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default NavComponent;
