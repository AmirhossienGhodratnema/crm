
export default function FormInput({ name, label, type, value, onChange }) {
    return (
        <div className="form-input">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                id={name}
                name={name}
                onChange={onChange}
            />
        </div>
    )
};
