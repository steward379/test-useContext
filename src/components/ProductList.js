import React, {useState, useEffect} from "react";

function ProductList(){
    let [products, setProducts] = useState(null);
    // let [products, setProducts] = useState([]);
    useEffect(function(){
        let src = "https://cwpeng.github.io/live-records-samples/data/products.json";
        fetch(src).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            setProducts(data);
        });
    }, []);

    if(products==null){
        return <div>Loading</div>
    }else{
        return <>
            <ul>
                {products.map((product, index)=>{
                    return <li>{product.name} - {product.price}</li>
                })}
            </ul>
        </>
    }
};
export default ProductList;

// https://cwpeng.github.io/live-records-samples/data/products.json