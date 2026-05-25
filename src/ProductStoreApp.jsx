import ProductStore from './ProductStore';
import profile from './assets/profile.png';

function ProductStoreApp(){


    return(<div>
            <ProductStore 
            image={profile}
            productName="Sugar"
            price={200}
            inStock={true}
            />
           </div>);
}
export default ProductStoreApp;