import * as Yup from "yup";
export interface RegisterFormValues {
    name:string
    email: string;
    password: string;
    address: string;
    phone: string;
}
export const RegisterInitialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
};
export const registerValidationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string().email("Correo inválido").required("Email es obligatorio"),
    password: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("Contraseña es obligatoria"),
    address: Yup.string().required("La dirección es obligatoria"),
    phone: Yup.string().matches(/^[0-9]+$/, "El teléfono debe contener solo números").min(10, "El teléfono debe tener al menos 10 dígitos").required("El teléfono es obligatorio"),
})