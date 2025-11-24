import * as Yup from "yup";
export interface LoginFormValues {
    email: string;
    password: string;
}
export const loginInitialValues: LoginFormValues = {
    email: "",
    password: "",
};
export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Email es obligatorio"),
    password: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("Contraseña es obligatoria"),
})