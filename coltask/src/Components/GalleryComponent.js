
import pr1 from '../Images/paper1.jpg';
import pr2 from '../Images/paper2.jpg';
import pr3 from '../Images/paper3.jpg';
import '../main.css';

function GalleryComponent() {
  return (
    <div class="e-gallery">
        <div class="row">
            <div class="i-bigimage col-12">
                <img  src={pr1} />
            </div>
        </div>
        <div class="row">
            <div class="i-smallimg col-4 col-md-4">
                <img src={pr1} alt="paper" />
            </div>
            <div class="i-smallimg col-4 col-md-4">
                <img src={pr2} alt="paper" />
            </div>
            <div class="i-smallimg col-4 col-md-4">
                <img src={pr3} alt="paper" />
            </div>
        </div>
    </div>
  );
}

export default GalleryComponent;
