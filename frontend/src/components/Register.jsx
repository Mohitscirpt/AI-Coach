import { SignUp } from '@clerk/clerk-react';

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <SignUp path="/register" routing="path" signInUrl="/login" />
    </div>
  );
};

export default Register;
