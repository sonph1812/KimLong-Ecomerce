import { useDispatch, useSelector } from "react-redux"



const DeleteProduct =() => {
    const dispatch = useDispatch()
    const products = useSelector(state => state);
    console.log(products);

}