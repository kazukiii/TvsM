import { FC } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../services/axiosInstance.ts'
import { useForm } from 'react-hook-form'

type SignUpFormData = {
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}

const SignUp: FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>()

  const onSubmit = async (data: SignUpFormData) => {
    if (data.email !== data.confirmEmail) {
      alert("Emails don't match")
      return
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      const response = await axiosInstance.post('/user/signup', data)
      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      alert('Signup failed')
    }

    reset()
  }

  const continueAsGuest = () => {
    localStorage.setItem('token', 'guest')
    navigate('/')
  }

  return (
    <div>
      <Header />
      <div className="lg:py-[135px] py-[90px] px-[20px]">
        <div className="max-w-[710px] mx-auto w-full">
          <h3 className="font-ldr-kaet lg:text-[68px] sm:text-[45px] text-[25px] text-center">Welcome to TvsM!</h3>
          <div className="mt-[20px] flex lg:gap-[40px] gap-5 flex-col">
            <div>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Re-enter your Email"
                className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]"
                {...register('confirmEmail', { required: true })}
              />
              {errors.confirmEmail && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]"
                  {...register('password', { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]"
                  {...register('confirmPassword', { required: true })}
                />
                {errors.confirmPassword && <span className="text-red-500">This field is required</span>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]"
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && <span className="text-red-500">This field is required</span>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
              <Button
                className="border-tvsm-orange lg:text-[32px] text-[20px] w-full lg:h-[100px] h-[50px]"
                text="SIGN UP"
                onClick={handleSubmit(onSubmit)}
              />
              <Button
                className="border-tvsm-orange lg:text-[32px] text-[20px] w-full lg:h-[100px] h-[50px]"
                text="CONTINUE AS GUEST"
                onClick={continueAsGuest}
              />
            </div>
          </div>
          <div className="flex justify-center mt-[20px]">
            <button
              className="text-[#00A0E4] font-ldr-kaet sm:text-[25px] text-[18px]"
              onClick={() => navigate('/login')}
            >
              Already registered? Sign in
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
