
import products from '../../../../public/data.json'

const ProductDetailsPage = async ({params}) => {

    const {id} = await params;

    const product = products.find(p => p.id === Number(id));
    console.log(product);

    return (
        <div className='w-11/12 mx-auto'>
            <p>{product.brand}</p>
        </div>
    );
};

export default ProductDetailsPage;