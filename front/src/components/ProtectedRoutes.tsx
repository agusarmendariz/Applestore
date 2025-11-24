'use client';

import { useAppStore } from '@/context/appContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProtectedRoutesProps } from '@/interfaces/interfaces';

export default function ProtectedRoutes({children}:ProtectedRoutesProps) {
  const { dataUser } = useAppStore();
  const router = useRouter();
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      
      setLoading(false);
      if (!dataUser?.login) {
      // Si no está logueado, redirige a login
      router.push('/login');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [dataUser, router]);
    
  

 if (loading || !dataUser?.login ) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-600 text-lg animate-pulse">Cargando...</p>
      </div>
    );
  }
  // Si está logueado, muestra hijos
  return <>{children}</>;
}
