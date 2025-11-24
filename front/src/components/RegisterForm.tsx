'use client'
import { registerUser } from "@/services/authServices";
import { RegisterFormValues, RegisterInitialValues, registerValidationSchema,  } from "@/validators/registerSchema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function RegisterForm() {
    const router = useRouter();
   
    const formik = useFormik<RegisterFormValues>({
        initialValues: RegisterInitialValues,
        validationSchema: registerValidationSchema,
        onSubmit:(values, {resetForm}) => {handleRegister(values, resetForm)}
    });

    const handleRegister = async (data: RegisterFormValues, resetForm: () => void)  => {
       const res = await registerUser(data)
       if(res){
        toast.success("Registro exitoso",{duration: 2000});
        resetForm();
        router.push("/login");
       }else{
        toast.error('Error al registrar el usuario');
       }
    }
    return (

  <form
    onSubmit={formik.handleSubmit}
    className="max-w-md w-md mx-auto mt-10 p-8 bg-white shadow-2xl rounded-2xl space-y-6"
  >
      <div className="text-2xl text-center font-bold"> Crear cuenta </div>
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-1 font-semibold text-gray-700">
        Nombre
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
          formik.touched.name && formik.errors.name
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-blue-200"
        }`}
      />
      {formik.touched.name && formik.errors.name && (
        <span className="text-red-500 text-sm mt-1">{formik.errors.name}</span>
      )}
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-1 font-semibold text-gray-700">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
          formik.touched.email && formik.errors.email
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-blue-200"
        }`}
      />
      {formik.touched.email && formik.errors.email && (
        <span className="text-red-500 text-sm mt-1">{formik.errors.email}</span>
      )}
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="mb-1 font-semibold text-gray-700">
        Contraseña
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
          formik.touched.password && formik.errors.password
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-blue-200"
        }`}
      />
      {formik.touched.password && formik.errors.password && (
        <span className="text-red-500 text-sm mt-1">{formik.errors.password}</span>
      )}
    </div>

   
    <div className="flex flex-col">
      <label htmlFor="address" className="mb-1 font-semibold text-gray-700">
        Dirección
      </label>
      <input
        id="address"
        name="address"
        type="text"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
          formik.touched.address && formik.errors.address
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-blue-200"
        }`}
      />
      {formik.touched.address && formik.errors.address && (
        <span className="text-red-500 text-sm mt-1">{formik.errors.address}</span>
      )}
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone" className="mb-1 font-semibold text-gray-700">
        Teléfono
      </label>
      <input
        id="phone"
        name="phone"
        type="text"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
          formik.touched.phone && formik.errors.phone
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-blue-200"
        }`}
      />
      {formik.touched.phone && formik.errors.phone && (
        <span className="text-red-500 text-sm mt-1">{formik.errors.phone}</span>
      )}
    </div>

    
    <div>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full py-3 rounded-lg text-white font-semibold transition-colors bg-teal-500 hover:bg-teal-700 disabled:opacity-50"
      >
        {formik.isSubmitting ? "Registrando..." : "Registrarse"}
      </button>
    </div>
  </form>

  );
};