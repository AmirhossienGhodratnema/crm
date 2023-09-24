import FormInput from "./formInput";
import ItemList from "./itemList";

// , value, onChange

export default function Form({ form, setForm }) {
    console.log(form)
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

    }
    return (
        <div>
            <FormInput
                name='name'
                label='Name'
                type='text'
                value={form.name}
                onChange={changeHandler}
            />

            <FormInput
                name='lastName'
                label='Last Name'
                type='text'
                value={form.lastName}
                onChange={changeHandler}
            />

            <FormInput
                name='email'
                label='Email'
                type='text'
                value={form.email}
                onChange={changeHandler}
            />

            <FormInput
                name='address'
                label='Address'
                type='text'
                value={form.address}
                onChange={changeHandler}
            />

            <FormInput
                name='postalCode'
                label='Postal Code'
                type='text'
                value={form.postalCode}
                onChange={changeHandler}
            />
            <ItemList form={form} setForm={setForm} />
        </div>
    )
};
