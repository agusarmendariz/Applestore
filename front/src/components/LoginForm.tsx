'use client'
import { LoginFormValues, loginInitialValues, loginValidationSchema } from "@/validators/loginSchema";
import { useFormik } from "formik";
import { loginUser } from "@/services/authServices";
import { useAppStore} from "@/context/appContext";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function LoginForm() {
    const { setDataUser } = useAppStore();
       const router = useRouter(); 

    const formik = useFormik<LoginFormValues>({
        initialValues: loginInitialValues,
        validationSchema: loginValidationSchema,
         onSubmit: (values, { resetForm }) => handleLogin(values, resetForm),
  });

    const handleLogin = async (data: LoginFormValues, resetForm: () => void) => {
        const res = await loginUser(data);
        if(res.login){
               setDataUser(res);

      localStorage.setItem("user", JSON.stringify(res));
            toast.success("Has iniciado sesión correctamente",{duration: 2000});
            resetForm();
            router.push("/dashboard");
        }else{
            toast.error(res.message);
        }
    };
   
    return (
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl space-y-6">
            <div className="text-2xl text-center font-bold">Iniciar sesión</div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ejemplo@email.com"
                    className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formik.touched.email && formik.errors.email 
                            ? 'border-red-500 focus:ring-red-300' 
                            : 'border-gray-300 focus:ring-blue-300'
                    }`}
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 font-medium text-gray-700">Contraseña</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formik.touched.password && formik.errors.password 
                            ? 'border-red-500 focus:ring-red-300' 
                            : 'border-gray-300 focus:ring-blue-300'
                    }`}
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
            </div>

            <button 
            type="submit" 
            disabled={formik.isSubmitting} 
            className="w-full bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 flex justify-center items-center gap-2"
            >
            {formik.isSubmitting ? (
                <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Enviando...
                </>
            ) : (
                "Iniciar sesión"
            )}
            </button>
        </form>
    );
}

