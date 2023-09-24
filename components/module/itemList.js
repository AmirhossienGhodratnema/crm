import FormInput from "./formInput";

export default function ItemList({ form, setForm }) {
    const { product } = form;

    const addHandler = () => {
        setForm({
            ...form,
            product: [...product, { name: '', price: '', qty: '' }]
        });
    };


    const changeHandler = (e, index) => {
        const { name, value } = e.target;
        let newProduct = [...product];
        newProduct[index][name] = value;
        setForm({
            ...form,
            product: newProduct
        });
    };


    const deleteHandler = (e, index) => {
        let newProduct = [...product];
        newProduct.splice(index, 1);
        setForm({
            ...form,
            product: newProduct
        });
    };

    return (
        <div className="item-list">
            <p>Purchased products</p>
            {
                product && product.map((item, index) => (
                    <div className="form-input__list" key={index}>
                        <FormInput
                            name='name'
                            label='product name'
                            type='text'
                            value={item.name}
                            onChange={(e) => changeHandler(e, index)}
                        />
                        <div>
                            <FormInput
                                name='price'
                                label='Price'
                                type='text'
                                value={item.price}
                                onChange={(e) => changeHandler(e, index)}
                            />
                            <FormInput
                                name='qty'
                                label='Qty'
                                type='number'
                                value={item.qty}
                                onChange={(e) => changeHandler(e, index)}
                            />
                        </div>
                        <button onClick={(e) => deleteHandler(e, index)}>Remove</button>
                    </div>
                ))
            }
            <button onClick={addHandler} >Add item</button>
        </div>
    )
};
