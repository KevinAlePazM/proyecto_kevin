import { useState } from "react";

const useForm = (initialValues) => {
    const [formData, setFormData] = useState(initialValues);

    const resetForm = () => {
        setFormData(initialValues);
    };

    return {
        formData,
        setFormData,
        resetForm,
    };
};

export default useForm;
