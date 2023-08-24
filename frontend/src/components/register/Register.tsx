import React, { FC, useState } from 'react';
import Button from '../common/Button.tsx';
//@ts-ignore
import { createUser } from '../../services/userService'; // Importe a função para criar usuário

const Register: FC = () => {
    const [formData, setFormData] = useState({
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (formData.password !== formData.confirmPassword) {
        alert('As senhas não coincidem');
        return;
      }
  
      try {
        await createUser(formData.email, formData.password, false); // Não define isAdmin como true
        alert('Usuário cadastrado com sucesso!');
        // Redirecionar o usuário para a página de login ou outra página apropriada após o registro
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.');
      }
    };

  return (
    <div className="flex justify-center items-start mt-10 h-screen-100">
      <div className="text-center mt-10">
        <h2 className="font-ldr-kaet text-5xl mt-10">WELCOME TO TVSM!</h2>
        <form onSubmit={handleSubmit}>
          {/* Your input fields */}
          <div className="mt-10">
            <div className='flex flex-col'>
              <input
                className="w-711 h-70 mb-4 mx-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}

              />
              <input
                className="w-711 h-76 mb-2 mx-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Re-enter your Email"
                value={formData.confirmEmail}
                onChange={handleChange}
              />
            </div>  
            <div className="flex justify-center">
              <input
                className="w-1/2 h-76 mb-2 px-4 m-3 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                className="w-1/2 h-76 m-3 mb-2 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Re-enter your Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <input
                className="w-1/2 h-76 m-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                className="w-1/2 h-76 px-4 m-3 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>  
          </div>
          
          <div className="flex justify-center items-start">
            <Button
              text="SIGN UP"
              className="w-80 h-25 text-4xl py-6 px-4 m-3"
              />
            <Button
              text="CONTINUE AS A GEST"
              className="w-80 h-25 text-3xl py-2 px-4 m-3"
              />
          </div> 
        </form>
        <h3 className="font-ldr-kaet text-2xl mt-1 text-tvsm-blue">ALREADY REGISTERED? SIGN IN</h3>
      </div>
    </div>
  );
};

export default Register;
